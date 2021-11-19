import React from 'react'
import '../../../styles/desktop/AbideHoodieDesktop.css'
import Fade from 'react-reveal/Fade'
import { HStack, VStack, Stack, Box, Text, Image } from '@chakra-ui/react'

const AbideHoodieDesktop = () => {
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
                        width={{ base: '150px', sm: '270px', lg: '350px' }}
                    >
                        <Image
                            src={require('../../../images/design-photos/abide-main-2.jpg')}
                            alt="main-sticker"
                            objectFit="cover"
                            w="100%"
                            h="100%"
                        />
                    </Box>
                </Fade>
                <VStack spacing="5px">
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
                                src={require('../../../images/design-photos/abide-overlay.jpg')}
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
                                src={require('../../../images/design-photos/abide-window.jpg')}
                                alt=""
                                objectFit="cover"
                                w="100%"
                                h="100%"
                            />
                        </Box>
                    </Fade>
                </VStack>
            </HStack>
            <VStack textAlign="left" justifyContent="center" maxW="500px">
                <VStack alignItems="flex-start">
                    <Fade bottom>
                        <Text
                            fontFamily="Lexend Deca"
                            fontSize={{ base: '30px', sm: '45px' }}
                            lineHeight={{ base: '35px', sm: '60px' }}
                            pb={0}
                        >
                            <b>ABIDE</b> <br />
                        </Text>
                        <Text
                            fontFamily="Lexend Deca"
                            fontSize={{ base: '20px', sm: '35px' }}
                            lineHeight={{ base: '25px', sm: '50px' }}
                            pt={0}
                        >
                            HOODIE
                        </Text>
                    </Fade>
                    <Fade bottom>
                        <Text
                            fontFamily="Tenor Sans"
                            fontSize={{ base: '10px', sm: '12px' }}
                            py="10px"
                        >
                            He who dwells in the shelter of the Most High will
                            abide <br />
                            in the shadow of the Almighty. <br></br>
                            I will say to the Lord, "My refuge and my fortress,
                            <br />
                            my God, in whom I trust.”
                            <br />
                            <br />
                            <b>Psalms 91:1-2</b>
                        </Text>
                    </Fade>
                    <Fade bottom>
                        <Text
                            fontFamily="Lexend Deca"
                            fontSize={{ base: '10px', sm: '12px' }}
                        >
                            The Abide Hoodie was made to remind us of how God is
                            our fortress we can abide in. The silhouette of a
                            roof symbolizes the shelter and refuge our God is,
                            while the shadow of the house represents the shadow
                            of the Almighty.
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
        </Stack>
        // <div className="sticker-container">
        //     <Fade bottom>
        //         <div className="left-display">
        //             {/* <div class="abide-fill">
        //             <img src={require("../../../images/design-photos/abide-main-2.jpg")} alt="main-sticker-photo" />
        //         </div> */}
        //             <Fade bottom></Fade>
        //             <div className="smaller-container">
        //                 <div class="abide-fill-fifth leftmost">
        //                     <img
        //                         src={require('../../../images/design-photos/abide-main-2.jpg')}
        //                         alt=""
        //                     />
        //                 </div>
        //                 <div className="abide-right-container">
        //                     <div class="abide-fill-fifth-right">
        //                         <img
        //                             src={require('../../../images/design-photos/abide-overlay.jpg')}
        //                             alt=""
        //                         />
        //                     </div>
        //                     <div class="abide-fill-fifth-window ">
        //                         <img
        //                             src={require('../../../images/design-photos/abide-window.jpg')}
        //                             alt=""
        //                         />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </Fade>

        //     <div className="right-display">
        //         <div className="text-box">
        //             <Fade bottom>
        //                 <div className="abide-title">
        //                     ABIDE <br />
        //                     HOODIE
        //                 </div>
        //                 <div className="abide-bible">
        //                     He who dwells in the shelter of the Most High will
        //                     abide in the shadow of the Almighty. <br></br>
        //                     I will say to the Lord, "My refuge and my fortress,
        //                     my God, in whom I trust.”
        //                     <br />
        //                     <br />
        //                     <b>Psalms 91:1-2</b>
        //                 </div>
        //                 <div className="abide-description">
        //                     The Abide Hoodie was made to remind us of how God is
        //                     our fortress we can abide in. The silhouette of a
        //                     roof symbolizes the shelter and refuge our God is,
        //                     while the shadow of the house represents the shadow
        //                     of the Almighty.
        //                 </div>
        //                 {/* <div className="button-format">
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

export default AbideHoodieDesktop
