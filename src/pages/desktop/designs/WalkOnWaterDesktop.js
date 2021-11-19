import React from 'react'
import '../../../styles/desktop/FallStickerPage.css'
import Fade from 'react-reveal/Fade'
import { HStack, VStack, Stack, Box, Text, Image } from '@chakra-ui/react'

const WalkOnWaterPage = () => {
    return (
        <Stack
            direction={{ base: 'column', lg: 'row' }}
            spacing="1.5rem"
            // ml={{ base: '0', sm: '1rem' }}
            // mt={{ base: '10px', sm: 'none' }}
            // h="72vh"
            // overflow="scroll"
            height="100%"
        >
            <HStack>
                <VStack spacing="5px">
                    <Fade bottom>
                        <Box
                            display="flex"
                            justifyContent="center"
                            align-items="center"
                            // overflow="hidden"
                            width={{ base: '80vw', sm: '60vw', lg: '40vw' }}
                            height={{ base: '20vh', sm: '40vh', lg: '40vh' }}
                        >
                            <Image
                                src={require('../../../images/design-photos/bottle-graphic.jpg')}
                                alt="main-sticker"
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
                                // overflow="hidden"
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
                                    src={require('../../../images/design-photos/water-left.jpg')}
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
                                // overflow="hidden"
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
                                    src={require('../../../images/design-photos/walk-on-water-main.jpg')}
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
                                WALK ON <br />
                                <b>WATER</b>
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
                                    STICKER COLLECTION
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
                            <b>29</b> And he said, <i>Come.</i> And when Peter
                            came down out of the ship,
                            <br /> he walked on the water, to go to Jesus.
                            <br />
                            <br />
                            <b>30</b> But when he saw the wind boisterous, he
                            was afraid; <br />
                            and beginning to sink, he cried, saying, Lord, save
                            me.
                            <br />
                            <br />
                            <b>31</b> And immediately Jesus stretched forth his
                            hand, and caught him, and said unto him,{' '}
                            <i>
                                O thou of little faith, wherefore didst thou
                                doubt?
                            </i>
                            <br />
                            <br />
                            <b>Matthew 14:29-31</b>
                        </Text>
                    </Fade>
                    <Fade bottom>
                        <Text
                            fontFamily="Lexend Deca"
                            fontSize={{ base: '10px', sm: '12px' }}
                        >
                            Our Walk on Water sticker was inspired by Matthew
                            14:29, a verse that reminds us that, however
                            impossible something demanded by Christ may seem, He
                            will grant power to us if we receive His word by
                            faith. Whatever form the ‘water’ takes in our own
                            lives, this verse and this sticker reminds us that
                            we are upheld by His power only, and we can overcome
                            any obstacle as long as we remain steadfast in our
                            faith.
                        </Text>
                    </Fade>
                    <a href="http://tinyurl.com/spero-etsy">
                        <Fade bottom>
                            <Box
                                borderWidth="1px"
                                p="5px"
                                alignItems="center"
                                w="200px"
                                mt="10px"
                            >
                                <Text
                                    fontFamily="Tenor Sans"
                                    fontSize="9px"
                                    textAlign="center"
                                    _hover={{ fontSize: '9.5px' }}
                                    transition="font-size 0.25s"
                                >
                                    SHOP NOW
                                </Text>
                            </Box>
                        </Fade>
                    </a>
                    <Box h={{base: "30px", sm: "0px"}}></Box>
                </VStack>
            </VStack>
        </Stack>
        // <div className="sticker-container">
        //     <Fade bottom>
        //         <div className="left-display">
        //             <div class="mountain-fill">
        //                 <img
        //                     src={require('../../../images/design-photos/bottle-graphic.jpg')}
        //                     alt="main-sticker"
        //                 />
        //             </div>
        //             <div className="smaller-container">
        //                 <div class="fill-fifth leftmost">
        //                     <img
        //                         src={require('../../../images/design-photos/water-left.jpg')}
        //                         alt=""
        //                     />
        //                 </div>
        //                 <div class="fill-fifth">
        //                     <img
        //                         src={require('../../../images/design-photos/walk-on-water-main.jpg')}
        //                         alt=""
        //                     />
        //                 </div>
        //             </div>
        //         </div>
        //     </Fade>

        //     <div className="right-display">
        //         <div className="text-box">
        //             <Fade bottom>
        //                 <div className="sticker-title">
        //                     WALK ON <br />
        //                     WATER (sticker)
        //                 </div>

        //                 <div className="sticker-bible">
        //                     <b>29</b> And he said, <i>Come.</i> And when Peter
        //                     came down out of the ship,
        //                     <br /> he walked on the water, to go to Jesus.
        //                     <br />
        //                     <br />
        //                     <b>30</b> But when he saw the wind boisterous, he
        //                     was afraid; <br />
        //                     and beginning to sink, he cried, saying, Lord, save
        //                     me.
        //                     <br />
        //                     <br />
        //                     <b>31</b> And immediately Jesus stretched forth his
        //                     hand, and caught him, and said unto him,{' '}
        //                     <i>
        //                         O thou of little faith, wherefore didst thou
        //                         doubt?
        //                     </i>
        //                     <br />
        //                     <br />
        //                     <b>Matthew 14:29-31</b>
        //                 </div>

        //                 <div className="sticker-description">
        //                     Our Walk on Water sticker was inspired by Matthew
        //                     14:29, a verse that reminds us that, however
        //                     impossible something demanded by Christ may seem, He
        //                     will grant power to us if we receive His word by
        //                     faith. Whatever form the ‘water’ takes in our own
        //                     lives, this verse and this sticker reminds us that
        //                     we are upheld by His power only, and we can overcome
        //                     any obstacle as long as we remain steadfast in our
        //                     faith.
        //                 </div>

        //                 <div className="button-format">
        //                     <div className="shop-btn-stickerpage">
        //                         <a href="http://tinyurl.com/spero-etsy">
        //                             <h4 className="shop-text">
        //                                 SHOP NOW ON ETSY
        //                             </h4>
        //                         </a>
        //                     </div>
        //                 </div>
        //             </Fade>
        //         </div>
        //     </div>
        // </div>
    )
}

export default WalkOnWaterPage
