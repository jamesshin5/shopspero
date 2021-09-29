import React from 'react'
// import Popup from './DesignPopup';
import '../styles/Product.css'
import Fade from 'react-reveal/Fade'

// import { useMediaQuery } from 'react-responsive'
// import WalkOnWaterDesktop from '../pages/desktop/designs/WalkOnWaterDesktop.js'
// import MountainMoverDesktop from '../pages/desktop/designs/MountainMoverDesktop.js'
// import SperoBearDesktop from '../pages/desktop/designs/SperoBearDesktop.js'

// import AbideHoodieDesktop from '../pages/desktop/designs/AbideHoodieDesktop.js'
// import HopeDesktop from '../pages/desktop/designs/HopeDesktop.js'
// import IAmThatGirlHatDesktop from '../pages/desktop/designs/IAmThatGirlHatDesktop.js'

// import MacronHoodieDesktop from '../pages/desktop/designs/MacronHoodieDesktop.js'
// import BlessedToBlessDesktop from '../pages/desktop/designs/BlessedToBlessDesktop.js'
// import BayAreaDesktop from '../pages/desktop/designs/BayAreaDesktop.js'

// import BerkeleyHoodieDesktop from '../pages/desktop/designs/BerkeleyHoodieDesktop.js'
// import RedeemedHoodie from '../pages/desktop/designs/RedeemedHoodie.js'
// import { processResponsive } from '@chakra-ui/styled-system';

const Product = (props) => {
    return (
        <Fade bottom>
            <div className="product-container">
                <div className="product-popup">
                </div>
                <div className="product-squares">
                    <img
                        src={props.imageURL}
                        alt="Logo"
                        className="product-img"
                    />
                    <div class="product-top-dark">{props.name}</div>
                    <div class="product-centered-dark">{props.title}</div>
                    <div class="product-below-dark">{props.price}</div>
                </div>
            </div>            
        </Fade>
    )
}

export default Product
