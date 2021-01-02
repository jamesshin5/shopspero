import React from 'react';
import '../../../styles/desktop/MountainMoverPage.css';
import Fade from 'react-reveal/Fade';

const SperoBearPage = () => {
    return (
        <div className='sticker-container'>
            <Fade bottom>
            <div className="left-display">
                <div class="fill">
                    <img src={require("../../../images/design-photos/bear-graphic.png")} alt="main-sticker-photo" />
                </div>
                <div className="smaller-container">
                    <div class="fill-fifth leftmost">
                        <img src={require("../../../images/design-photos/three-stickers-drawing.png")} alt="" />
                    </div>
                    <div class="fill-fifth">
                        <img src={require("../../../images/design-photos/bear-right.png")} alt="" />
                    </div>
                </div>
            </div>
            </Fade>
            
            <div className="right-display">
                <div className="text-box">
                    <Fade bottom>
                        <div className="sticker-title">SPERO <br/>BEAR (sticker)</div>

                        <div className="sticker-bible">
                        <b>78</b> because of the tender mercy of our God,<br/>by which the rising sun will come to us from heaven<br/><br/>
                        <b>79</b> to shine on those living in darkness
                        and in the shadow of death,<br/>to guide our feet into the path of peace.”


                        <br/><br/><b>Luke 1:78-79</b>
                        </div>

                        <div className="sticker-description">
                        Our Redeemed Bear sticker was inspired by Luke 1:78. We hope that, despite its seemingly simple design, this sticker will bridge connections between both familiar and unfamiliar faces, as well as between you and your faith! 
                        Created with the intention of sharing God’s saving grace, we hope that this sticker will help to guide you into a path of peace. 
                        </div>

                        <div className="button-format">
                            <div className='shop-btn-stickerpage'>
                                    <a href='http://tinyurl.com/spero-etsy'>
                                        <h4 className='shop-text'>SHOP NOW ON ETSY</h4>
                                    </a>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default SperoBearPage;