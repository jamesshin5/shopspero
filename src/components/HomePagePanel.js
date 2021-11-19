import React from "react";
import { NavLink } from 'react-router-dom'
import { Image, Box, HStack, Text, Link } from '@chakra-ui/react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/HomePagePanel.css'

import image0 from "../images/sliderimage1.jpg"
import image1 from "../images/sliderimage2.jpg"
import image2 from "../images/sliderimage3.jpg"
import image3 from "../images/sliderimage4.jpg"
import image4 from "../images/sliderimage5.jpg"
import { Nav } from "react-bootstrap";

const images = [
    image0, image1, image2, image3, image4
]

const HomePagePanel = ({ deviceType }) => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 40
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            partialVisibilityGutter: 10
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 20
        }
    };
    return (

        <Carousel
            ssr
            deviceType={deviceType}
            itemClass="carousel-item-padding-0-px"
            responsive={responsive}
            infinite={true}
            autoPlay={false}
            centerMode
        >
            <Box >
                <Image
                    draggable={false}
                    style={{ width: "95%", height: "100%" }}
                    src={image0}
                    position="relative"
                    alt="home-images"
                    objectFit="cover"
                />
                <Box
                    style={{ width: "95%", height: "100%" }}
                    position="absolute"
                    top={0}
                    bottom={0}
                    bg="black"
                    opacity='0.5'
                    _hover={{ opacity: '0' }}
                >
                    <Text
                        marginTop="30%"
                        fontFamily="Lexend Deca"
                        fontWeight="500"
                        fontSize="7xl"
                        color="#ffffff"
                        transition="font-size 0.5s"
                        align="center"
                    >
                        new arrivals.
                    </Text>
                </Box>
            </Box>
            <Box >
                <Image
                    draggable={false}
                    style={{ width: "95%", height: "100%" }}
                    src={image1}
                    alt="home-images"
                    objectFit="cover"
                />
                <Box
                    style={{ width: "95%", height: "100%" }}
                    position="absolute"
                    top={0}
                    bottom={0}
                    bg="black"
                    opacity='0.5'
                    _hover={{ opacity: '0' }}
                >
                    <Text
                        marginTop="30%"
                        fontFamily="Lexend Deca"
                        fontWeight="500"
                        fontSize="7xl"
                        color="#ffffff"
                        transition="font-size 0.5s"
                        align="center"
                    >
                        our mission.
                    </Text>
                </Box>
            </Box>
            <Box >
                <Image
                    draggable={false}
                    style={{ width: "95%", height: "100%" }}
                    src={image2}
                    alt="home-images"
                    objectFit="cover"
                />
                <Box
                    style={{ width: "95%", height: "100%" }}
                    position="absolute"
                    top={0}
                    bottom={0}
                    bg="black"
                    opacity='0.5'
                    _hover={{ opacity: '0' }}
                >
                    <Text
                        marginTop="30%"
                        fontFamily="Lexend Deca"
                        fontWeight="500"
                        fontSize="7xl"
                        color="#ffffff"
                        transition="font-size 0.5s"
                        align="center"
                    >
                        shop now.
                    </Text>
                </Box>
            </Box>
            <Box >
                <Image
                    draggable={false}
                    style={{ width: "95%", height: "100%" }}
                    src={image3}
                    alt="home-images"
                    objectFit="cover"
                />
                <Box
                    style={{ width: "95%", height: "100%" }}
                    position="absolute"
                    top={0}
                    bottom={0}
                    bg="black"
                    opacity='0.5'
                    _hover={{ opacity: '0' }}
                >
                    <Text
                        marginTop="30%"
                        fontFamily="Lexend Deca"
                        fontWeight="500"
                        fontSize="7xl"
                        color="#ffffff"
                        transition="font-size 0.5s"
                        align="center"
                    >
                        meet the team.
                    </Text>
                </Box>
            </Box>
            <Box >
                <Image
                    draggable={false}
                    style={{ width: "95%", height: "100%" }}
                    src={image4}
                    alt="home-images"
                    objectFit="cover"
                />
                <Box
                    style={{ width: "95%", height: "100%" }}
                    position="absolute"
                    top={0}
                    bottom={0}
                    bg="black"
                    opacity='0.5'
                    _hover={{ opacity: '0' }}
                >
                    <Text
                        marginTop="30%"
                        fontFamily="Lexend Deca"
                        fontWeight="500"
                        fontSize="7xl"
                        color="#ffffff"
                        transition="font-size 0.5s"
                        align="center"
                    >
                        contact us.
                    </Text>
                </Box>
            </Box>
            {/* {images.slice(0, 5).map((image, text) => {
                return (
                    <Box w="450px">
                        <Image
                            draggable={false}
                            style={{ width: "90%", height: "100%" }}
                            src={image}
                            alt="home-images"
                            objectFit="cover"
                        />

                        <Box
                            style={{ width: "94%", height: "100%" }}
                            position="absolute"
                            top={0}
                            bottom={0}
                            bg="black"
                            opacity='0.5'
                            _hover={{ opacity: '0' }}
                        >
                            <p
                                // display={{
                                //     base: 'none',
                                //     sm: 'block',
                                // }}
                                // fontFamily="Lexend Deca"
                                // fontWeight="500"
                                // fontSize="100px"
                                // color="#ffffff"
                                // _hover={{ fontSize: '140px' }}
                                // transition="font-size 0.5s"
                                style={{
                                    position: "absolute",
                                    left: "50%",
                                    bottom: "50%",
                                    color: "white",
                                    transform: " translateX(-50%)"
                                  }}
                            >
                                {text}
                            </p>
                        </Box>
                    </Box>
                );
            })} */}
        </Carousel>
    );
}

export default HomePagePanel;
