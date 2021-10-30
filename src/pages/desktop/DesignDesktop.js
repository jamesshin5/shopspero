import React, { useEffect, useRef, useState } from 'react'
import Footer from '../../components/Footer'
import Popup from '../../components/DesignPopup.js';
import '../../styles/desktop/DesignDesktop.css'
import Product from '../../components/Product'

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
import RedeemedHoodie from './designs/RedeemedHoodie.js'

import Navbar from '../../components/NavBar'
import Fade from 'react-reveal/Fade'
import Database from '../../components/Database'

import {
    Grid,
    VStack,
    Text,
    Box,
} from '@chakra-ui/react'
// import { ChevronDownIcon } from '@chakra-ui/icons'
import { useLocation } from 'react-router-dom'

import { productPreviewData } from './productPreviewData'

const DesignsDesktop = (props) => {
    let passedProps = useLocation()
    let data = passedProps.state

    const [designIndex, setIndex] = useState(10)
    const [isOpen, setIsOpen] = useState(false);
    const popupRef = useRef();
    let popupElement = useRef();

    // const designs = [
    //     'BERKELEY HOODIE',
    //     'BAY AREA HOODIE',
    //     'BLESSED TO BLESSED HOODIE',
    //     'MACRON HOODIE',
    //     'I AM THAT GIRL',
    //     'HOPE LONGSLEEVE',
    //     'ABIDE HOODIE',
    //     'SPERO BEAR',
    //     'MOUNTAIN MOVER',
    //     'WALK ON WATER STICKER',
    //     'REDEEMED HOODIE',
    // ]

    const handlePopupClicks = (event) => {
        // console.log('event.target', event.target);
        if (isOpen && popupRef.current.contains(event.target)) {
            console.log(popupRef.current)
            alert('Clicked outside of popup to close it')
        }

    }

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
    }, [data])

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


    const togglePopup = (param) => {
        setIsOpen(!isOpen);
        window.value = param
    }

    const productTiles = productPreviewData.map(product => {
        return ( 
            <div className="design-desktop-product" onClick={() =>togglePopup(product.index)} >
                <Product
                    name={product.name}
                    title={product.title}
                    imageURL={product.image}
                    price={product.price}
                    index = {product.index}
                />
            </div>
        )
    })

    return (
        <div className="background-main"
        >
            <Box w="100%" h="100%"
            onClick={(event)=> {
                if(isOpen && popupRef.current == event.target) {
                    togglePopup();
                }
            }}>
                <Navbar />
                <Database />
                <div className='design-desktop-popup'>
                    {isOpen && <Popup 
                        content={<>
                            {renderSwitch(window.value)}
                        </>}
                        handleClose={togglePopup}
                        reference = {popupRef}
                    />}
                </div>
                <VStack
                    textAlign="center"
                    px={{ base: '30px', lg: '100px' }}
                    color="#5c6a6f"
                    pt="25px"
                    alignItems="start"
                >
                    <Fade bottom>
                        <Text
                            fontFamily="Lexend Deca"
                            fontSize={{ base: '4xl', sm: '6xl' }}
                            border="none"
                            borderBottom="3px solid #5c6a6f"
                            marginBottom="5%"
                        >
                            DESIGNS
                        </Text>
                    </Fade>
                        <Grid
                            py={10}
                            templateColumns={{
                                base: 'repeat(1, 4fr)',
                                sm: 'repeat(2,4fr)',
                                md: 'repeat(3, 4fr)',
                                lg: 'repeat(4,4fr)',
                            }}
                            gap={1}
                        >
                            {productTiles}
                        </Grid>
                </VStack>
                <Footer />
            </Box>
        </div>
    )
}

export default DesignsDesktop
