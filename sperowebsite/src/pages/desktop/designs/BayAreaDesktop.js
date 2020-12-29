import React from 'react';
import '../../../styles/desktop/IAmThatGirlHatDesktop.css';

const BayAreaDesktop = () => {
    return (
        <div className='sticker-container'>
            <div className="left-display">
                {/* <div class="abide-fill">
                    <img src={require("../../../images/design-photos/abide-main-2.jpg")} alt="main-sticker-photo" />
                </div> */}
                <div className="smaller-container">
                    <div className="girl-fill-fifth leftmost">
                        <img src={require("../../../images/design-photos/bay-area-main.jpg")} alt="" />
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
            </div>
            <div className="right-display">
                <div className="macron-text-box">
                    <div className="bay-area-title"> <b>BAY AREA</b> HOODIE</div>
                    {/* <div className="macron-bible">
                    Are not two sparrows sold for a penny? And not one of them will fall to the ground apart from your Father. But even the hairs of your head are all numbered. Fear not, therefore; you are of more value than many sparrows.
                    <br/><br/><b>Matthew 10:29-31 </b>
                    </div> */}
                    <div className="macron-description">
                    Spero aims to be a light in the Bay Area, through both our Christ-centered apparel and philanthropic work.
                    </div>
                    {/* <div className="button-format">
                        <div className='shop-btn-stickerpage'>
                                <a href='http://tinyurl.com/spero-etsy'>
                                    <h4 className='shop-text'>SHOP NOW ON ETSY</h4>
                                </a>
                        </div>
                    </div> */}
                </div>
                <div className="bay-area-fill-fifth">
                        <img src={require("../../../images/design-photos/bay-area-horizontal.png")} alt="" />
                </div>
            </div>
        </div>
    );
}

export default BayAreaDesktop;