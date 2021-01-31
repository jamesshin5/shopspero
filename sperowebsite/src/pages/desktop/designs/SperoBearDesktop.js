import React from 'react'
import '../../../styles/desktop/FallStickerPage.css'
import Fade from 'react-reveal/Fade'
import { HStack, VStack, Stack, Box, Text, Image, Flex } from '@chakra-ui/react'

const SperoBearPage = () => {
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
                        width={{ base: '330px', sm: '480px', lg: '560px' }}
                        height={{ base: '150px', sm: '270px', lg: '350px' }}
                    >
                        <Image
                            src={require('../../../images/design-photos/bear-graphic.jpg')}
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
                            overflow="hidden"
                            width={{
                                base: '163.5px',
                                sm: '238px',
                                lg: '278px',
                            }}
                            height={{ base: '100px', sm: '140px', lg: '175px' }}
                        >
                            <Image
                                src={require('../../../images/design-photos/three-stickers-drawing.jpg')}
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
                                base: '163.5px',
                                sm: '237px',
                                lg: '277px',
                            }}
                            height={{ base: '100px', sm: '140px', lg: '175px' }}
                        >
                            <Image
                                src={require('../../../images/design-photos/bear-right.jpg')}
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
                        <Text
                            fontFamily="Lexend Deca"
                            fontSize={{ base: '30px', sm: '45px' }}
                            lineHeight={{ base: '35px', sm: '60px' }}
                        >
                            SPERO <br />
                            BEAR (sticker)
                        </Text>
                    </Fade>
                    <Fade bottom>
                        <Text
                            fontFamily="Tenor Sans"
                            fontSize={{ base: '10px', sm: '12px' }}
                            py="10px"
                        >
                            <b>78</b> because of the tender mercy of our God,
                            <br />
                            by which the rising sun will come to us from heaven
                            <br />
                            <br />
                            <b>79</b> to shine on those living in darkness and
                            in the shadow of death,
                            <br />
                            to guide our feet into the path of peace.”
                            <br />
                            <br />
                            <b>Luke 1:78-79</b>
                        </Text>
                    </Fade>
                    <Fade bottom>
                        <Text
                            fontFamily="Lexend Deca"
                            fontSize={{ base: '10px', sm: '12px' }}
                        >
                            Our Redeemed Bear sticker was inspired by Luke 1:78.
                            We hope that, despite its seemingly simple design,
                            this sticker will bridge connections between both
                            familiar and unfamiliar faces, as well as between
                            you and your faith! Created with the intention of
                            sharing God’s saving grace, we hope that this
                            sticker will help to guide you into a path of peace.
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
                                    SHOP NOW ON ETSY
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
        //             <div class="fill">
        //                 <img
        //                     src={require('../../../images/design-photos/bear-graphic.jpg')}
        //                     alt="main-sticker"
        //                 />
        //             </div>
        //             <div className="smaller-container">
        //                 <div class="fill-fifth leftmost">
        //                     <img
        //                         src={require('../../../images/design-photos/three-stickers-drawing.jpg')}
        //                         alt=""
        //                     />
        //                 </div>
        //                 <div class="fill-fifth">
        //                     <img
        //                         src={require('../../../images/design-photos/bear-right.jpg')}
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
        //                     SPERO <br />
        //                     BEAR (sticker)
        //                 </div>

        //                 <div className="sticker-bible">
        //                     <b>78</b> because of the tender mercy of our God,
        //                     <br />
        //                     by which the rising sun will come to us from heaven
        //                     <br />
        //                     <br />
        //                     <b>79</b> to shine on those living in darkness and
        //                     in the shadow of death,
        //                     <br />
        //                     to guide our feet into the path of peace.”
        //                     <br />
        //                     <br />
        //                     <b>Luke 1:78-79</b>
        //                 </div>

        //                 <div className="sticker-description">
        //                     Our Redeemed Bear sticker was inspired by Luke 1:78.
        //                     We hope that, despite its seemingly simple design,
        //                     this sticker will bridge connections between both
        //                     familiar and unfamiliar faces, as well as between
        //                     you and your faith! Created with the intention of
        //                     sharing God’s saving grace, we hope that this
        //                     sticker will help to guide you into a path of peace.
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

export default SperoBearPage
