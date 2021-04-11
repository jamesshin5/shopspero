import React, { useState } from 'react'
import Popup from './DesignPopup';
import '../styles/Product.css'
import Fade from 'react-reveal/Fade'

import { useMediaQuery } from 'react-responsive'
import WalkOnWaterDesktop from '../pages/desktop/designs/WalkOnWaterDesktop.js'
import MountainMoverDesktop from '../pages/desktop/designs/MountainMoverDesktop.js'
import SperoBearDesktop from '../pages/desktop/designs/SperoBearDesktop.js'

import AbideHoodieDesktop from '../pages/desktop/designs/AbideHoodieDesktop.js'
import HopeDesktop from '../pages/desktop/designs/HopeDesktop.js'
import IAmThatGirlHatDesktop from '../pages/desktop/designs/IAmThatGirlHatDesktop.js'

import MacronHoodieDesktop from '../pages/desktop/designs/MacronHoodieDesktop.js'
import BlessedToBlessDesktop from '../pages/desktop/designs/BlessedToBlessDesktop.js'
import BayAreaDesktop from '../pages/desktop/designs/BayAreaDesktop.js'

import BerkeleyHoodieDesktop from '../pages/desktop/designs/BerkeleyHoodieDesktop.js'
import RedeemedHoodie from '../pages/desktop/designs/RedeemedHoodie.js'
import { processResponsive } from '@chakra-ui/styled-system';

const Product = (props) => {
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    function renderSwitch(props) {
        switch (props.index) {
            case "10":
                return <RedeemedHoodie />
            case "9":
                return <WalkOnWaterDesktop />
            case "8":
                return <MountainMoverDesktop />
            case "7":
                return <SperoBearDesktop />
            case "6":
                return <AbideHoodieDesktop />
            case "5":
                return <HopeDesktop />
            case "4":
                return <IAmThatGirlHatDesktop />
            case "3":
                return <MacronHoodieDesktop />
            case "2":
                return <BlessedToBlessDesktop />
            case "1":
                return <BayAreaDesktop />
            case "0":
                return <BerkeleyHoodieDesktop />
            default:
                return ''
        }
    }

    return (
        <Fade bottom>
            <div className="product-container">
                {isOpen && <Popup
                    content={<>
                        {renderSwitch(props)}
                    </>}
                    handleClose={togglePopup}
                />}
                <img
                    onClick={togglePopup}
                    src={props.imageURL}
                    alt="Logo"
                    className="product-img"
                />
                <div class="product-top-dark">{props.name}</div>
                <div class="product-centered-dark">{props.title}</div>
                <div class="product-below-dark">{props.price}</div>
            </div>            
        </Fade>
    )
}

export default Product
