import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import '../../styles/desktop/DesignDesktop.css'
import WalkOnWaterDesktop from './designs/WalkOnWaterDesktop.js'
import MountainMoverDesktop from './designs/MountainMoverDesktop.js'
import SperoBearDesktop from './designs/SperoBearDesktop.js'

import AbideHoodieDesktop from './designs/AbideHoodieDesktop.js'
import HopeDesktop from './designs/HopeDesktop.js'
import IAmThatGirlHatDesktop from './designs/IAmThatGirlHatDesktop.js'

import MacronHoodieDesktop from './designs/MacronHoodieDesktop.js'
import BlessedToBlessDesktop from './designs/BlessedToBlessDesktop.js'
import BayAreaDesktop from './designs/BayAreaDesktop.js'

import BerkeleyHoodieDesktop from './designs/BerkeleyHoodieDesktop.js'
import RedeemedHoodie from './designs/RedeemedHoodie'

import Navbar from '../../components/NavBar'

import {
    HStack,
    VStack,
    Flex,
    Text,
    Box,
    Stack,
    Menu,
    MenuButton,
    Button,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useLocation } from 'react-router-dom'

const DesignsDesktop = (props) => {
    let passedProps = useLocation()
    let data = passedProps.state

    const [designIndex, setIndex] = useState(10)

    const designs = [
        'BERKELEY HOODIE',
        'BAY AREA HOODIE',
        'BLESSED TO BLESSED HOODIE',
        'MACRON HOODIE',
        'I AM THAT GIRL',
        'HOPE LONGSLEEVE',
        'ABIDE HOODIE',
        'SPERO BEAR',
        'MOUNTAIN MOVER',
        'WALK ON WATER STICKER',
        'REDEEMED HOODIE',
    ]

    useEffect(() => {
        switch (data) {
            case 'redeemed':
                setIndex(10)
                break
            case 'abide':
                setIndex(6)
                break
            case 'mountainmover':
                setIndex(8)
                break
            case 'iamthatgirl':
                setIndex(4)
                break
            case 'macronhoodie':
                setIndex(3)
                break
            default:
                setIndex(10)
                break
        }
    }, [])

    function renderSwitch(param) {
        switch (param) {
            case 10:
                return <RedeemedHoodie />
            case 9:
                return <WalkOnWaterDesktop />
            case 8:
                return <MountainMoverDesktop />
            case 7:
                return <SperoBearDesktop />
            case 6:
                return <AbideHoodieDesktop />
            case 5:
                return <HopeDesktop />
            case 4:
                return <IAmThatGirlHatDesktop />
            case 3:
                return <MacronHoodieDesktop />
            case 2:
                return <BlessedToBlessDesktop />
            case 1:
                return <BayAreaDesktop />
            case 0:
                return <BerkeleyHoodieDesktop />
            default:
                return ''
        }
    }
    return (
        <div
            className="background-main"
            // style={{
            //     backgroundColor: '#e7e9e0',
            //     backgroundImage: `url(${Background})`,
            //     backgroundPosition: 'right -9vw',
            //     backgroundRepeat: 'no-repeat',
            // }}
        >
            <Box w="100%" h="100vh" overflow="scroll">
                <Navbar />
                <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    pb="100px"
                    px={{ base: '15px', md: '35px', lg: '75px' }}
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <HStack
                        display={{ base: 'flex', sm: 'none' }}
                        alignItems="center"
                    >
                        <Text fontFamily="Lexend Deca" fontSize="12px">
                            <b>ORIGINAL DESIGNS:</b>
                        </Text>
                        <Menu>
                            <MenuButton>
                                <Button
                                    rightIcon={<ChevronDownIcon />}
                                    // background="transparent"
                                    _hover={{ bg: '#ebedf0' }}
                                    borderRadius="0"
                                >
                                    <Text
                                        fontFamily="Tenor Sans"
                                        fontSize="10px"
                                    >
                                        {designs[designIndex]}
                                    </Text>
                                </Button>
                            </MenuButton>
                            <MenuList
                                fontSize="10px"
                                borderWidth="0"
                                borderRadius="0"
                            >
                                <MenuItem onClick={() => setIndex(10)}>
                                    <Text fontFamily="Tenor Sans">
                                        REDEEMED HOODIE
                                    </Text>
                                </MenuItem>
                                <MenuItem onClick={() => setIndex(9)}>
                                    <Text fontFamily="Tenor Sans">
                                        WALK ON WATER STICKER
                                    </Text>
                                </MenuItem>
                                <MenuItem onClick={() => setIndex(8)}>
                                    <Text fontFamily="Tenor Sans">
                                        MOUNTAIN MOVER
                                    </Text>
                                </MenuItem>
                                <MenuItem onClick={() => setIndex(7)}>
                                    <Text fontFamily="Tenor Sans">
                                        SPERO BEAR
                                    </Text>
                                </MenuItem>
                                <MenuItem onClick={() => setIndex(6)}>
                                    <Text fontFamily="Tenor Sans">
                                        ABIDE HOODIE
                                    </Text>
                                </MenuItem>
                                <MenuItem onClick={() => setIndex(5)}>
                                    <Text fontFamily="Tenor Sans">
                                        HOPE LONGSLEEVE
                                    </Text>
                                </MenuItem>
                                <MenuItem onClick={() => setIndex(4)}>
                                    <Text fontFamily="Tenor Sans">
                                        I AM THAT GIRL HAT
                                    </Text>
                                </MenuItem>
                                <MenuItem onClick={() => setIndex(3)}>
                                    <Text fontFamily="Tenor Sans">
                                        MACRON HOODIE
                                    </Text>
                                </MenuItem>
                                <MenuItem onClick={() => setIndex(2)}>
                                    <Text fontFamily="Tenor Sans">
                                        BLESSED TO BLESS HOODIE
                                    </Text>
                                </MenuItem>
                                <MenuItem onClick={() => setIndex(1)}>
                                    <Text fontFamily="Tenor Sans">
                                        BAY AREA HOODIE
                                    </Text>
                                </MenuItem>
                                <MenuItem onClick={() => setIndex(0)}>
                                    <Text fontFamily="Tenor Sans">
                                        BERKELEY HOODIE
                                    </Text>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </HStack>
                    <VStack
                        textAlign="right"
                        alignItems="right"
                        fontFamily="Tenor Sans"
                        fontSize={{ base: '8px', sm: '12px', lg: '14px' }}
                        spacing={{ base: '0.75rem', lg: '1.5rem' }}
                        color="#5c6a6f"
                        minW={{ base: '175px', lg: '225px' }}
                        display={{ base: 'none', sm: 'flex' }}
                        pt="15px"
                    >
                        <Text fontWeight="bold" color="black">
                            ORIGINAL DESIGNS
                        </Text>
                        <Box>
                            <button onClick={() => setIndex(10)}>
                                <Text
                                    _hover={{ color: 'black' }}
                                    color={
                                        designIndex === 10 ? 'black' : '#5c6a6f'
                                    }
                                    textAlign="right"
                                >
                                    REDEEMED HOODIE
                                </Text>
                            </button>
                        </Box>
                        <VStack
                            alignItems="right"
                            spacing="0.25rem"
                            fontSize={{ base: '4px', sm: '8px', lg: '10px' }}
                        >
                            <Text
                                fontSize={{
                                    base: '8px',
                                    sm: '12px',
                                    lg: '14px',
                                }}
                            >
                                FALL 2020 STICKERS
                            </Text>
                            <Box>
                                <button onClick={() => setIndex(9)}>
                                    <Text
                                        _hover={{ color: 'black' }}
                                        color={
                                            designIndex === 9
                                                ? 'black'
                                                : '#5c6a6f'
                                        }
                                        textAlign="right"
                                    >
                                        WALK ON WATER
                                    </Text>
                                </button>
                            </Box>
                            <Box>
                                <button onClick={() => setIndex(8)}>
                                    <Text
                                        _hover={{ color: 'black' }}
                                        color={
                                            designIndex === 8
                                                ? 'black'
                                                : '#5c6a6f'
                                        }
                                        textAlign="right"
                                    >
                                        MOUNTAIN MOVER
                                    </Text>
                                </button>
                            </Box>
                            <Box>
                                <button onClick={() => setIndex(7)}>
                                    <Text
                                        _hover={{ color: 'black' }}
                                        color={
                                            designIndex === 7
                                                ? 'black'
                                                : '#5c6a6f'
                                        }
                                        textAlign="right"
                                    >
                                        SPERO BEAR
                                    </Text>
                                </button>
                            </Box>
                        </VStack>

                        <Box>
                            <button onClick={() => setIndex(6)}>
                                <Text
                                    _hover={{ color: 'black' }}
                                    color={
                                        designIndex === 6 ? 'black' : '#5c6a6f'
                                    }
                                    textAlign="right"
                                >
                                    ABIDE HOODIE
                                </Text>
                            </button>
                        </Box>
                        <Box>
                            <button onClick={() => setIndex(5)}>
                                <Text
                                    _hover={{ color: 'black' }}
                                    color={
                                        designIndex === 5 ? 'black' : '#5c6a6f'
                                    }
                                    textAlign="right"
                                >
                                    HOPE LONG SLEEVE
                                </Text>
                            </button>
                        </Box>
                        <Box>
                            <button onClick={() => setIndex(4)}>
                                <Text
                                    _hover={{ color: 'black' }}
                                    color={
                                        designIndex === 4 ? 'black' : '#5c6a6f'
                                    }
                                    textAlign="right"
                                >
                                    I AM THAT GIRL HAT
                                </Text>
                            </button>
                        </Box>
                        <Box>
                            <button onClick={() => setIndex(3)}>
                                <Text
                                    _hover={{ color: 'black' }}
                                    color={
                                        designIndex === 3 ? 'black' : '#5c6a6f'
                                    }
                                    textAlign="right"
                                >
                                    SPERO MACRON HOODIE
                                </Text>
                            </button>
                        </Box>
                        <Box>
                            <button onClick={() => setIndex(2)}>
                                <Text
                                    _hover={{ color: 'black' }}
                                    color={
                                        designIndex === 2 ? 'black' : '#5c6a6f'
                                    }
                                    textAlign="right"
                                >
                                    BLESSED TO BLESS
                                </Text>
                            </button>
                        </Box>
                        <Box>
                            <button onClick={() => setIndex(1)}>
                                <Text
                                    _hover={{ color: 'black' }}
                                    color={
                                        designIndex === 1 ? 'black' : '#5c6a6f'
                                    }
                                    textAlign="right"
                                >
                                    BAY AREA LONG SLEEVE
                                </Text>
                            </button>
                        </Box>
                        <Box>
                            <button onClick={() => setIndex(0)}>
                                <Text
                                    _hover={{ color: 'black' }}
                                    color={
                                        designIndex === 0 ? 'black' : '#5c6a6f'
                                    }
                                    textAlign="right"
                                >
                                    BERKELEY HOODIE
                                </Text>
                            </button>
                        </Box>
                    </VStack>
                    <Flex>{renderSwitch(designIndex)}</Flex>
                </Stack>
                <Footer />
            </Box>
        </div>

        // <div className="design-main-container">
        //     <Navbar />
        //     <div className="design-card-container">
        //         <div className="design-nav">
        //             <div className="nav-title">ORIGINAL DESIGNS</div>

        //             <div className="fall-stickers-nav">
        //                 <div className="nav-font">FALL 2020 STICKERS</div>
        //                 <button
        //                     className="button-style"
        //                     onClick={() => setIndex(0)}
        //                 >
        //                     <div className="sub-font">WALK ON WATER</div>
        //                 </button>
        //                 <button
        //                     className="button-style"
        //                     onClick={() => setIndex(1)}
        //                 >
        //                     <div className="sub-font">MOUNTAIN MOVER</div>
        //                 </button>
        //                 <button
        //                     className="button-style"
        //                     onClick={() => setIndex(2)}
        //                 >
        //                     <div className="sub-font">SPERO BEAR</div>
        //                 </button>
        //             </div>

        //             <button
        //                 className="button-style"
        //                 onClick={() => setIndex(3)}
        //             >
        //                 <div className="nav-font">ABIDE HOODIE</div>
        //             </button>

        //             <button
        //                 className="button-style"
        //                 onClick={() => setIndex(4)}
        //             >
        //                 <div className="nav-font">HOPE LONG SLEEVE</div>
        //             </button>

        //             <button
        //                 className="button-style"
        //                 onClick={() => setIndex(5)}
        //             >
        //                 <div className="nav-font">"I AM THAT GIRL" DAD HAT</div>
        //             </button>

        //             <button
        //                 className="button-style"
        //                 onClick={() => setIndex(6)}
        //             >
        //                 <div className="nav-font">SPERO MACRON HOODIE</div>
        //             </button>

        //             <button
        //                 className="button-style"
        //                 onClick={() => setIndex(7)}
        //             >
        //                 <div className="nav-font">"BLESSED TO BLESS"</div>
        //             </button>

        //             <button
        //                 className="button-style"
        //                 onClick={() => setIndex(8)}
        //             >
        //                 <div className="nav-font">"BAY AREA" LONG SLEEVE</div>
        //             </button>

        //             <button
        //                 className="button-style"
        //                 onClick={() => setIndex(9)}
        //             >
        //                 <div className="nav-font">BERKELEY HOODIE</div>
        //             </button>
        //         </div>
        //         <div className="design-display">
        //             {renderSwitch(designIndex)}
        //         </div>
        //     </div>
        //     <Footer />
        // </div>
    )
}

export default DesignsDesktop
