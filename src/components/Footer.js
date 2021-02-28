import React from 'react'
import '../styles/Footer.css'
import Fade from 'react-reveal/Fade'
import { HStack, Image, Box } from '@chakra-ui/react'

const Footer = (props) => {
    return (
        <HStack
            display="flex"
            position="fixed"
            bottom="10"
            right="10"
            // w="200px"
            spacing="1rem"
            zIndex="1000"
            // bgColor="gray.500"
        >
            <Fade bottom>
                <Box w="23px" _hover={{ w: '27px' }} transition="width 0.25s">
                    <a href="https://www.facebook.com/shopspero/">
                        <Image
                            src={require('../images/facebook_icon.png')}
                            alt="facebook-icon"
                        />
                    </a>
                </Box>
            </Fade>
            <Fade bottom>
                <Box w="23px" _hover={{ w: '27px' }} transition="width 0.25s">
                    <a href="https://www.instagram.com/shopspero/">
                        <Image
                            src={require('../images/instagram_icon.png')}
                            alt="ig-icon"
                        />
                    </a>
                </Box>
            </Fade>
            <Fade bottom>
                <Box w="23px" _hover={{ w: '27px' }} transition="width 0.25s">
                    <a href="https://shopspero.medium.com/">
                        <Image
                            src={require('../images/medium_icon.png')}
                            alt="medium-icon"
                        />
                    </a>
                </Box>
            </Fade>
        </HStack>

        // <div className="footer-container">
        //         {/* <div className="spero-berkeley">
        //             <h5>&copy; SPERO 2020 Berkeley, CA </h5>
        //         </div> */}
        //         <div className="footer-social-container">
        //             <div className="social-icons-container">
        //                 <div className="icon" id="facebook-icon">
        //                     <a href="https://www.facebook.com/shopspero/">
        //                         <img
        //                             src={require('../images/facebook_icon.png')}
        //                             alt="facebook-icon"
        //                         ></img>
        //                     </a>
        //                 </div>
        //                 <div className="icon" id="instagram-icon">
        //                     <a href="https://www.instagram.com/shopspero/">
        //                         <img
        //                             src={require('../images/instagram_icon.png')}
        //                             alt="instagram-icon"
        //                         ></img>
        //                     </a>
        //                 </div>
        //                 <div className="icon" id="footer-icon">
        //                     <a href="https://shopspero.medium.com/">
        //                         <img
        //                             src={require('../images/medium_icon.png')}
        //                             alt="medium-icon"
        //                         ></img>
        //                     </a>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
    )
}

export default Footer
