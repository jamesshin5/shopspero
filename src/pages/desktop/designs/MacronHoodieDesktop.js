import React from 'react'
import '../../../styles/desktop/IAmThatGirlHatDesktop.css'
import Fade from 'react-reveal/Fade'
import { HStack, VStack, Stack, Box, Text, Image } from '@chakra-ui/react'

const MacronHoodieDesktop = () => {
    return (
        <Stack
            direction={{ base: 'column', lg: 'row' }}
            spacing={{ base: '1.5rem', lg: '0.05rem' }}
            ml={{ base: '0', sm: '1rem' }}
            mt={{ base: '10px', sm: 'none' }}
            // h="72vh"
            // overflow="scroll"
        >
            <HStack spacing="5px" alignItems="flex-end">
                <Fade bottom>
                    <Box
                        display="flex"
                        justifyContent="center"
                        align-items="center"
                        overflow="hidden"
                        height={{ base: '330px', sm: '480px', lg: '560px' }}
                        width={{ base: '200px', sm: '270px', lg: '350px' }}
                    >
                        <Image
                            src={require('../../../images/design-photos/macron-hoodie-girl.jpg')}
                            alt="main-sticker"
                            objectFit="cover"
                            w="100%"
                            h="100%"
                        />
                    </Box>
                </Fade>
                <Fade bottom>
                    <Box
                        display={{ base: 'flex', lg: 'none' }}
                        justifyContent="center"
                        align-items="center"
                        overflow="hidden"
                        height={{
                            base: '163.5px',
                            sm: '175px',
                            lg: '200px',
                        }}
                        width={{ base: '100px', sm: '140px', lg: '150px' }}
                    >
                        <Image
                            src={require('../../../images/design-photos/macron-hoodie-guy.jpg')}
                            alt=""
                            objectFit="cover"
                            w="100%"
                            h="100%"
                        />
                    </Box>
                </Fade>
            </HStack>
            <VStack
                textAlign="left"
                justifyContent="flex-end"
                maxW="500px"
                alignItems="flex-start"
            >
                <VStack
                    alignItems="flex-start"
                    pl={{ base: 'none', lg: '20px' }}
                    pb="15px"
                >
                    <Fade bottom>
                        <Text
                            fontFamily="Lexend Deca"
                            fontSize={{ base: '30px', sm: '45px' }}
                            lineHeight={{ base: '35px', sm: '60px' }}
                        >
                            MACRON <br />
                            <b>HOODIE</b>
                        </Text>
                    </Fade>
                    <Fade bottom>
                        <Text
                            fontFamily="Tenor Sans"
                            fontSize={{ base: '10px', sm: '12px' }}
                            py="10px"
                        >
                            Are not two sparrows sold for a penny? And not one
                            of them will fall to the ground apart from your
                            Father. But even the hairs of your head are all
                            numbered. Fear not, therefore; you are of more value
                            than many sparrows.
                            <br />
                            <br />
                            <b>Matthew 10:29-31 </b>
                        </Text>
                    </Fade>
                    <Fade bottom>
                        <Text
                            fontFamily="Lexend Deca"
                            fontSize={{ base: '10px', sm: '12px' }}
                            w={{ base: '300px', sm: '400px' }}
                        >
                            Spero is a symbol of hope. We believe that there is
                            only one true, everlasting hope in this world - the
                            gospel of Jesus Christ. Just like the sparrows, we
                            have confidence in the promises of the Word! We know
                            that our Heavenly Father is good and because He will
                            take care of us, we have nothing to fear.
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
                <Fade bottom>
                    <Box
                        display={{ base: 'none', lg: 'flex' }}
                        justifyContent="center"
                        align-items="center"
                        overflow="hidden"
                        height={{
                            base: '163.5px',
                            sm: '175px',
                            lg: '200px',
                        }}
                        width={{ base: '100px', sm: '140px', lg: '150px' }}
                    >
                        <Image
                            src={require('../../../images/design-photos/macron-hoodie-guy.jpg')}
                            alt=""
                            objectFit="cover"
                            w="100%"
                            h="100%"
                        />
                    </Box>
                </Fade>
            </VStack>
        </Stack>
        // <div className='sticker-container'>
        //     <div className="left-display">
        //         <Fade bottom>
        //             {/* <div class="abide-fill">
        //                 <img src={require("../../../images/design-photos/abide-main-2.jpg")} alt="main-sticker-photo" />
        //             </div> */}
        //             <div className="smaller-container">
        //                 <div className="girl-fill-fifth leftmost">
        //                     <img src={require("../../../images/design-photos/macron-hoodie-girl.jpg")} alt="" />
        //                 </div>
        //                 {/* <div className='girl-right-container'>
        //                     <div className="girl-fill-fifth-right">
        //                         <img src={require("../../../images/design-photos/girl-hat-back.jpg")} alt="" />
        //                     </div>
        //                     <div className="girl-fill-fifth-window ">
        //                         <img src={require("../../../images/design-photos/girl-hat-flyer.jpg")} alt="" />
        //                     </div>
        //                 </div> */}
        //             </div>
        //         </Fade>

        //     </div>
        //     <div className="right-display">
        //         <div className="macron-text-box">
        //             <Fade bottom>
        //             <div className="macron-title"> <b>MACRON</b> HOODIE</div>
        //             <div className="macron-bible">
        //             Are not two sparrows sold for a penny? And not one of them will fall to the ground apart from your Father. But even the hairs of your head are all numbered. Fear not, therefore; you are of more value than many sparrows.
        //             <br/><br/><b>Matthew 10:29-31 </b>
        //             </div>
        //             <div className="macron-description">
        //             Spero is a symbol of hope. We believe that there is only one true, everlasting hope in this world -  the gospel of Jesus Christ. Just like the sparrows, we have confidence in the promises of the Word! We know that our Heavenly Father is good and because He will take care of us, we have nothing to fear.
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
        //         <Fade bottom>
        //         <div className="macron-fill-fifth">
        //                 <img src={require("../../../images/design-photos/macron-hoodie-guy.jpg")} alt="" />
        //         </div>
        //         </Fade>
        //     </div>
        // </div>
    )
}

export default MacronHoodieDesktop
