import React from "react";
import { NavLink } from 'react-router-dom'
import { Image, Box, VStack, Text, Link } from '@chakra-ui/react'
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
            partialVisibilityGutter: 60
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 50
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 20
        }
    };
    return (
        <VStack
            spacing={200}
            align="stretch">
            

            <Carousel
                ssr
                deviceType={deviceType}
                itemClass="image-item"
                responsive={responsive}
                infinite={true}
                autoPlay={false}
                centerMode
            >
                {images.slice(0, 5).map(image => {
                    return (
                        <Box w="350px">
                            <Image
                                draggable={false}
                                style={{ width: "90%", height: "100%" }}
                                src={image}
                                alt="home-images"
                                objectFit="cover"
                            />
                            <NavLink exact to="/designs">
                                <Box
                                    style={{ width: "96%", height: "100%" }}
                                    position="absolute"
                                    top={0}
                                    bottom={0}
                                    bg="black"
                                    opacity='0.5'
                                    _hover={{ opacity: '0' }}
                                >
                                </Box>
                            </NavLink>
                        </Box>
                    );
                })}
            </Carousel>
        </VStack >
    );
}

export default HomePagePanel;