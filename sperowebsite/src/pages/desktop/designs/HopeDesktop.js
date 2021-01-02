import React from 'react';
import '../../../styles/desktop/IAmThatGirlHatDesktop.css';
import Fade from 'react-reveal/Fade';

const HopeDesktop = () => {
    return (
        <div className='sticker-container'>
            <div className="left-display">
                {/* <div class="abide-fill">
                    <img src={require("../../../images/design-photos/abide-main-2.jpg")} alt="main-sticker-photo" />
                </div> */}
                <Fade bottom>
                <div className="smaller-container">
                    <div className="girl-fill-fifth leftmost">
                        <img src={require("../../../images/design-photos/hope-longsleeve.jpg")} alt="" />
                    </div>
                    {/* <div className='girl-right-container'>
                        <div className="girl-fill-fifth-right">
                            <img src={require("../../../images/design-photos/girl-hat-back.jpg")} alt="" />
                        </div>
                        <div className="girl-fill-fifth-window ">
                            <img src={require("../../../images/design-photos/girl-hat-flyer.jpg")} alt="" />
                        </div>
                    </div> */}
                </div>
                </Fade>
                
            </div>
            <div className="right-display">
                <div className="text-box">
                    <Fade bottom>
                    <div className="hope-title"> <b>HOPE</b><br/>LONG SLEEVE</div>
                    <div className="girl-bible">
                    For to this end we toil and strive, because we have our hope set on the living God, who is the Savior of all people, especially of those who believe.
                    <br/><br/><b>1 Timothy 4:10 </b>
                    </div>
                    <div className="girl-description">
                    Once one believes in the gospel, one has eternal hope. This is the message Spero wants to share, for this world is temporary and broken.
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

export default HopeDesktop;