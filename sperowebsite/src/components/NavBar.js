import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import {
    HStack,
    Image,
    Text,
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    VStack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const Navbar = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <HStack
            w="100%"
            py={{ base: '30px', md: '50px' }}
            px={{ base: '30px', sm: '40px', md: '75px' }}
            pb={{ base: '50px' }}
            justifyContent="space-between"
            alignItems="center"
        >
            <HStack w="100px" pl={{ base: '10px', md: 'none' }}>
                <Link to="/">
                    <Image
                        src={require('../images/speroicon.png')}
                        alt="logo"
                    />
                </Link>
            </HStack>
            <Box
                display={{ base: 'none', md: 'flex' }}
                w="425px"
                justifyContent="space-between"
            >
                <Button
                    background="transparent"
                    _hover={{ bg: '#ebedf0' }}
                    borderRadius="0"
                >
                    <Text
                        fontFamily="Lexend Deca"
                        color="#5c6a6f"
                        letterSpacing="2px"
                        fontSize="sm"
                        fontWeight="500"
                    >
                        <Link to="/about">ABOUT US</Link>
                    </Text>
                </Button>
                <Button
                    background="transparent"
                    _hover={{ bg: '#ebedf0' }}
                    borderRadius="0"
                >
                    <Text
                        fontFamily="Lexend Deca"
                        color="#5c6a6f"
                        letterSpacing="2px"
                        fontSize="sm"
                        fontWeight="500"
                    >
                        <Link to="/team">OUR TEAM</Link>
                    </Text>
                </Button>
                <Button
                    background="transparent"
                    _hover={{ bg: '#ebedf0' }}
                    borderRadius="0"
                >
                    <Text
                        fontFamily="Lexend Deca"
                        color="#5c6a6f"
                        letterSpacing="2px"
                        fontSize="sm"
                        fontWeight="500"
                    >
                        <Link to="/designs">DESIGNS</Link>
                    </Text>
                </Button>
                <Button
                    background="transparent"
                    _hover={{ bg: '#ebedf0' }}
                    borderRadius="0"
                >
                    <Text
                        fontFamily="Lexend Deca"
                        color="#5c6a6f"
                        letterSpacing="2px"
                        fontSize="sm"
                        fontWeight="600"
                    >
                        <a href="http://tinyurl.com/spero-etsy">SHOP</a>
                    </Text>
                </Button>
                {/* <div className="navlinks">
                    <ul>
                        <li>
                            <Link to="/about">
                                <Button>
                                    <Text>ABOUT US</Text>
                                </Button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/team">
                                <div className="navlink">OUR TEAM</div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/designs">
                                <div className="navlink">DESIGNS</div>
                            </Link>
                        </li>
                        <li>
                            <a href="http://tinyurl.com/spero-etsy">
                                <div className="navlink">SHOP</div>
                            </a>
                        </li>
                    </ul>
                </div> */}
            </Box>
            <Button
                ref={btnRef}
                onClick={onOpen}
                display={{ base: 'block', md: 'none' }}
                bg="transparent"
                _focus={{ boxShadow: 'none' }}
                size="sm"
                pb={1}
                borderRadius="0"
            >
                <HamburgerIcon w="22px" h="22px" />
                {/* {isMenuOpen ? (
                    <CloseIcon w="15px" h="15px" />
                ) : (
                    <HamburgerIcon w="22px" h="22px" />
                )} */}
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton
                            _focus={{ boxShadow: 'none' }}
                            size="lg"
                        />
                        {/* <DrawerHeader>Create your account</DrawerHeader> */}

                        <DrawerBody>
                            <VStack spacing="2rem" pt="50px">
                                <Link to="/about">
                                    <Text fontFamily="Lexend Deca">
                                        ABOUT US
                                    </Text>
                                </Link>
                                <Link to="/team">
                                    <Text fontFamily="Lexend Deca">
                                        OUR TEAM
                                    </Text>
                                </Link>
                                <Link to="/designs">
                                    <Text fontFamily="Lexend Deca">
                                        DESIGNS
                                    </Text>
                                </Link>
                                <a href="http://tinyurl.com/spero-etsy">
                                    <Text fontFamily="Lexend Deca">SHOP</Text>
                                </a>
                            </VStack>
                        </DrawerBody>

                        <DrawerFooter>
                            <HStack display="flex" spacing="1rem">
                                <Box
                                    w="23px"
                                    _hover={{ w: '27px' }}
                                    transition="width 0.25s"
                                >
                                    <a href="https://www.facebook.com/shopspero/">
                                        <Image
                                            src={require('../images/facebook_icon.png')}
                                            alt="facebook-icon"
                                        />
                                    </a>
                                </Box>
                                <Box
                                    w="23px"
                                    _hover={{ w: '27px' }}
                                    transition="width 0.25s"
                                >
                                    <a href="https://www.instagram.com/shopspero/">
                                        <Image
                                            src={require('../images/instagram_icon.png')}
                                            alt="ig-icon"
                                        />
                                    </a>
                                </Box>
                                <Box
                                    w="23px"
                                    _hover={{ w: '27px' }}
                                    transition="width 0.25s"
                                >
                                    <a href="https://shopspero.medium.com/">
                                        <Image
                                            src={require('../images/medium_icon.png')}
                                            alt="medium-icon"
                                        />
                                    </a>
                                </Box>
                            </HStack>
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </HStack>
        // <div>hi</div>
        // <div className="navbar-container">
        //     <div className="logo">
        //         <Link to="/">
        //             <img
        //                 src={require('../images/speroicon.png')}
        //                 alt="Logo"
        //                 id="logo-image"
        //             />
        //         </Link>
        //     </div>
        //     <div className="navlinks">
        //         <ul>
        //             <li>
        //                 <Link to="/about">
        //                     <div className="navlink">ABOUT US</div>
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link to="/team">
        //                     <div className="navlink">OUR TEAM</div>
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link to="/design/mountainmover">
        //                     <div className="navlink">DESIGNS</div>
        //                 </Link>
        //             </li>
        //             <li>
        //                 <a href="http://tinyurl.com/spero-etsy">
        //                     <div className="navlink">SHOP</div>
        //                 </a>
        //             </li>
        //         </ul>
        //     </div>
        // </div>
    )
}

export default Navbar
