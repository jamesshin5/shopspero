import React, { useState, useEffect, Fragment } from 'react'
import Footer from '../../components/Footer'
import '../../styles/desktop/HomeDesktop.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

import CrossfadeImage from 'react-crossfade-image'
import Navbar from '../../components/NavBar'
import { HStack, Image, Text, Box, VStack } from '@chakra-ui/react'

const SuccessDesktop = (props) => {
    return (
        <div
            className="background-main"
        // style={{
        //     backgroundColor: '#e7e9e0',
        //     backgroundImage: `url(${Background})`,
        //     backgroundPosition: 'right -9vw',
        // }}
        >
            <Box w="100%" h="100vh" >
                <Navbar />
                <Fade bottom>
                    <Text
                        marginTop="10%"
                        fontFamily="Lexend Deca"
                        fontSize={{ base: '40px', sm: '50px', md: '60px' }}
                        transition="font-size 0.5s"
                        align="center"
                        color="#006400"
                    >
                        PURCHASE SUCCESSFUL
                    </Text>
                    <Text
                        marginTop="4%"
                        fontFamily="Lexend Deca"
                        fontSize={{ base: '15px', sm: '20px', md: '30px' }}
                        transition="font-size 0.5s"
                        align="center"
                    >
                        Thank you for shopping at SPERO!
                    </Text>
                </Fade>
            </Box>
            <Footer />
        </div>
    )
}

export default SuccessDesktop
