const functions = require('firebase-functions')
const stripe = require('stripe')(functions.config().keys.webhooks)
const endpointSecret = functions.config().keys.signing
// import { ourFireStore } from '../src/firebaseApp'
const admin = require('firebase-admin')
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
            endpointSecret
        )
        const dataObject = event.data.object
        await admin
            .firestore()
            .collection('transactions')
            .add({
                checkoutSessionId: dataObject.id,
                paymentStatus: dataObject.paid,
                shippingInfo: dataObject.shipping ?? null,
                amountTotal: dataObject.amount_captured / 100,
                clientEmail: dataObject.billing_details.email,
                itemsPurchased: dataObject.description,
            })
        return response.sendStatus(200, event)
    } catch (err) {
        console.error(' Webhook signature verification failed. ', err)
        return response.sendStatus(400)
    }
})
