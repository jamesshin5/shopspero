import React from 'react'
import '../styles/Product.css'
import Fade from 'react-reveal/Fade'
import { useMediaQuery } from 'react-responsive'

const Product = (props) => {
    return (
        <Fade bottom>
            <div className="product-container">
                <img
                    src={props.imageURL}
                    alt="Logo"
                    className="product-img"
                />
                <div class="top-dark">{props.name}</div>
                <div class="centered-dark">{props.title}</div>
                <div class="below-dark">{props.price}</div>
            </div>            
        </Fade>
    )
}

export default Product
