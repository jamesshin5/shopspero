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

let stripePromise

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY)
    }
    return stripePromise
}

const NewProduct = () => {
    const [stripeError, setStripeError] = useState(null)
    const [shippingChecked, setShippingChecked] = useState(false)
    const [totalCost, setTotalCost] = useState(0)
    const [smallQuantity, setSmallQuantity] = useState(0)
    const [mediumQuantity, setMediumQuantity] = useState(0)
    const [largeQuantity, setLargeQuantity] = useState(0)

    const ProductSM = {
        price: 'price_1KM3s4IcIcxBrzywDvLChE1t',
        quantity: smallQuantity,
    }

    const ProductMD = {
        price: 'price_1KMNPnIcIcxBrzywd3I6ISCx',
        quantity: mediumQuantity,
    }

    const ProductLG = {
        price: 'price_1KMP5qIcIcxBrzywrNv3jdUb',
        quantity: largeQuantity,
    }

    const checkoutOptions = {
        lineItems: [],
        mode: 'payment',
        successUrl: window.location.href + '/success',
        cancelUrl: window.location.href,
    }

    const products = [ProductSM, ProductMD, ProductLG]

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
    ])

    const onShippingBoxChange = () => {
        //Need to update total cost
        setShippingChecked(!shippingChecked)
    }
    const calculateTotalCost = async (size, newQuantity) => {
        // var quantity = 0
        //handle each size update quantity here
        var quantity = 0
        if (size === 'sm') {
            setSmallQuantity(newQuantity)
        }
        if (size === 'md') {
            setMediumQuantity(newQuantity)
        }
        if (size === 'lg') {
            setLargeQuantity(newQuantity)
        }

        if (shippingChecked) {
            setTotalCost(quantity * 39)
        } else {
            setTotalCost(quantity * 34)
        }
    }

    const redirectToCheckout = async () => {
        if (shippingChecked) {
            checkoutOptions.shippingAddressCollection = {
                allowedCountries: ['US'],
            }
            ProductSM.price = 'price_1KMNPCIcIcxBrzywtoTRVMGQ'
            ProductMD.price = 'price_1KMNPnIcIcxBrzywzbh4oTV7'
            ProductLG.price = 'price_1KMP5qIcIcxBrzywV1Q7MRqs'
        }

        products.forEach((product) => {
            if (product.quantity > 0) {
                checkoutOptions.lineItems.push(product)
            }
        })
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
        >
            <HStack>
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
                            <iframe
                                title="Manolo"
                                width="100%"
                                src="https://www.youtube.com/embed/t3A_AwNOT_8"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
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
                                    base: '20vh',
                                    sm: '20vh',
                                    lg: '20vh',
                                }}
                            >
                                <Image
                                    src={require('../../../images/design-photos/redeemed-left.jpg')}
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
                                    base: '20vh',
                                    sm: '20vh',
                                    lg: '20vh',
                                }}
                            >
                                <Image
                                    src={require('../../../images/design-photos/redeemed-right.jpg')}
                                    alt=""
                                    objectFit="cover"
                                    w="100%"
                                    h="100%"
                                />
                            </Box>
                        </Fade>
                    </HStack>
                </VStack>
            </HStack>
            <VStack textAlign="left" justifyContent="center" maxW="500px">
                <VStack alignItems="flex-start">
                    <Fade bottom>
                        <HStack alignItems="flex-start">
                            <Text
                                fontFamily="Lexend Deca"
                                fontSize={{ base: '30px', sm: '45px' }}
                                lineHeight={{ base: '35px', sm: '60px' }}
                            >
                                <b>REDEEMED</b> <br />
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
                            <b>78</b> Because of the tender mercy of our God,
                            <br></br>by which the rising sun will come to us
                            from heaven
                            <br></br>
                            <br></br>
                            <b>79</b> to shine on those living in darkness
                            <br></br>and in the shadow of death,
                            <br></br>to guide our feet into the path of peace.
                            <br></br>
                            <br></br>
                            <b>Luke 1:78-79</b>
                        </Text>
                    </Fade>
                    <Fade bottom>
                        <Text
                            fontFamily="Lexend Deca"
                            fontSize={{ base: '10px', sm: '12px' }}
                        >
                            The Redeemed Hoodie reminds us of God’s mercy and
                            grace in redeeming us sinners. On the back, the
                            illustration depicts rays of sunlight shining over a
                            valley that was once dark. This symbolizes how God
                            redeemed us when we were walking in darkness; like
                            the rising sun He comes to us to guide our feet to
                            the path of peace.
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
                                        calculateTotalCost(
                                            'sm',
                                            smallQuantity - 1
                                        )
                                    }}
                                >
                                    -
                                </Button>
                                <Input value={smallQuantity} w="43px" />
                                <Button
                                    isDisabled={smallQuantity > 8}
                                    onClick={() => {
                                        calculateTotalCost(
                                            'sm',
                                            smallQuantity + 1
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
                                        calculateTotalCost(
                                            'md',
                                            mediumQuantity - 1
                                        )
                                    }}
                                >
                                    -
                                </Button>
                                <Input value={mediumQuantity} w="43px" />
                                <Button
                                    isDisabled={mediumQuantity > 8}
                                    onClick={() => {
                                        calculateTotalCost(
                                            'md',
                                            mediumQuantity + 1
                                        )
                                    }}
                                >
                                    +
                                </Button>
                            </HStack>
                        </HStack>

                        <HStack pb="20px">
                            <Text
                                fontFamily="Lexend Deca"
                                fontSize="sm"
                                pr="15px"
                            >
                                Large
                            </Text>

                            <HStack maxW="320px">
                                <Button
                                    isDisabled={largeQuantity < 1}
                                    onClick={() => {
                                        calculateTotalCost(
                                            'lg',
                                            largeQuantity - 1
                                        )
                                    }}
                                >
                                    -
                                </Button>
                                <Input value={largeQuantity} w="43px" />
                                <Button
                                    isDisabled={largeQuantity > 8}
                                    onClick={() => {
                                        calculateTotalCost(
                                            'lg',
                                            largeQuantity + 1
                                        )
                                    }}
                                >
                                    +
                                </Button>
                            </HStack>
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

export default NewProduct
