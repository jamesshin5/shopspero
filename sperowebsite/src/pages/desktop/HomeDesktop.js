import React, { useState } from 'react';
import Footer from '../../components/Footer';
import '../../styles/desktop/HomeDesktop.css';
import { Link } from 'react-router-dom';

const image0 = require('../../images/home-image-0.png');
const image1 = require('../../images/home-image-1.png');
// 

const HomePageDesktop = props => {
    const [current, setCurrent] = useState(image0);
    const [num, setNum] = useState(0);
    const numImages = 2

    function increaseNum() {
        var image = require('../../images/home-image-'+((num+1)%numImages).toString()+'.png')
        setCurrent(image)
        setNum((num+1)%numImages);
    }

    function decreaseNum() {
        if (num == 0) {
            var image = require('../../images/home-image-'+(numImages-1).toString()+'.png')
            setCurrent(image)
            setNum(numImages-1);
        }
        else {
            var image = require('../../images/home-image-'+((num-1)%numImages).toString()+'.png')
            setCurrent(image)
            setNum((num-1)%numImages);
        }
    }

    return (
        <div className='main-container'>
        <div className='top-container'>
                <div className='main-graphic'>
                    <div className='carousel-container'>
                        <button onClick={() => decreaseNum()} className="arrow-buttons">
                            <img src={require("../../images/left-arrow.png")} alt="left-arrow" className="arrow"/>
                        </button>
                        <div className='graphic-container'>
                            <img src={current} id='bird-image' /> 
                            <Link to='/about'>
                                <div class="home-centered">SPERO</div>
                            </Link>
                        </div>
                        <button onClick={() => increaseNum()} className="arrow-buttons"> 
                            <img src={require("../../images/right-arrow.png")} alt="right-arrow" className="arrow"/>
                        </button>
                    </div>
                    <div>
                        <Link to='/about'>
                            <h3 className='sub-text'>
                                bridging fashion and mission
                            </h3>
                        </Link>
                    </div>
                    <div className='shop-btn'>
                            <a href='http://tinyurl.com/spero-etsy'>
                                <h4 className='shop-text'>SHOP NOW</h4>
                            </a>
                    </div>
                </div>
                </div>
                <Footer color='#fff1e6'/>
            </div>
  );
};

export default HomePageDesktop;
