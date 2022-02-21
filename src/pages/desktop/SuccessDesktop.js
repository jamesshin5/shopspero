import React, { useEffect } from 'react'
import Footer from '../../components/Footer'
import '../../styles/desktop/HomeDesktop.css'
import Fade from 'react-reveal/Fade'

import Navbar from '../../components/NavBar'
import { Text, Box } from '@chakra-ui/react'
import { ourFireStore } from '../../firebaseApp'
import { updateDoc, doc } from '@firebase/firestore'

const SuccessDesktop = (props) => {
    useEffect(() => {
        ;(async () => {
            var urlString = window.location.href
            var url = new URL(urlString)
            var cartID = url.searchParams.get('cartid')
            if (cartID) {
                await updateDoc(doc(ourFireStore, 'carts', cartID), {
                    paid: true,
                })
            }
        })()
    }, [])
    return (
        <div className="background-main">
            <Box w="100%" h="100vh">
                <Navbar />
                <Fade bottom>
                    <Text
                        marginTop="10%"
                        fontFamily="Lexend Deca"
                        fontSize={{ base: '40px', sm: '50px', md: '60px' }}
                        transition="font-size 0.5s"
                        align="center"
                        color="#5c6a6f"
                    >
                        PURCHASE SUCCESSFUL
                    </Text>
                    <Text
                        marginTop="4%"
                        fontFamily="Lexend Deca"
                        fontSize={{ base: '10px', sm: '15px', md: '20px' }}
                        transition="font-size 0.5s"
                        align="center"
                    >
                        Thank you for shopping at SPERO! Look out for a
                        confirmation email for your order.
                    </Text>
                </Fade>
            </Box>
            <Footer />
        </div>
    )
}

export default SuccessDesktop
