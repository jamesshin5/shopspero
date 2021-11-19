import React from "react";
import { NavLink } from 'react-router-dom'
import { Image, Box, HStack, Text, VStack, Grid, Link } from '@chakra-ui/react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import image0 from "../images/sliderimage1.jpg"
import image1 from "../images/sliderimage2.jpg"
import image2 from "../images/sliderimage3.jpg"
import image3 from "../images/sliderimage4.jpg"
import image4 from "../images/sliderimage5.jpg"

import { SliderData } from './HomePageData'
import { findByPlaceholderText } from "@testing-library/dom";

const images = [
    image0, image1, image2, image3, image4
]

const HomePagePanel = ({ deviceType }) => {
    const responsive = {
        largeDesktop: {
            breakpoint: { max: 4000, min: 1500 },
            items: 5,
            partialVisibilityGutter: 40
        },
        desktop: {
            breakpoint: { max: 1500, min: 1300 },
            items: 4,
            partialVisibilityGutter: 40
        },
        smallDesktop: {
            breakpoint: { max: 1300, min: 1024 },
            items: 3,
            partialVisibilityGutter: 40
        },
        tablet: {
            breakpoint: { max: 1024, min: 500 },
            items: 2,
            partialVisibilityGutter: 10
        },
        mobile: {
            breakpoint: { max: 500, min: 0 },
            items: 1,
            partialVisibilityGutter: 20
        }
    };

    const slides = SliderData.map(slide => {
        return (
            <Box >
            <Image
                draggable={false}
                style={{ width: "95%", height: "100%" }}
                src={slide.image}
                marginLeft="2.5%"
                alt="home-images"
                objectFit="cover"
            />
            <Box
                style={{ width: "95%", height: "100%" }}
                position="absolute"
                marginLeft="2.5%"
                top={0}
                bottom={0}
                bg="black"
                opacity='0.5'
                _hover={{ opacity: '0' }}
            >
                <Text
                    marginTop="20%"
                    fontFamily="Lexend Deca"
                    fontWeight="500"
                    fontSize="6xl"
                    color="#ffffff"
                    transition="font-size 0.5s"
                    align="center"
                >
                    {slide.description}
                </Text>
            </Box>
        </Box>
        )
    })
    return (
        <Carousel
                ssr
                deviceType={deviceType}
                removeArrowOnDeviceType={["largeDesktop", "desktop", "smallDesktop", "tablet", "mobile"]}
                itemClass="carousel-item-padding-0-px"
                responsive={responsive}
                draggable={false}
            >
                {slides}
        </Carousel>
    );
}

export default HomePagePanel;
