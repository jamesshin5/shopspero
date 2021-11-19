import React from 'react'
import '../../../styles/desktop/IAmThatGirlHatDesktop.css'
import Fade from 'react-reveal/Fade'
import { HStack, VStack, Stack, Box, Text, Image } from '@chakra-ui/react'

const HopeDesktop = () => {
    return (
        <Stack
            direction={{ base: 'column', lg: 'row' }}
            spacing="1.5rem"
            ml={{ base: '0', sm: '1rem' }}
            mt={{ base: '10px', sm: 'none' }}
            // h="72vh"
            // overflow="scroll"
        >
            <VStack spacing="5px">
                <Fade bottom>
                    <Box
                        display="flex"
                        justifyContent="center"
                        align-items="center"
                        overflow="hidden"
                        width={{ base: '80vw', sm: '60vw', lg: '30vw' }}
                        height={{ base: '20vh', sm: '40vh', lg: '40vh' }}
                    >
                        <iframe
                            title="Manolo"
                            width="100%"
                            src="https://www.youtube.com/embed/Xo0QR06y7yU"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>

                        {/* <Image
                            src={require('../../../images/design-photos/mountain-graphic.jpg')}
                            alt="main-sticker"
                            objectFit="cover"
                            w="100%"
                            h="100%"
                        /> */}
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
                                lg: '14.75vw',
                            }}
                            height={{
                                base: '20vh',
                                sm: '20vh',
                                lg: '25vh',
                            }}
                        >
                            <Image
                                src={require('../../../images/design-photos/hope-iris.jpg')}
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
                                lg: '14.75vw',
                            }}
                            height={{
                                base: '20vh',
                                sm: '20vh',
                                lg: '25vh',
                            }}
                        >
                            <Image
                                src={require('../../../images/design-photos/hope-longsleeve.jpg')}
                                alt=""
                                objectFit="cover"
                                w="100%"
                                h="100%"
                            />
                        </Box>
                    </Fade>
                </HStack>
            </VStack>
            {/* <HStack spacing="5px">
                <Fade bottom>
                    <Box
                        display="flex"
                        justifyContent="center"
                        align-items="center"
                        overflow="hidden"
                        height={{ base: '330px', sm: '480px', lg: '560px' }}
                        width={{ base: '250px', sm: '350px', lg: '350px' }}
                    >
                        <Image
                            src={require('../../../images/design-photos/hope-longsleeve.jpg')}
                            alt="main-sticker"
                            objectFit="cover"
                            w="100%"
                            h="100%"
                        />
                    </Box>
                </Fade>
            </HStack> */}
            <HStack>
                <VStack textAlign="left" justifyContent="center" maxW="500px">
                    <VStack alignItems="flex-start">
                        <Fade bottom>
                            <Text
                                fontFamily="Lexend Deca"
                                fontSize={{ base: '30px', sm: '45px' }}
                                lineHeight={{ base: '35px', sm: '60px' }}
                            >
                                <b>HOPE</b> <br />
                                LONGSLEEVE
                            </Text>
                        </Fade>
                        <Fade bottom>
                            <Text
                                fontFamily="Tenor Sans"
                                fontSize={{ base: '10px', sm: '12px' }}
                                py="10px"
                            >
                                <b>10</b> For to this end we toil and strive,
                                <br></br>
                                because we have our hope set on the living God,
                                <br></br>
                                <br></br>
                                who is the Savior of all people,
                                <br></br>especially of those who believe.
                                <br />
                                <br />
                                <b>1 Timothy 4:10 </b>
                            </Text>
                        </Fade>
                        <Fade bottom>
                            <Text
                                fontFamily="Lexend Deca"
                                fontSize={{ base: '10px', sm: '12px' }}
                                w={{ base: '300px', sm: '400px' }}
                            >
                                Once one believes in the gospel, one has eternal
                                hope. This is the message Spero wants to share,
                                for this world is temporary and broken.
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
                    </VStack>
                </VStack>
            </HStack>
        </Stack>
        // <div className='sticker-container'>
        //     <div className="left-display">
        //         {/* <div class="abide-fill">
        //             <img src={require("../../../images/design-photos/abide-main-2.jpg")} alt="main-sticker-photo" />
        //         </div> */}
        //         <Fade bottom>
        //         <div className="smaller-container">
        //             <div className="girl-fill-fifth leftmost">
        //                 <img src={require("../../../images/design-photos/hope-longsleeve.jpg")} alt="" />
        //             </div>
        //             {/* <div className='girl-right-container'>
        //                 <div className="girl-fill-fifth-right">
        //                     <img src={require("../../../images/design-photos/girl-hat-back.jpg")} alt="" />
        //                 </div>
        //                 <div className="girl-fill-fifth-window ">
        //                     <img src={require("../../../images/design-photos/girl-hat-flyer.jpg")} alt="" />
        //                 </div>
        //             </div> */}
        //         </div>
        //         </Fade>

        //     </div>
        //     <div className="right-display">
        //         <div className="text-box">
        //             <Fade bottom>
        //             <div className="hope-title"> <b>HOPE</b><br/>LONG SLEEVE</div>
        //             <div className="girl-bible">
        //             For to this end we toil and strive, because we have our hope set on the living God, who is the Savior of all people, especially of those who believe.
        //             <br/><br/><b>1 Timothy 4:10 </b>
        //             </div>
        //             <div className="girl-description">
        //             Once one believes in the gospel, one has eternal hope. This is the message Spero wants to share, for this world is temporary and broken.
        //             </div>
        //             {/* <div className="button-format">
        //                 <div className='shop-btn-stickerpage'>
        //                         <a href='http://tinyurl.com/spero-etsy'>
        //                             <h4 className='shop-text'>SHOP NOW ON ETSY</h4>
        //                         </a>
        //                 </div>
        //             </div> */}
        //             </Fade>

        //         </div>
        //     </div>
        // </div>
    )
}

export default HopeDesktop
