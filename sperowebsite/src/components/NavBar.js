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
            <div className="navlinks">
                <ul>
                    {/* <li>
                        <Link to="/about">
                            <div className="navlink">ABOUT OG</div>
                        </Link>
                    </li> */}
                    <li>
                        <Link to="/about2">
                            <div className="navlink">ABOUT US</div>
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
            </div>
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
