import React from 'react';
import '../../../styles/desktop/AbideHoodieDesktop.css';

const AbideHoodieDesktop = () => {
    return (
        <div className='sticker-container'>
            <div className="left-display">
                {/* <div class="abide-fill">
                    <img src={require("../../../images/design-photos/abide-main-2.jpg")} alt="main-sticker-photo" />
                </div> */}
                <div className="smaller-container">
                    <div class="abide-fill-fifth leftmost">
                        <img src={require("../../../images/design-photos/abide-main-2.jpg")} alt="" />
                    </div>
                    <div className='abide-right-container'>
                        <div class="abide-fill-fifth-right">
                            <img src={require("../../../images/design-photos/abide-overlay.jpg")} alt="" />
                        </div>
                        <div class="abide-fill-fifth-window ">
                            <img src={require("../../../images/design-photos/abide-window.jpg")} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-display">
                <div className="text-box">
                    <div className="abide-title">ABIDE <br/>HOODIE</div>
                    <div className="abide-bible">
                    He who dwells in the shelter of the Most High will abide in the shadow of the Almighty. <br></br>
                    I will say to the Lord, "My refuge and my fortress, my God, in whom I trust.”
                    <br/><br/><b>Psalms 91:1-2</b>
                    </div>
                    <div className="abide-description">
                    The Abide Hoodie was made to remind us of how God is our fortress we can abide in. The silhouette of a roof symbolizes the shelter and refuge our God is, while the shadow of the house represents the shadow of the Almighty. 
                    </div>
                    {/* <div className="button-format">
                        <div className='shop-btn-stickerpage'>
                                <a href='http://tinyurl.com/spero-etsy'>
                                    <h4 className='shop-text'>SHOP NOW ON ETSY</h4>
                                </a>
                        </div>
                    </div> */}
                    
                </div>
            </div>
        </div>
    );
}

export default AbideHoodieDesktop;