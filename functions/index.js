const functions = require('firebase-functions')
const stripe = require('stripe')(functions.config().keys.webhooks)
const endpointSecret = functions.config().keys.signing
// import { ourFireStore } from '../src/firebaseApp'
const admin = require('firebase-admin')
const { map } = require('@firebase/util')
admin.initializeApp()

// import { ourFireStore } from '../src/firebaseApp'
// import { collection, getDocs, addDoc } from 'firebase/firestore'

exports.events = functions.https.onRequest(async (request, response) => {
    // response.send('Endpoint for Stripe Webhooks!')
    const sig = request.headers['stripe-signature']
    try {
        const event = stripe.webhooks.constructEvent(
            request.rawBody,
            sig,
            'whsec_jMXpBOXYFOdNp47vOoXQHL8El3jhrFrx'
        )
        if (event.type == 'charge.succeeded') {
            const dataObject = event.data.object
            // const regexForItemsPurchased =
            //     /[0-9]x (\w)+ (\w)+ \([A-Z]+\) \((\w)+\)/gm
            // const itemsPurchased = dataObject.description.match(
            //     regexForItemsPurchased
            // )
            // var mapOfItemsPurchased = {}
            // for (var item of itemsPurchased) {
            //     item = item.toString().split('x ')
            //     mapOfItemsPurchased[item[1]] = parseInt(item[0])
            // }

            // await admin
            //     .firestore()
            //     .collection('inventory')
            //     .doc('Fullness Hoodie')
            //     .get()
            //     .then(async (doc) => {
            //         if (!doc.exists) {
            //             throw 'Document does not exist'
            //         }
            //         var newCountsMap = doc.data().Count
            //         for (var key of Object.keys(mapOfItemsPurchased)) {
            //             newCountsMap[key] =
            //                 newCountsMap[key] - mapOfItemsPurchased[key]
            //         }
            //         await doc.ref.update({ Count: newCountsMap })
            //     })

            await admin
                .firestore()
                .collection('transactions')
                .add({
                    checkoutSessionId: dataObject.id,
                    paymentStatus: dataObject.paid,
                    shippingInfo: dataObject.shipping ?? null,
                    amountTotal: dataObject.amount_captured / 100,
                    clientEmail: dataObject.billing_details.email,
                    itemsPurchased: mapOfItemsPurchased,
                    timePurchased: new Date(Date.now()),
                })
        }

        return response.sendStatus(200, event)
    } catch (err) {
        console.error(' Webhook signature verification failed. ', err)
        return response.sendStatus(400)
    }
})

exports.scheduledFunction = functions.pubsub
    .schedule('every 5 minutes')
    .onRun(async (context) => {
        console.log('This will be run every 5 minutes!')
        const curTimeMinus5 = new Date(Date.now() - 1000 * (60 * 5))

        const inventoryData = (
            await admin
                .firestore()
                .collection('inventory')
                .doc('Fullness Hoodie')
                .get()
        ).data()
        // console.error(inventoryData)

        const invalidCarts = await admin
            .firestore()
            .collection('carts')
            .where('paid', '==', false)
            .where('lastUpdated', '<', curTimeMinus5)
            .get()
        // console.error(invalidCarts)
        invalidCarts.forEach(async (doc) => {
            // doc.data() is never undefined for query doc snapshots

            // inventoryData['Count'][item] += stock
            for (const [item, stock] of Object.entries(doc.data().items)) {
                //restore inventory in inventoryDocData
                inventoryData['Count'][item] += stock
            }
            await doc.ref.delete().then(() => {
                console.log('Invalid cart successfully deleted')
            })
        })
        await admin
            .firestore()
            .collection('inventory')
            .doc('Fullness Hoodie')
            .update({
                ...inventoryData,
            })

        return null
    })
