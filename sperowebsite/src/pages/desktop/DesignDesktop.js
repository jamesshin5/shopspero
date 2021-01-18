import React, { useState } from 'react'
import Footer from '../../components/Footer'
import '../../styles/desktop/DesignDesktop.css'
import WalkOnWaterPage from './designs/WalkOnWaterDesktop.js'
import MountainMoverPage from './designs/MountainMoverDesktop.js'
import SperoBearPage from './designs/SperoBearDesktop.js'

import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import Navbar from '../../components/NavBar'

const DesignsDesktop = (props) => {
    const designList = [
        'walk',
        'mountain',
        'bear',
        'abide',
        'hope',
        'girl',
        'macron',
        'bless',
        'bay area',
        'berkeley',
    ]
    const [designIndex, setIndex] = useState(0)

    function switchDesign(num) {
        setIndex(num)
    }

    function renderSwitch(param) {
        switch (param) {
            case 'walk':
                return <WalkOnWaterPage />
            case 'mountain':
                return <MountainMoverPage />
            case 'bear':
                return <SperoBearPage />
            case 'abide':
                return ''
            case 'hope':
                return ''
            case 'girl':
                return ''
            case 'macron':
                return ''
            case 'bless':
                return ''
            case 'bay area':
                return ''
            case 'berkeley':
                return ''
            default:
                return ''
        }
    }
    return (
        <div className="design-main-container">
            <Navbar />
            <div className="design-card-container">
                <div className="design-nav">
                    <div className="nav-title">ORIGINAL DESIGNS</div>

                    <div className="fall-stickers-nav">
                        <div className="nav-font">FALL 2020 STICKERS</div>
                        <button
                            className="button-style"
                            onClick={() => switchDesign(0)}
                        >
                            <div className="sub-font">WALK ON WATER</div>
                        </button>
                        <button
                            className="button-style"
                            onClick={() => switchDesign(1)}
                        >
                            <div className="sub-font">MOUNTAIN MOVER</div>
                        </button>
                        <button
                            className="button-style"
                            onClick={() => switchDesign(2)}
                        >
                            <div className="sub-font">SPERO BEAR</div>
                        </button>
                    </div>

                    <button
                        className="button-style"
                        onClick={() => switchDesign(3)}
                    >
                        <div className="nav-font">ABIDE HOODIE</div>
                    </button>

                    <button className="button-style">
                        <div className="nav-font">HOPE LONG SLEEVE</div>
                    </button>

                    <button className="button-style">
                        <div className="nav-font">"I AM THAT GIRL" DAD HAT</div>
                    </button>

                    <button className="button-style">
                        <div className="nav-font">SPERO MACRON HOODIE</div>
                    </button>

                    <button className="button-style">
                        <div className="nav-font">"BLESSED TO BLESS"</div>
                    </button>

                    <button className="button-style">
                        <div className="nav-font">"BAY AREA" LONG SLEEVE</div>
                    </button>

                    <button className="button-style">
                        <div className="nav-font">BERKELEY HOODIE</div>
                    </button>
                </div>
                <div className="design-display">
                    {renderSwitch(designList[designIndex])}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DesignsDesktop
