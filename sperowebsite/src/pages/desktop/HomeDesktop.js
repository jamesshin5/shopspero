import React, { useState, useEffect } from 'react'
import Footer from '../../components/Footer'
import '../../styles/desktop/HomeDesktop.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import Background from '../../images/about-bgimage.png'

import CrossfadeImage from 'react-crossfade-image'
import Navbar from '../../components/NavBar'
import {
    HStack,
    Image,
    Text,
    Box,
    Flex,
    VStack,
    SlideFade,
} from '@chakra-ui/react'

const image0 = require('../../images/home-image-0.png')

const HomePageDesktop = (props) => {
    const designLinks = [
        'abide',
        'mountainmover',
        'iamthatgirl',
        'macronhoodie',
    ]
    const [current, setCurrent] = useState(image0)
    const [num, setNum] = useState(0)
    const numImages = designLinks.length

    function increaseNum() {
        console.log(num)
        var image = require('../../images/home-image-' +
            ((num + 1) % numImages).toString() +
            '.png')
        setCurrent(image)
        setNum((num + 1) % numImages)
    }

    function decreaseNum() {
        if (num === 0) {
            console.log(num)
            var image = require('../../images/home-image-' +
                (numImages - 1).toString() +
                '.png')
            setCurrent(image)
            setNum(numImages - 1)
        } else {
            console.log(num)
            image = require('../../images/home-image-' +
                ((num - 1) % numImages).toString() +
                '.png')
            setCurrent(image)
            setNum((num - 1) % numImages)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => increaseNum(), 5000)
        return () => {
            clearInterval(interval)
        }
    })

    return (
        <div
            style={{
                backgroundColor: '#e7e9e0',
                backgroundImage: `url(${Background})`,
                backgroundPosition: 'right -9vw',
            }}
        >
            <Box w="100%" h="100vh">
                <Navbar />
                <VStack>
                    <HStack
                        alignItems="center"
                        justifyContent="space-between"
                        w="80%"
                        pb="10px"
                    >
                        <Fade bottom>
                            <button
                                onClick={() => decreaseNum()}
                                className="arrow-buttons"
                            >
                                <Image
                                    src={require('../../images/left-arrow.png')}
                                    alt="left-arrow"
                                    w="50px"
                                    display={{ base: 'none', md: 'block' }}
                                    mb="80%"
                                />
                            </button>
                        </Fade>
                        <Box w="300px" position="relative" textAlign="center">
                            <Fade bottom>
                                <Box h="500px">
                                    <Link
                                        to={{
                                            pathname: '/designs',
                                            state: designLinks[num],
                                        }}
                                    >
                                        <CrossfadeImage
                                            src={current}
                                            duration={1500}
                                            timingFunction={'ease-in'}
                                        />
                                    </Link>
                                </Box>
                            </Fade>
                            <Box
                                display="flex"
                                flexDirection="column"
                                position="absolute"
                                transform="translate(-50%, -50%)"
                                top="50%"
                                left="50%"
                            >
                                <Fade bottom>
                                    <Link to="/about">
                                        <Text
                                            fontFamily="Lexend Deca"
                                            fontWeight="500"
                                            fontSize={{
                                                base: '100px',
                                                sm: '130px',
                                            }}
                                            color="#5c6a6f"
                                            _hover={{ fontSize: '140px' }}
                                            transition="font-size 0.5s"
                                        >
                                            SPERO
                                        </Text>
                                    </Link>
                                </Fade>
                            </Box>
                            <Box
                                display="flex"
                                flexDirection="column"
                                position="absolute"
                                transform="translate(-50%, -50%)"
                                top="65%"
                                left="50%"
                                w="100%"
                            >
                                <Fade bottom>
                                    <Link to="/about">
                                        <Text
                                            fontFamily="Tenor Sans"
                                            fontSize="16px"
                                            color="#5c6a6f"
                                            _hover={{ fontSize: '18px' }}
                                            transition="font-size 0.5s"
                                        >
                                            bridging fashion and mission
                                        </Text>
                                    </Link>
                                </Fade>
                            </Box>
                        </Box>
                        <Fade bottom>
                            <button
                                onClick={() => increaseNum()}
                                className="arrow-buttons"
                            >
                                <Image
                                    src={require('../../images/right-arrow.png')}
                                    alt="right-arrow"
                                    w="50px"
                                    mb="80%"
                                    display={{ base: 'none', md: 'block' }}
                                />
                            </button>
                        </Fade>
                    </HStack>
                    <Fade bottom>
                        <Box
                            borderWidth="1px"
                            my={{ base: '5px', sm: '15px' }}
                            py="5px"
                            px="35px"
                            mb="50px"
                        >
                            <a href="http://tinyurl.com/spero-etsy">
                                <Text
                                    fontFamily="Tenor Sans"
                                    fontSize="10px"
                                    letterSpacing="2px"
                                    _hover={{ fontSize: '11px' }}
                                    transition="font-size 0.25s"
                                >
                                    SHOP NOW
                                </Text>
                            </a>
                        </Box>
                    </Fade>
                </VStack>
                <Footer />
            </Box>
        </div>

        // <div className="main-container">
        //     <Navbar />
        //     <div className="top-container">
        //         <div className="main-graphic">
        //             <div className="carousel-container">
        //                 <Fade bottom>
        //                     <button
        //                         onClick={() => decreaseNum()}
        //                         className="arrow-buttons"
        //                     >
        //                         <img
        //                             src={require('../../images/left-arrow.png')}
        //                             alt="left-arrow"
        //                             className="arrow"
        //                         />
        //                     </button>
        //                 </Fade>
        //                 <Fade bottom>
        //                     <div className="graphic-container">
        //                         <Link to={'/design/' + designLinks[num]}>
        //                             <div className="main-image-container">
        //                                 <CrossfadeImage
        //                                     src={current}
        //                                     duration={1500}
        //                                     timingFunction={'ease-in'}
        //                                 />
        //                             </div>
        //                         </Link>
        //                         <Link to="/about">
        //                             <div className="home-centered">SPERO</div>
        //                         </Link>
        //                     </div>
        //                 </Fade>
        //                 <Fade bottom>
        //                     <button
        //                         onClick={() => increaseNum()}
        //                         className="arrow-buttons"
        //                     >
        //                         <img
        //                             src={require('../../images/right-arrow.png')}
        //                             alt="right-arrow"
        //                             className="arrow"
        //                         />
        //                     </button>
        //                 </Fade>
        //             </div>
        //             <Fade bottom>
        //                 <Link to="/about">
        //                     <h3 className="sub-text">
        //                         bridging fashion and mission
        //                     </h3>
        //                 </Link>
        //             </Fade>
        //             <Fade bottom>
        //                 <div className="shop-btn">
        //                     <a href="http://tinyurl.com/spero-etsy">
        //                         <h4 className="shop-text">SHOP NOW</h4>
        //                     </a>
        //                 </div>
        //             </Fade>
        //         </div>
        //         {/* <div
        //             style={{
        //                 display: 'flex',
        //                 flexDirection: 'row',
        //                 justifyContent: 'space-between',
        //                 width: '90vw',
        //                 paddingTop: '3rem',
        //             }}
        //         >
        //             <NewRelease
        //                 name={'Fall Sticker Collection'}
        //                 route={'/designs/walkonwater'}
        //             />
        //             <NewRelease />
        //         </div> */}
        //     </div>

        //     <Footer />
        // </div>
    )
}

export default HomePageDesktop
