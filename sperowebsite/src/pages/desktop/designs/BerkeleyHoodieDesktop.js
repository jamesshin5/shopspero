import React from 'react';
import '../../../styles/desktop/IAmThatGirlHatDesktop.css';

const BerkeleyHoodieDesktop = () => {
    return (
        <div className='sticker-container'>
            <div className="left-display">
                {/* <div class="abide-fill">
                    <img src={require("../../../images/design-photos/abide-main-2.jpg")} alt="main-sticker-photo" />
                </div> */}
                <div className="smaller-container">
                    <div className="girl-fill-fifth leftmost">
                        <img src={require("../../../images/design-photos/berkeley-vertical.png")} alt="" />
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
                    <div className="bless-title"> <b>BLESSED TO BLESS</b><br/> CREWNECK/TEE </div>
                    <div className="bless-bible">
                    For even the Son of Man came not to be served but to serve, and to give his life as a ransom for many.
                    <br/><br/><b>Mark 10:45 </b>
                    </div>
                    <div className="macron-description">
                    As Jesus Christ humbly came to serve us, sinners, by giving His life for us to be saved, we, Christians, have the same goal of serving others. Through Spero, we hope to serve the underserved and ones in need, but also our peers and people of Berkeley.
                    </div>
                    {/* <div className="button-format">
                        <div className='shop-btn-stickerpage'>
                                <a href='http://tinyurl.com/spero-etsy'>
                                    <h4 className='shop-text'>SHOP NOW ON ETSY</h4>
                                </a>
                        </div>
                    </div> */}
                </div>
                <div className="blessed-horizontal">
                        <img src={require("../../../images/design-photos/berkeley-horizontal.png")} alt="" />
                </div>
            </div>
        </div>
    );
}

export default BerkeleyHoodieDesktop;