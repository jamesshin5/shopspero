import React, { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
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
    CloseButton,
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


//Coming up with props that we pass into this template

//Might want to add handlers in as a prop or we could import from somewhere?

/**
 * @property name - an array of words making up the product name
 * @property photos - indexed accordingly (like index 0 is a certain picture frame)
 * @property verse - "“You make known to me the path of life; in your presence there is fullness of joy; at your right hands are pleasures forevermore - Psalm 16:11" => verse is a JSON with key desc and origin
 * @property description - "Spero’s hoodie is designed to be a reminder of the joy that can only be found in God. We define fullness as being complete— lacking in nothing as we seek the Lord. In the many moments of uncertainty that we face our team clings to the hope that God has a good & sovereign plan for us. We hope that you’re encouraged by this too!"
 * @property ProductNameMap - const ProductNameMap = {
        'Fullness Hoodie (S) (Sand)': 'price_1KVVNWIcIcxBrzywXJXs6To9',
        'Fullness Hoodie (S) (Blue)': 'price_1KVVO9IcIcxBrzywl8epK8xJ',
        'Fullness Hoodie (M) (Sand)': 'price_1KVVJmIcIcxBrzyw9UFCa0Co',
        'Fullness Hoodie (M) (Blue)': 'price_1KVVOYIcIcxBrzywhWv6SMyG',
        'Fullness Hoodie (L) (Blue)': 'price_1KVVOrIcIcxBrzywwh1jA8MU',
        'Fullness Hoodie (2XL) (Sand)': 'price_1KVVJ1IcIcxBrzyw0exurgSB',
    }
 * @property ProductNameMapShipping -  const ProductNameMapShipping = {
        'Fullness Hoodie (S) (Sand)': 'price_1KVVNWIcIcxBrzywOeX5DtQ6',
        'Fullness Hoodie (S) (Blue)': 'price_1KVVO9IcIcxBrzywH663Jh9W',
        'Fullness Hoodie (M) (Sand)': 'price_1KVVJmIcIcxBrzywasHTknLd',
        'Fullness Hoodie (M) (Blue)': 'price_1KVVOYIcIcxBrzywyCsmLOEe',
        'Fullness Hoodie (L) (Blue)': 'price_1KVVOrIcIcxBrzyw1Zplqnli',
        'Fullness Hoodie (2XL) (Sand)': 'price_1KVVJ1IcIcxBrzyw0vURXasK',
    }
 * @property sizes - a map of <color => array of possible sizes>
 
 */


const NewProduct = (
    {
        name,
        photos,
        verse,
        description,
        ProductNameMap,
        ProductNameMapShipping,
        sizes
    }
) => {

    const [stripeError, setStripeError] = useState(null)
    const [shippingChecked, setShippingChecked] = useState(false)
    const [totalCost, setTotalCost] = useState(0)

    const [smallQuantity, setSmallQuantity] = useState(0)
    const [mediumQuantity, setMediumQuantity] = useState(0)
    const [largeQuantity, setLargeQuantity] = useState(0)

    const [productColor, setProductColor] = useState('Blue')
    const [isLoading, setLoading] = useState(false)

    const [smallQuantityMax, setSmallQuantityMax] = useState({})
    const [mediumQuantityMax, setMediumQuantityMax] = useState({})
    const [largeQuantityMax, setLargeQuantityMax] = useState({})
    const [cartID, setCartID] = useState(uuidv4())
    const [sessionExpired, setSessionExpired] = useState(false)
    const [sessionExpiredOnce, setSessionExpiredOnce] = useState(false)

    const [mainPhotoModal, setMainPhotoModal] = useState('none')
    const [leftPhotoModal, setLeftPhotoModal] = useState('none')
    const [rightPhotoModal, setRightPhotoModal] = useState('none')

    

   

    var checkoutOptions = {
        lineItems: [],
        mode: 'payment',
        successUrl: window.location.href + '/success',
        cancelUrl: window.location.href + '/cancel',
    }




    return (
        <Stack
            direction={{ base: 'column', lg: 'row' }}
            spacing="1.5rem"
            ml={{ base: '0', sm: '1rem' }}
            mt={{ base: '10px', sm: 'none' }}
            pt={{ base: 'none', lg: '100px' }}
        >
            <Stack
                display={mainPhotoModal}
                position="fixed"
                zIndex="1"
                left={0}
                top={0}
                width="100%"
                height="100%"
                backgroundColor="rgba(0,0,0,0.9)"
                pt="25px"
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <CloseButton
                    _focus={{ boxShadow: 'none' }}
                    size="lg"
                    onClick={() => {
                        setMainPhotoModal('none')
                    }}
                    position="absolute"
                    top="15px"
                    right="30px"
                    color="#ffffff"
                />
                <Image
                    src={require('../../../images/design-photos/fullness1.jpg')}
                    alt=""
                    w="80%"
                    h="90%"
                    display="block"
                    objectFit="contain"
                />
            </Stack>
            <Stack
                display={leftPhotoModal}
                position="fixed"
                zIndex="1"
                left={0}
                top={0}
                width="100%"
                height="100%"
                backgroundColor="rgba(0,0,0,0.9)"
                direction="column"
                alignItems="center"
            >
                <Box
                    h="500px"
                    w="500px"
                    pt="100px"
                    pl={{ base: '85px', sm: '0px' }}
                >
                    <Image
                        src={require('../../../images/design-photos/fullness2.jpg')}
                        alt=""
                        w="80%"
                        display="block"
                        objectFit="contain"
                    />
                </Box>

                <CloseButton
                    _focus={{ boxShadow: 'none' }}
                    size="lg"
                    onClick={() => {
                        setLeftPhotoModal('none')
                    }}
                    position="absolute"
                    top="15px"
                    right="40px"
                    color="#ffffff"
                />
            </Stack>
            <Stack
                display={rightPhotoModal}
                position="fixed"
                zIndex="1"
                left={0}
                top={0}
                width="100%"
                height="100%"
                backgroundColor="rgba(0,0,0,0.9)"
                pt="25px"
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <CloseButton
                    _focus={{ boxShadow: 'none' }}
                    size="lg"
                    onClick={() => {
                        setRightPhotoModal('none')
                    }}
                    position="absolute"
                    top="15px"
                    right="40px"
                    color="#ffffff"
                />
                <Image
                    src={require('../../../images/design-photos/fullness3.jpg')}
                    alt=""
                    w="80%"
                    h="90%"
                    display="block"
                    objectFit="contain"
                />
            </Stack>

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
                        <Button
                            onClick={() => {
                                setMainPhotoModal('flex')
                            }}
                            w="100%"
                            h="100%"
                            border={0}
                            p={0}
                        >
                            <Image
                                src={require('../../../images/design-photos/fullness1.jpg')}
                                alt=""
                                objectFit="cover"
                                w="100%"
                                h="100%"
                            />
                        </Button>
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
                            <Button
                                onClick={() => {
                                    setLeftPhotoModal('flex')
                                }}
                                w="100%"
                                h="100%"
                                border={0}
                                p={0}
                            >
                                <Image
                                    src={require('../../../images/design-photos/fullness2.jpg')}
                                    alt=""
                                    objectFit="cover"
                                    w="100%"
                                    h="100%"
                                />
                            </Button>
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
                            <Button
                                onClick={() => {
                                    setRightPhotoModal('flex')
                                }}
                                w="100%"
                                h="100%"
                                border={0}
                                p={0}
                            >
                                <Image
                                    src={require('../../../images/design-photos/fullness3.jpg')}
                                    alt=""
                                    objectFit="cover"
                                    w="100%"
                                    h="100%"
                                />
                            </Button>
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
                                <b>{name[0]}</b> <br />
                                {name[1]}
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
                            {verse.desc}

                            <br></br>
                            <b>{verse.origin} </b>
                        </Text>
                    </Fade>
                    <Fade bottom>
                        <Text
                            fontFamily="Lexend Deca"
                            fontSize={{ base: '10px', sm: '12px' }}
                        >
                            {description}
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

                        <HStack
                            display={productColor == 'Blue' ? 'flex' : 'none'}
                        >
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
                        <Text
                            fontFamily="Lexend Deca"
                            fontSize="12px"
                            textAlign="center"
                        >
                            Or pick up available at Spero on Sproul at Berkeley
                        </Text>
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