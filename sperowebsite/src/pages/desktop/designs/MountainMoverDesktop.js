import React from 'react'
import '../../../styles/desktop/FallStickerPage.css'
import Fade from 'react-reveal/Fade'

const MountainMoverDesktop = () => {
    return (
        <div className="sticker-container">
            <Fade bottom>
                <div className="left-display">
                    <div class="fill">
                        <img
                            src={require('../../../images/design-photos/mountain-graphic.jpg')}
                            alt="main-sticker-photo"
                        />
                    </div>
                    <div className="smaller-container">
                        <div class="fill-fifth leftmost">
                            <img
                                src={require('../../../images/design-photos/three-stickers-drawing.jpg')}
                                alt=""
                            />
                        </div>
                        <div class="fill-fifth">
                            <img
                                src={require('../../../images/design-photos/mountain-mover-right.jpg')}
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
                            MOUNTAIN <br />
                            MOVER (sticker)
                        </div>

                        <div className="sticker-bible">
                            He replied,{' '}
                            <i>
                                “Because you have so little faith. Truly I tell
                                you, if you have faith as small as a mustard
                                seed, you can say to this mountain,
                                <br />
                                ‘Move from here to there,’ and it will move.{' '}
                                <br />
                                <br />
                                Nothing will be impossible for you.”
                            </i>
                            <br />
                            <br />
                            <b>Matthew 17:20-21</b>
                        </div>

                        <div className="sticker-description">
                            Our Mountain Mover sticker was inspired by Matthew
                            17:20, with the goal of representing how our faith
                            is ever-thriving and ever-increasing. Our initial
                            introduction to the concept of faith is often small,
                            daunting, and unfamiliar. However, this verse
                            reminds us of how a faith that starts out as an
                            unfamiliar idea can transform into something capable
                            of moving mountains.
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

export default MountainMoverDesktop
