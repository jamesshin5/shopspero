import React from 'react';
import '../../../styles/desktop/IAmThatGirlHatDesktop.css';

const MacronHoodieDesktop = () => {
    return (
        <div className='sticker-container'>
            <div className="left-display">
                {/* <div class="abide-fill">
                    <img src={require("../../../images/design-photos/abide-main-2.jpg")} alt="main-sticker-photo" />
                </div> */}
                <div className="smaller-container">
                    <div className="girl-fill-fifth leftmost">
                        <img src={require("../../../images/design-photos/macron-hoodie-girl.png")} alt="" />
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
                    <div className="macron-title"> <b>MACRON</b> HOODIE</div>
                    <div className="macron-bible">
                    Are not two sparrows sold for a penny? And not one of them will fall to the ground apart from your Father. But even the hairs of your head are all numbered. Fear not, therefore; you are of more value than many sparrows.
                    <br/><br/><b>Matthew 10:29-31 </b>
                    </div>
                    <div className="macron-description">
                    Spero is a symbol of hope. We believe that there is only one true, everlasting hope in this world -  the gospel of Jesus Christ. Just like the sparrows, we have confidence in the promises of the Word! We know that our Heavenly Father is good and because He will take care of us, we have nothing to fear. 
                    </div>
                    {/* <div className="button-format">
                        <div className='shop-btn-stickerpage'>
                                <a href='http://tinyurl.com/spero-etsy'>
                                    <h4 className='shop-text'>SHOP NOW ON ETSY</h4>
                                </a>
                        </div>
                    </div> */}
                </div>
                <div className="macron-fill-fifth">
                        <img src={require("../../../images/design-photos/macron-hoodie-guy.png")} alt="" />
                </div>
            </div>
        </div>
    );
}

export default MacronHoodieDesktop;