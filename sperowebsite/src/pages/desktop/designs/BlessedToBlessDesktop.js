import React from 'react';
import '../../../styles/desktop/IAmThatGirlHatDesktop.css';
import Fade from 'react-reveal/Fade';

const BlessedToBlessDesktop = () => {
    return (
        <div className='sticker-container'>
            <div className="left-display">
                <Fade bottom>
                {/* <div class="abide-fill">
                    <img src={require("../../../images/design-photos/abide-main-2.jpg")} alt="main-sticker-photo" />
                </div> */}
                <div className="smaller-container">
                    <div className="girl-fill-fifth leftmost">
                        <img src={require("../../../images/design-photos/blessed-main.png")} alt="" />
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
                <div className="macron-text-box">
                    <Fade bottom>
                    <div className="bless-title"> <b>BERKELEY</b><br/> HOODIE </div>
                    <div className="bless-bible">
                    You are the light of the world. A city set on a hill cannot be hidden.
                    <br/><br/><b>Matthew 5:14</b>
                    </div>
                    <div className="macron-description">
                    Berkeley, CA is where Spero was founded, and we hope that God will use Spero to serve the community and spread the good news.
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
                <Fade bottom>
                <div className="blessed-horizontal">
                        <img src={require("../../../images/design-photos/blessed-horizontal.png")} alt="" />
                </div>
                </Fade>
            </div>
        </div>
    );
}

export default BlessedToBlessDesktop;