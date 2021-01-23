import React from 'react'
import '../styles/Footer.css'
import Fade from 'react-reveal/Fade'

const Footer = (props) => {
    return (
        <Fade bottom>
            <div className="footer-container">
                {/* <div className="spero-berkeley">
                    <h5>&copy; SPERO 2020 Berkeley, CA </h5>
                </div> */}
                <div className="footer-social-container">
                    <div className="social-icons-container">
                        <div className="icon" id="facebook-icon">
                            <a href="https://www.facebook.com/shopspero/">
                                <img
                                    src={require('../images/facebook_icon.png')}
                                    alt="facebook-icon"
                                ></img>
                            </a>
                        </div>
                        <div className="icon" id="instagram-icon">
                            <a href="https://www.instagram.com/shopspero/">
                                <img
                                    src={require('../images/instagram_icon.png')}
                                    alt="instagram-icon"
                                ></img>
                            </a>
                        </div>
                        <div className="icon" id="footer-icon">
                            <a href="https://medium.com/">
                                <img
                                    src={require('../images/medium_icon.png')}
                                    alt="medium-icon"
                                ></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default Footer
