import React, { useState, useEffect, Fragment } from 'react'
import { ReactDOM } from 'react-dom'
import Footer from '../../components/Footer'
import '../../styles/desktop/HomeDesktop.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

import CrossfadeImage from 'react-crossfade-image'
import Navbar from '../../components/NavBar'
import { HStack, Image, Text, Box, VStack } from '@chakra-ui/react'
import HomePagePanel from '../../components/HomePagePanel'

// const slideData = [
//     {
//         index: 0,
//         headline: "New Fashion Apparel",
//         button: "Shop now",
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg"
//     },
//     {
//         index: 1,
//         headline: "In The Wilderness",
//         button: "Book travel",
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg"
//     },
//     {
//         index: 2,
//         headline: "For Your Current Mood",
//         button: "Listen",
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg"
//     },
//     {
//         index: 3,
//         headline: "Focus On The Writing",
//         button: "Get Focused",
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg"
//     }
// ];

const HomePageDesktop = (props) => {
    return (
        <div
            className="background-main"
            // style={{
            //     backgroundColor: '#e7e9e0',
            //     backgroundImage: `url(${Background})`,
            //     backgroundPosition: 'right -9vw',
            // }}
        >
            <Box w="100%" h="100vh">
                <Navbar />
                <HomePagePanel />
            </Box>
            <Footer />
        </div>
    )
}

// ReactDOM.render(
//     <Slider heading="Example Slider" slides={slideData} />,
//     document.getElementById("app")
// );

export default HomePageDesktop
