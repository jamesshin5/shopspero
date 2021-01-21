import React from 'react'
import Footer from '../../components/Footer'
import '../../styles/desktop/DesignDesktop.css'
import WalkOnWaterDesktop from './designs/WalkOnWaterDesktop.js'

import { Link } from 'react-router-dom'
import Navbar from '../../components/NavBar'

const WalkOnWaterPage = (props) => {
    return (
        <div className="design-main-container">
            <Navbar />
            <div className="design-card-container">
                <div className="design-nav">
                    <div className="nav-title">ORIGINAL DESIGNS</div>

                    <div className="fall-stickers-nav">
                        <div className="nav-font">FALL 2020 STICKERS</div>

                        <Link to="/design/walkonwater">
                            <button className="button-style">
                                <div className="sub-font">
                                    <b>WALK ON WATER</b>
                                </div>
                            </button>
                        </Link>

                        <Link to="/design/mountainmover">
                            <button className="button-style">
                                <div className="sub-font">MOUNTAIN MOVER</div>
                            </button>
                        </Link>

                        <Link to="/design/sperobear">
                            <button className="button-style">
                                <div className="sub-font">SPERO BEAR</div>
                            </button>
                        </Link>
                    </div>

                    <button className="button-style">
                        <Link to="/design/abide">
                            <div className="nav-font">ABIDE HOODIE</div>
                        </Link>
                    </button>

                    <button className="button-style">
                        <Link to="/design/hopelongsleeve">
                            <div className="nav-font">HOPE LONG SLEEVE</div>
                        </Link>
                    </button>

                    <button className="button-style">
                        <Link to="/design/iamthatgirl">
                            <div className="nav-font">
                                "I AM THAT GIRL" DAD HAT
                            </div>
                        </Link>
                    </button>

                    <button className="button-style">
                        <Link to="/design/macronhoodie">
                            <div className="nav-font">SPERO MACRON HOODIE</div>
                        </Link>
                    </button>

                    <button className="button-style">
                        <Link to="/design/blessedtobless">
                            <div className="nav-font">"BLESSED TO BLESS"</div>
                        </Link>
                    </button>

                    <button className="button-style">
                        <Link to="/design/bayarea">
                            <div className="nav-font">
                                "BAY AREA" LONG SLEEVE
                            </div>
                        </Link>
                    </button>

                    <button className="button-style">
                        <Link to="/design/berkeleyhoodie">
                            <div className="nav-font">BERKELEY HOODIE</div>
                        </Link>
                    </button>
                </div>
                <div className="design-display">
                    <WalkOnWaterDesktop />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default WalkOnWaterPage
