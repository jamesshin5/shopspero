import React from 'react'
import '../styles/Footer.css'
import Fade from 'react-reveal/Fade'
import { HStack, Image, Box, Text } from '@chakra-ui/react'

const Footer = (props) => {
    return (
        <React.Fragment>
            <div className="footer-container">
            <Image
                    src={require('../images/paintFooter.png')}
                    w="100%"
                    h="200px"
                    pos="absolute"
                    bottom="5px"
                    // paddingTop="50px"
                        />
            <Fade bottom>
                {/* <div className="footer-blurb">“Are not two sparrows sold for a penny? Yet not one of them 
                    will fall to the ground outside your Father’s care. And even the 
                    very hairs of your head are all numbered.. So don’t be afraid; 
                    you are worth more than many sparrows.” - Matthew 10:29-31</div> */}
                <Box w="300px" pos="absolute" bottom = "30px" left="50px" transition="width 0.25s">
                    <Text
                        fontFamily="Tenor Sans"
                        color="white"
                        letterSpacing="1px"
                        fontSize="10px"
                        fontWeight="100"
                        >
                        “Are not two sparrows sold for a penny? Yet not one of them 
                        will fall to the ground outside your Father’s care. And even the 
                        very hairs of your head are all numbered.. So don’t be afraid; 
                        you are worth more than many sparrows.” - Matthew 10:29-31
                        </Text>
                </Box>
            </Fade>        
            <HStack
                display="flex"
                position="absolute" /*fixed*/
                bottom="10"
                right="10"
                // w="200px"
                spacing="1rem"
                zIndex="1000"
                // bgColor="gray.500"
            >
                <Fade bottom> 
                    <Box w="30px" _hover={{ w: '27px' }} transition="width 0.25s">
                        <a href="https://www.facebook.com/shopspero/">
                            <Image
                                src={require('../images/fb_white_icon.png')}
                                alt="facebook-icon"  //BOX PREVIOUSLY 23px
                            />
                        </a>
                    </Box>
                </Fade>
                <Fade bottom>
                    <Box w="30px" _hover={{ w: '27px' }} transition="width 0.25s">
                        <a href="https://www.instagram.com/shopspero/">
                            <Image
                                src={require('../images/instagram_white_icon.png')}
                                alt="ig-icon"
                            />
                        </a>
                    </Box>
                </Fade>
                <Fade bottom>
                    <Box w="30px" _hover={{ w: '27px' }} transition="width 0.25s">
                        <a href="https://shopspero.medium.com/">
                            <Image
                                src={require('../images/medium_white_icon.png')}
                                alt="medium-icon"
                            />
                        </a>
                    </Box>
                </Fade>
            </HStack>
            </div>
        </React.Fragment>

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
