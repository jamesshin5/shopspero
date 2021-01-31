import React from 'react'
import { HStack, VStack, Stack, Box, Text, Image, Flex } from '@chakra-ui/react'
import '../../../styles/desktop/FallStickerPage.css'
import Fade from 'react-reveal/Fade'

const MountainMoverDesktop = () => {
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
                <Box
                    display="flex"
                    justifyContent="center"
                    align-items="center"
                    overflow="hidden"
                    width={{ base: '330px', sm: '480px', lg: '560px' }}
                    height={{ base: '150px', sm: '270px', lg: '350px' }}
                >
                    <Image
                        src={require('../../../images/design-photos/mountain-graphic.jpg')}
                        alt="main-sticker"
                        objectFit="cover"
                        w="100%"
                        h="100%"
                    />
                </Box>
                <HStack spacing="5px">
                    <Box
                        display="flex"
                        justifyContent="center"
                        align-items="center"
                        overflow="hidden"
                        width={{ base: '163.5px', sm: '238px', lg: '278px' }}
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
                    <Box
                        display="flex"
                        justifyContent="center"
                        align-items="center"
                        overflow="hidden"
                        width={{ base: '163.5px', sm: '237px', lg: '277px' }}
                        height={{ base: '100px', sm: '140px', lg: '175px' }}
                    >
                        <Image
                            src={require('../../../images/design-photos/mountain-mover-right.jpg')}
                            alt=""
                            objectFit="cover"
                            w="100%"
                            h="100%"
                        />
                    </Box>
                </HStack>
            </VStack>
            <VStack textAlign="left" justifyContent="center" maxW="500px">
                <VStack alignItems="flex-start">
                    <Text
                        fontFamily="Lexend Deca"
                        fontSize={{ base: '30px', sm: '45px' }}
                        lineHeight={{ base: '35px', sm: '60px' }}
                    >
                        MOUNTAIN <br />
                        MOVER (sticker)
                    </Text>
                    <Text
                        fontFamily="Tenor Sans"
                        fontSize={{ base: '10px', sm: '12px' }}
                        py="10px"
                    >
                        He replied,{' '}
                        <i>
                            “Because you have so little faith. Truly I tell you,
                            if you have faith as small as a mustard seed, you
                            can say to this mountain,
                            <br />
                            ‘Move from here to there,’ and it will move. <br />
                            <br />
                            Nothing will be impossible for you.”
                        </i>
                        <br />
                        <b>Matthew 17:20-21</b>
                    </Text>
                    <Text
                        fontFamily="Lexend Deca"
                        fontSize={{ base: '10px', sm: '12px' }}
                    >
                        Our Mountain Mover sticker was inspired by Matthew
                        17:20, with the goal of representing how our faith is
                        ever-thriving and ever-increasing. Our initial
                        introduction to the concept of faith is often small,
                        daunting, and unfamiliar. However, this verse reminds us
                        of how a faith that starts out as an unfamiliar idea can
                        transform into something capable of moving mountains.
                    </Text>
                    <a href="http://tinyurl.com/spero-etsy">
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
                    </a>
                </VStack>
            </VStack>
        </Stack>
        // <div className="sticker-container">
        //     <Fade bottom>
        //         <div className="left-display">
        //             <div class="fill">
        //                 <img
        //                     src={require('../../../images/design-photos/mountain-graphic.jpg')}
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
        //                         src={require('../../../images/design-photos/mountain-mover-right.jpg')}
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
        //                     MOUNTAIN <br />
        //                     MOVER (sticker)
        //                 </div>

        //                 <div className="sticker-bible">
        //                     He replied,{' '}
        //                     <i>
        //                         “Because you have so little faith. Truly I tell
        //                         you, if you have faith as small as a mustard
        //                         seed, you can say to this mountain,
        //                         <br />
        //                         ‘Move from here to there,’ and it will move.{' '}
        //                         <br />
        //                         <br />
        //                         Nothing will be impossible for you.”
        //                     </i>
        //                     <br />
        //                     <br />
        //                     <b>Matthew 17:20-21</b>
        //                 </div>

        //                 <div className="sticker-description">
        //                     Our Mountain Mover sticker was inspired by Matthew
        //                     17:20, with the goal of representing how our faith
        //                     is ever-thriving and ever-increasing. Our initial
        //                     introduction to the concept of faith is often small,
        //                     daunting, and unfamiliar. However, this verse
        //                     reminds us of how a faith that starts out as an
        //                     unfamiliar idea can transform into something capable
        //                     of moving mountains.
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

export default MountainMoverDesktop
