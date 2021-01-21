import React from 'react'
import '../../../styles/desktop/FallStickerPage.css'
import Fade from 'react-reveal/Fade'

const WalkOnWaterPage = () => {
    return (
        <div className="sticker-container">
            <Fade bottom>
                <div className="left-display">
                    <div class="fill">
                        <img
                            src={require('../../../images/design-photos/bottle-graphic.jpg')}
                            alt="main-sticker"
                        />
                    </div>
                    <div className="smaller-container">
                        <div class="fill-fifth leftmost">
                            <img
                                src={require('../../../images/design-photos/water-left.jpg')}
                                alt=""
                            />
                        </div>
                        <div class="fill-fifth">
                            <img
                                src={require('../../../images/design-photos/walk-on-water-main.jpg')}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </Fade>

            <div className="right-display">
                <div className="text-box">
                    <Fade bottom>
                        <div className="sticker-title">
                            WALK ON <br />
                            WATER (sticker)
                        </div>

                        <div className="sticker-bible">
                            <b>29</b> And he said, <i>Come.</i> And when Peter
                            came down out of the ship,
                            <br /> he walked on the water, to go to Jesus.
                            <br />
                            <br />
                            <b>30</b> But when he saw the wind boisterous, he
                            was afraid; <br />
                            and beginning to sink, he cried, saying, Lord, save
                            me.
                            <br />
                            <br />
                            <b>31</b> And immediately Jesus stretched forth his
                            hand, and caught him, and said unto him,{' '}
                            <i>
                                O thou of little faith, wherefore didst thou
                                doubt?
                            </i>
                            <br />
                            <br />
                            <b>Matthew 14:29-31</b>
                        </div>

                        <div className="sticker-description">
                            Our Walk on Water sticker was inspired by Matthew
                            14:29, a verse that reminds us that, however
                            impossible something demanded by Christ may seem, He
                            will grant power to us if we receive His word by
                            faith. Whatever form the ‘water’ takes in our own
                            lives, this verse and this sticker reminds us that
                            we are upheld by His power only, and we can overcome
                            any obstacle as long as we remain steadfast in our
                            faith.
                        </div>

                        <div className="button-format">
                            <div className="shop-btn-stickerpage">
                                <a href="http://tinyurl.com/spero-etsy">
                                    <h4 className="shop-text">
                                        SHOP NOW ON ETSY
                                    </h4>
                                </a>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default WalkOnWaterPage
