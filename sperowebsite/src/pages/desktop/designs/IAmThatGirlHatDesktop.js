import React from 'react';
import '../../../styles/desktop/IAmThatGirlHatDesktop.css';
import Fade from 'react-reveal/Fade';

const IAmThatGirlHatDesktop = () => {
    return (
        <div className='sticker-container'>
            <Fade bottom>
            <div className="left-display">
                {/* <div class="abide-fill">
                    <img src={require("../../../images/design-photos/abide-main-2.jpg")} alt="main-sticker-photo" />
                </div> */}
                <div className="smaller-container">
                    <div className="girl-fill-fifth leftmost">
                        <img src={require("../../../images/design-photos/girl-hat-top.png")} alt="" />
                    </div>
                    <div className='girl-right-container'>
                        <div className="girl-fill-fifth-right">
                            <img src={require("../../../images/design-photos/girl-hat-back.png")} alt="" />
                        </div>
                        <div className="girl-fill-fifth-window ">
                            <img src={require("../../../images/design-photos/girl-hat-flyer.png")} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            </Fade>
            
            <div className="right-display">
                <div className="text-box">
                    <Fade bottom>
                    <div className="girl-title">I AM THAT <br/><b>GIRL</b></div>
                    {/* <div className="girl-bible">
                    He who dwells in the shelter of the Most High will abide in the shadow of the Almighty. <br></br>
                    I will say to the Lord, "My refuge and my fortress, my God, in whom I trust.”
                    <br/><br/><b>Psalms 91:1-2</b>
                    </div> */}
                    <div className="girl-description">
                    ShopSpero partnered with I Am That Girl, LMU to create a limited edition Girl hat. The goal of this project is to raise fund for sexual assault survivors and increase sexual harassment awareness.
                    </div>
                    {/* <div className="button-format">
                        <div className='shop-btn-stickerpage'>
                                <a href='http://tinyurl.com/spero-etsy'>
                                    <h4 className='shop-text'>SHOP NOW ON ETSY</h4>
                                </a>
                        </div>
                    </div> */}
                    </Fade>
                    
                    
                </div>
            </div>
        </div>
    );
}

export default IAmThatGirlHatDesktop;