import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
    HStack,
    Image,
    Text,
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    VStack,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

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
                <NavLink to="/">
                    <Image
                        src={require('../images/speroicon.png')}
                        alt="logo"
                    />
                </NavLink>
            </HStack>
            <Box
                display={{ base: 'none', md: 'flex' }}
                w="425px"
                justifyContent="space-between"
            >
                <NavLink to="/about" 
                    activeStyle={{
                        fontWeight: "bold",
                        background: '#ebedf0',
                    }}
                >
                    <Button
                        background="transparent"
                        _hover={{ bg: '#ebedf0' }}
                        _focus={{ boxShadow: 'none' }}
                        borderRadius="0"
                    >
                        <Text
                            fontFamily="Lexend Deca"
                            color="#5c6a6f"
                            letterSpacing="2px"
                            fontSize="sm"
                            fontWeight="500"
                        >
                            ABOUT US
                        </Text>
                    </Button>
                </NavLink>
                <NavLink to="/team"
                    activeStyle={{
                        fontWeight: "bold",
                        background: '#ebedf0',
                    }}
                >
                    <Button
                        background="transparent"
                        _hover={{ bg: '#ebedf0' }}
                        _focus={{ boxShadow: 'none' }}
                        borderRadius="0"
                    >
                        <Text
                            fontFamily="Lexend Deca"
                            color="#5c6a6f"
                            letterSpacing="2px"
                            fontSize="sm"
                            fontWeight="500"
                        >
                            OUR TEAM
                        </Text>
                    </Button>
                </NavLink>
                <NavLink to="/designs" 
                    activeStyle={{
                        fontWeight: "bold",
                        background: '#ebedf0',
                    }}
                >
                    <Button
                        background="transparent"
                        _hover={{ bg: '#ebedf0' }}
                        _focus={{ boxShadow: 'none' }}
                        borderRadius="0"
                    >
                        <Text
                            fontFamily="Lexend Deca"
                            color="#5c6a6f"
                            letterSpacing="2px"
                            fontSize="sm"
                            fontWeight="500"
                        >
                            DESIGNS
                        </Text>
                    </Button>
                </NavLink>
                <a href="http://tinyurl.com/spero-etsy">
                    <Button
                        background="transparent"
                        _hover={{ bg: '#ebedf0' }}
                        _focus={{ boxShadow: 'none' }}
                        borderRadius="0"
                    >
                        <Text
                            fontFamily="Lexend Deca"
                            color="#5c6a6f"
                            letterSpacing="2px"
                            fontSize="sm"
                            fontWeight="600"
                        >
                            SHOP
                        </Text>
                    </Button>
                </a>
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
                                <NavLink to="/about">
                                    <Text fontFamily="Lexend Deca">
                                        ABOUT US
                                    </Text>
                                </NavLink>
                                <NavLink to="/team">
                                    <Text fontFamily="Lexend Deca">
                                        OUR TEAM
                                    </Text>
                                </NavLink>
                                <NavLink to="/designs">
                                    <Text fontFamily="Lexend Deca">
                                        DESIGNS
                                    </Text>
                                </NavLink>
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
    )
}

export default Navbar
