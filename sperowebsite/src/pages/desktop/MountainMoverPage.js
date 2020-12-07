import React, { useState } from 'react';
import Footer from '../../components/Footer';
import '../../styles/desktop/DesignDesktop.css';
import MountainMoverDesktop from './designs/MountainMoverDesktop.js'


import { Link } from 'react-router-dom';

const MountainMoverPage = props => {

  return (
    <div className="design-main-container">
        <div className="design-card-container">
          <div className="design-nav">
              <div className="nav-title">ORIGINAL DESIGNS</div>

              <div className="fall-stickers-nav">

                <div className="nav-font">FALL 2020 STICKERS</div>

                <Link to='/design/walkonwater'>
                <button className="button-style">
                  <div className="sub-font">WALK ON WATER</div>
                </button>
                </Link>

                <Link to='/design/mountainmover'>
                <button className="button-style">
                  <div className="sub-font"><b>MOUNTAIN MOVER</b></div>
                </button>
                </Link>

                <Link to='/design/sperobear'>
                <button className="button-style">
                  <div className="sub-font">SPERO BEAR</div>
                </button>
                </Link>

              </div>

              <button className="button-style">
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
            <MountainMoverDesktop />
          </div>

        </div>
        <Footer />
    </div>
  );
};

export default MountainMoverPage;
