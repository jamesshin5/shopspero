import React from 'react'
import '../../../styles/desktop/IAmThatGirlHatDesktop.css'
import Fade from 'react-reveal/Fade'
import { HStack, VStack, Stack, Box, Text, Image, Flex } from '@chakra-ui/react'

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
            <HStack spacing="5px">
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
                {/* <VStack spacing="5px">
                    <Fade bottom>
                        <Box
                            display="flex"
                            justifyContent="center"
                            align-items="center"
                            overflow="hidden"
                            height={{
                                base: '163.5px',
                                sm: '238px',
                                lg: '278px',
                            }}
                            width={{ base: '100px', sm: '140px', lg: '175px' }}
                        >
                            <Image
                                src={require('../../../images/design-photos/girl-hat-back.jpg')}
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
                            height={{
                                base: '163.5px',
                                sm: '237px',
                                lg: '277px',
                            }}
                            width={{ base: '100px', sm: '140px', lg: '175px' }}
                        >
                            <Image
                                src={require('../../../images/design-photos/girl-hat-flyer.jpg')}
                                alt=""
                                objectFit="cover"
                                w="100%"
                                h="100%"
                            />
                        </Box>
                    </Fade>
                </VStack> */}
            </HStack>
            <VStack textAlign="left" justifyContent="center" maxW="500px">
                <VStack alignItems="flex-start">
                    <Fade bottom>
                        <Text
                            fontFamily="Lexend Deca"
                            fontSize={{ base: '30px', sm: '45px' }}
                            lineHeight={{ base: '35px', sm: '60px' }}
                        >
                            I AM THAT <br />
                            <b>GIRL</b>
                        </Text>
                    </Fade>
                    <Fade bottom>
                        <Text
                            fontFamily="Lexend Deca"
                            fontSize={{ base: '10px', sm: '12px' }}
                            w={{ base: '300px', sm: '400px' }}
                        >
                            ShopSpero partnered with I Am That Girl, LMU to
                            create a limited edition Girl hat. The goal of this
                            project is to raise fund for sexual assault
                            survivors and increase sexual harassment awareness.
                        </Text>
                    </Fade>
                </VStack>
            </VStack>
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
