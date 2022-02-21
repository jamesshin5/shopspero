import { loadStripe } from '@stripe/stripe-js'
import React, { useEffect, useState } from 'react'
import {
    HStack,
    VStack,
    Stack,
    Box,
    Text,
    Image,
    Button,
    Checkbox,
    Input,
} from '@chakra-ui/react'
import '../../../styles/desktop/FallStickerPage.css'
import Fade from 'react-reveal/Fade'
import { ourFireStore } from '../../../firebaseApp'
import {
    doc,
    getDoc,
    runTransaction,
    query,
    collection,
    documentId,
    where,
    onSnapshot,
} from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid'

let stripePromise

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY)
    }
    return stripePromise
}

const FullnessHoodieDesktop = () => {
    const [stripeError, setStripeError] = useState(null)
    const [shippingChecked, setShippingChecked] = useState(false)
    const [totalCost, setTotalCost] = useState(0)

    const [smallQuantity, setSmallQuantity] = useState(0)
    const [mediumQuantity, setMediumQuantity] = useState(0)
    const [largeQuantity, setLargeQuantity] = useState(0)

    const [productColor, setProductColor] = useState('Sand')
    const [isLoading, setLoading] = useState(false)

    const [smallQuantityMax, setSmallQuantityMax] = useState({})
    const [mediumQuantityMax, setMediumQuantityMax] = useState({})
    const [largeQuantityMax, setLargeQuantityMax] = useState({})
    const [cartID, setCartID] = useState(uuidv4())
    const [sessionExpired, setSessionExpired] = useState(false)
    const [sessionExpiredOnce, setSessionExpiredOnce] = useState(false)

    const ProductNameMap = {
        'Fullness Hoodie (S) (Sand)': 'price_1KVVNWIcIcxBrzywXJXs6To9',
        'Fullness Hoodie (S) (Blue)': 'price_1KVVO9IcIcxBrzywl8epK8xJ',
        'Fullness Hoodie (M) (Sand)': 'price_1KVVJmIcIcxBrzyw9UFCa0Co',
        'Fullness Hoodie (M) (Blue)': 'price_1KVVOYIcIcxBrzywhWv6SMyG',
        'Fullness Hoodie (L) (Blue)': 'price_1KVVOrIcIcxBrzywwh1jA8MU',
        'Fullness Hoodie (2XL) (Sand)': 'price_1KVVJ1IcIcxBrzyw0exurgSB',
    }

    const ProductNameMapShipping = {
        'Fullness Hoodie (S) (Sand)': 'price_1KVVNWIcIcxBrzywOeX5DtQ6',
        'Fullness Hoodie (S) (Blue)': 'price_1KVVO9IcIcxBrzywH663Jh9W',
        'Fullness Hoodie (M) (Sand)': 'price_1KVVJmIcIcxBrzywasHTknLd',
        'Fullness Hoodie (M) (Blue)': 'price_1KVVOYIcIcxBrzywyCsmLOEe',
        'Fullness Hoodie (L) (Blue)': 'price_1KVVOrIcIcxBrzyw1Zplqnli',
        'Fullness Hoodie (2XL) (Sand)': 'price_1KVVJ1IcIcxBrzyw0vURXasK',
    }

    var checkoutOptions = {
        lineItems: [],
        mode: 'payment',
        successUrl: window.location.href + '/success',
        cancelUrl: window.location.href + '/cancel',
    }

    //Add additional parameters => int size, int newQuantity
    //Based on size, set the corresponding object's quantity attribute to newQuantity
    //Recalculate stateful value of total cost + check if the box is checked
    // const calculateTotalCost = (size, newQuantity)
    useEffect(() => {
        let totalQuantity = smallQuantity + mediumQuantity + largeQuantity
        //If box is checked, add extra costs
        if (shippingChecked) {
            setTotalCost(39 * totalQuantity)
        } else {
            setTotalCost(34 * totalQuantity)
        }
    }, [
        shippingChecked,
        smallQuantity,
        mediumQuantity,
        largeQuantity,
        stripeError,
        productColor,
    ])

    useEffect(() => {
        if (sessionExpired) {
            alert(
                'Your session has expired! Please come back and reselect your items!'
            )
            if (window.location.hostname === 'shopspero.org') {
                window.location.href = 'https://shopspero.org/designs'
            }

            //Testing/Local
            else {
                window.location.href = 'http://localhost:3000/designs'
            }
        }
    }, [sessionExpired])

    const q = query(
        collection(ourFireStore, 'carts'),
        where(documentId(), '==', cartID)
    )

    const subToCartExpiry = onSnapshot(q, (snapshot) => {
        if (snapshot && snapshot.docChanges()) {
            snapshot.docChanges().forEach((change) => {
                if (change.type === 'removed') {
                    if (sessionExpiredOnce) {
                        //Don't alert user again
                        setSessionExpiredOnce(false)
                    } else {
                        setSessionExpired(true)
                        setSessionExpiredOnce(true)
                    }
                }
            })
        }
        //Only want to do something when the doc is nonexistent and it has been more than five minutes
    })

    const onShippingBoxChange = () => {
        //Need to update total cost
        setShippingChecked(!shippingChecked)
    }

    const updateCart = async (size, newQuantity, operation) => {
        // var quantity = 0
        //handle each size update quantity here
        const item = `Fullness Hoodie (${size}) (${productColor})`

        //Batching all these reads and writes into a TRANSACTION
        //So either all goes through or neither does
        try {
            await runTransaction(ourFireStore, async (transaction) => {
                const InventoryDocSnap = await transaction.get(
                    doc(ourFireStore, 'inventory', 'Fullness Hoodie')
                )

                //check if the cart exists in db
                const docSnap = await transaction.get(
                    doc(ourFireStore, 'carts', cartID)
                )

                const retrievedFullnessInventory = InventoryDocSnap.data()
                // Check if there is inventory to take
                if (operation == 'add') {
                    const tempoCount =
                        retrievedFullnessInventory['Count'][item] - 1
                    if (tempoCount < 0) {
                        //invalid
                        alert(
                            'The stock you requested for is not available at this time!'
                        )
                        return
                    }
                    retrievedFullnessInventory['Count'][item] -= 1
                    transaction.update(
                        doc(ourFireStore, 'inventory', 'Fullness Hoodie'),
                        {
                            ...retrievedFullnessInventory,
                        }
                    )
                } else {
                    retrievedFullnessInventory['Count'][item] += 1
                    transaction.update(
                        doc(ourFireStore, 'inventory', 'Fullness Hoodie'),
                        {
                            ...retrievedFullnessInventory,
                        }
                    )
                }

                if (!docSnap.exists()) {
                    transaction.set(doc(ourFireStore, 'carts', cartID), {
                        lastUpdated: new Date(Date.now()),
                        items: {
                            [item]: newQuantity,
                        },
                        paid: false,
                    })
                }
                //updating cart doc with latest inventory
                else {
                    const retrievedCart = docSnap.data()
                    retrievedCart.lastUpdated = new Date(Date.now())
                    retrievedCart.items[item] = newQuantity
                    transaction.set(doc(ourFireStore, 'carts', cartID), {
                        ...retrievedCart,
                    })
                }
            })
        } catch (e) {
            console.log('Transaction failed: ', e)
        }

        var quantity = 0
        switch (size) {
            case 'S':
                setSmallQuantity(newQuantity)
                break
            case 'M':
                setMediumQuantity(newQuantity)
                break
            case 'L':
                setLargeQuantity(newQuantity)
                break
            case '2XL':
                setLargeQuantity(newQuantity)
                break
            default:
                alert(
                    'An error has occured in updating your cart, please reload the page.'
                )
        }
        quantity = smallQuantity + mediumQuantity + largeQuantity

        if (shippingChecked) {
            setTotalCost(quantity * 41)
        } else {
            setTotalCost(quantity * 36)
        }
    }

    const restoreAndClear = async () => {
        //First we read the cart and restore inventory

        try {
            await runTransaction(ourFireStore, async (transaction) => {
                const cartDocSnap = await transaction.get(
                    doc(ourFireStore, 'carts', cartID)
                )
                if (!cartDocSnap.exists()) {
                    //In this case, the cart does not exist

                    throw 'Cart doc does not exist'
                }
                const InventoryDocSnap = await transaction.get(
                    doc(ourFireStore, 'inventory', 'Fullness Hoodie')
                )
                if (!InventoryDocSnap.exists()) {
                    console.error(
                        'error in retrieving Fullness Hoodie inventory doc'
                    )
                }

                var inventoryData = InventoryDocSnap.data()
                var cartData = cartDocSnap.data()
                //Map through the keys in cartData and restore each field in inventoryDocData
                for (const [item, stock] of Object.entries(cartData.items)) {
                    //restore inventory in inventoryDocData
                    inventoryData['Count'][item] += stock
                    //Zero out cartData
                    cartData.items[item] = 0
                }

                // //Write back inventory data
                transaction.update(
                    doc(ourFireStore, 'inventory', 'Fullness Hoodie'),
                    {
                        ...inventoryData,
                    }
                )

                //Write back cart data
                transaction.update(doc(ourFireStore, 'carts', cartID), {
                    ...cartData,
                })
            })
        } catch (e) {
            console.log('Transaction failed: ', e)
        }

        setSmallQuantity(0)
        setMediumQuantity(0)
        setLargeQuantity(0)
    }

    const redirectToCheckout = async () => {
        setLoading(true)

        const cartDetails = await getDoc(doc(ourFireStore, 'carts', cartID))
        const cartItems = cartDetails.data().items
        if (shippingChecked) {
            checkoutOptions.shippingAddressCollection = {
                allowedCountries: ['US'],
            }
            for (var [key, value] of Object.entries(cartItems)) {
                checkoutOptions.lineItems.push({
                    price: ProductNameMapShipping[key],
                    quantity: value,
                })
            }
        } else {
            for (var [key, value] of Object.entries(cartItems)) {
                checkoutOptions.lineItems.push({
                    price: ProductNameMap[key],
                    quantity: value,
                })
            }
        }

        if (window.location.hostname === 'shopspero.org') {
            checkoutOptions.successUrl = `https://shopspero.org/success?cartid=${cartID}`
        }

        //Testing/Local
        else {
            checkoutOptions.successUrl = `http://localhost:3000/success?cartid=${cartID}`
        }

        const stripe = await getStripe()
        await stripe
            .redirectToCheckout(checkoutOptions)
            .then(function (result) {
                if (result.error) {
                    // Error scenario 1
                    // If `redirectToCheckout` fails due to a browser or network
                    // error, display the localized error message to your customer.
                    alert(result.error.message)
                }
            })
            .catch(function (error) {
                if (error) {
                    // Error scenario 2
                    // If the promise throws an error
                    alert(
                        'We are experiencing issues connecting to our' +
                            ' payments provider. ' +
                            error
                    )
                }
            })
    }
    if (stripeError) {
        alert(stripeError)
    }

    return (
        <Stack
            direction={{ base: 'column', lg: 'row' }}
            spacing="1.5rem"
            ml={{ base: '0', sm: '1rem' }}
            mt={{ base: '10px', sm: 'none' }}
            pt={{ base: 'none', lg: '100px' }}
        >
            <VStack spacing="5px">
                <Fade bottom>
                    <Box
                        display="flex"
                        justifyContent="center"
                        align-items="center"
                        overflow="hidden"
                        width={{ base: '80vw', sm: '60vw', lg: '40vw' }}
                        height={{ base: '20vh', sm: '40vh', lg: '40vh' }}
                    >
                        <Image
                            src={require('../../../images/design-photos/fullness1.jpg')}
                            alt=""
                            objectFit="cover"
                            w="100%"
                            h="100%"
                        />
                    </Box>
                </Fade>
                <HStack spacing="5px">
                    <Fade bottom>
                        <Box
                            display="flex"
                            justifyContent="center"
                            align-items="center"
                            overflow="hidden"
                            width={{
                                base: '39vw',
                                sm: '29.75vw',
                                lg: '19.75vw',
                            }}
                            height={{
                                base: '15vh',
                                sm: '25vh',
                                lg: '25vh',
                            }}
                        >
                            <Image
                                src={require('../../../images/design-photos/fullness2.jpg')}
                                alt=""
                                objectFit="cover"
                                w="100%"
                                h="100%"
                            />
                        </Box>
                    </Fade>

                    <Fade bottom>
                        <Box
                            display="flex"
                            justifyContent="center"
                            align-items="center"
                            overflow="hidden"
                            width={{
                                base: '39vw',
                                sm: '29.75vw',
                                lg: '19.75vw',
                            }}
                            height={{
                                base: '15vh',
                                sm: '25vh',
                                lg: '25vh',
                            }}
                        >
                            <Image
                                src={require('../../../images/design-photos/fullness3.jpg')}
                                alt=""
                                objectFit="cover"
                                w="100%"
                                h="100%"
                            />
                        </Box>
                    </Fade>
                </HStack>
            </VStack>
            <VStack textAlign="left" justifyContent="center" maxW="500px">
                <VStack alignItems="flex-start">
                    <Fade bottom>
                        <HStack alignItems="flex-start">
                            <Text
                                fontFamily="Lexend Deca"
                                fontSize={{ base: '30px', sm: '45px' }}
                                lineHeight={{ base: '35px', sm: '60px' }}
                            >
                                <b>FULLNESS</b> <br />
                                HOODIE
                            </Text>
                            <Box
                                bgColor="#5c6a6f"
                                px={{ base: '4px', sm: '7px' }}
                                py={{ base: '2px', sm: '5px' }}
                            >
                                <Text
                                    fontFamily="Lexend Deca"
                                    fontSize={{ base: '7px', sm: '10px' }}
                                    color="white"
                                >
                                    NEW RELEASE!
                                </Text>
                            </Box>
                        </HStack>
                    </Fade>
                    <Fade bottom>
                        <Text
                            fontFamily="Tenor Sans"
                            fontSize={{ base: '10px', sm: '12px' }}
                            py="10px"
                        >
                            “You make known to me the path of life; in your
                            presence there is fullness of joy; at your right
                            hands are pleasures forevermore.”
                            <br></br>
                            <b>Psalm 16:11 </b>
                        </Text>
                    </Fade>
                    <Fade bottom>
                        <Text
                            fontFamily="Lexend Deca"
                            fontSize={{ base: '10px', sm: '12px' }}
                        >
                            Spero’s hoodie is designed to be a reminder of the
                            joy that can only be found in God. We define
                            fullness as being complete— lacking in nothing as we
                            seek the Lord. In the many moments of uncertainty
                            that we face our team clings to the hope that God
                            has a good & sovereign plan for us. We hope that
                            you’re encouraged by this too!
                        </Text>
                    </Fade>
                    <Fade bottom>
                        <HStack pt="20px">
                            <Text
                                fontFamily="Lexend Deca"
                                fontSize="sm"
                                pr="16px"
                            >
                                Small
                            </Text>
                            <HStack maxW="320px">
                                <Button
                                    isDisabled={smallQuantity < 1}
                                    onClick={() => {
                                        updateCart(
                                            'S',
                                            smallQuantity - 1,
                                            'dec'
                                        )
                                    }}
                                >
                                    -
                                </Button>
                                <Input value={smallQuantity} w="43px" />
                                <Button
                                    isDisabled={
                                        smallQuantity >=
                                        Math.min(
                                            smallQuantityMax[productColor],
                                            9
                                        )
                                    }
                                    onClick={() => {
                                        updateCart(
                                            'S',
                                            smallQuantity + 1,
                                            'add'
                                        )
                                    }}
                                >
                                    +
                                </Button>
                            </HStack>
                        </HStack>

                        <HStack>
                            <Text fontFamily="Lexend Deca" fontSize="sm">
                                Medium
                            </Text>
                            <HStack maxW="320px">
                                <Button
                                    isDisabled={mediumQuantity < 1}
                                    onClick={() => {
                                        updateCart(
                                            'M',
                                            mediumQuantity - 1,
                                            'dec'
                                        )
                                    }}
                                >
                                    -
                                </Button>
                                <Input value={mediumQuantity} w="43px" />
                                <Button
                                    isDisabled={
                                        mediumQuantity >=
                                        Math.min(
                                            mediumQuantityMax[productColor],
                                            9
                                        )
                                    }
                                    onClick={() => {
                                        updateCart(
                                            'M',
                                            mediumQuantity + 1,
                                            'add'
                                        )
                                    }}
                                >
                                    +
                                </Button>
                            </HStack>
                        </HStack>

                        <HStack>
                            <Text
                                fontFamily="Lexend Deca"
                                fontSize="sm"
                                pr={productColor == 'Blue' ? '15px' : '29px'}
                            >
                                {productColor == 'Blue' ? 'Large' : '2XL'}
                            </Text>

                            <HStack maxW="320px">
                                <Button
                                    isDisabled={largeQuantity < 1}
                                    onClick={() => {
                                        updateCart(
                                            productColor == 'Blue'
                                                ? 'L'
                                                : '2XL',
                                            largeQuantity - 1,
                                            'dec'
                                        )
                                    }}
                                >
                                    -
                                </Button>
                                <Input value={largeQuantity} w="43px" />
                                <Button
                                    isDisabled={
                                        largeQuantity >=
                                        Math.min(
                                            largeQuantityMax[productColor],
                                            9
                                        )
                                    }
                                    onClick={() => {
                                        updateCart(
                                            productColor == 'Blue'
                                                ? 'L'
                                                : '2XL',
                                            largeQuantity + 1,
                                            'add'
                                        )
                                    }}
                                >
                                    +
                                </Button>
                            </HStack>
                        </HStack>

                        <HStack pb="20px">
                            <Button
                                // disabled={productColor === 'sand'}
                                isActive={productColor === 'Sand'}
                                _active={{
                                    bg: '#d8c7af',
                                    // transform: 'scale(0.98)',
                                }}
                                _hover={{
                                    bg: '#e3e8f1',
                                }}
                                _focus={{ boxShadow: 'none' }}
                                onClick={async () => {
                                    //Clear our cart + restore inventory
                                    await restoreAndClear()
                                    setProductColor('Sand')
                                }}
                            >
                                <Text
                                    fontFamily="Lexend Deca"
                                    fontSize="sm"
                                    fontWeight="100"
                                    px="10px"
                                    color={
                                        productColor === 'Sand'
                                            ? 'white'
                                            : 'black'
                                    }
                                >
                                    Sand
                                </Text>
                            </Button>
                            <Button
                                isActive={productColor === 'Blue'}
                                _active={{
                                    bg: '#9bbdd8',
                                    // transform: 'scale(0.98)',
                                }}
                                _hover={{
                                    bg: '#e3e8f1',
                                }}
                                _focus={{ boxShadow: 'none' }}
                                onClick={async () => {
                                    //Clear our cart + restore
                                    //Edge case where we have not initialized our cart - handle in restoreAndClear
                                    await restoreAndClear()
                                    setProductColor('Blue')
                                }}
                            >
                                <Text
                                    fontFamily="Lexend Deca"
                                    fontSize="sm"
                                    fontWeight="100"
                                    px="10px"
                                    color={
                                        productColor === 'Blue'
                                            ? 'white'
                                            : 'black'
                                    }
                                >
                                    Blue
                                </Text>
                            </Button>
                        </HStack>
                    </Fade>
                    <Fade bottom>
                        <Checkbox
                            size="sm"
                            colorScheme="blue"
                            border="grey"
                            onChange={() => {
                                //Adding new handler for checking shipping checkbox
                                onShippingBoxChange()
                            }}
                        >
                            Shipping costs an additional $5 per item
                        </Checkbox>
                    </Fade>
                    <Fade bottom>
                        <Button
                            onClick={redirectToCheckout}
                            borderWidth="1px"
                            py="10px"
                            px="35px"
                            alignItems="center"
                            mt="10px"
                            disabled={totalCost == 0 || isLoading}
                        >
                            <Text
                                fontFamily="Lexend Deca"
                                fontSize="12px"
                                textAlign="center"
                                // _hover={{ fontSize: '9.5px' }}
                                transition="font-size 0.25s"
                            >
                                ${totalCost} - BUY NOW
                            </Text>
                        </Button>
                    </Fade>
                    <Box h={{ base: '30px', sm: '0px' }}></Box>
                </VStack>
            </VStack>
        </Stack>
    )
}

export default FullnessHoodieDesktop
