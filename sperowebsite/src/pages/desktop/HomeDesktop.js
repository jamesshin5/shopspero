import React, { useState, useEffect} from 'react';
import { navigate } from "@reach/router"
import Footer from '../../components/Footer';
import '../../styles/desktop/HomeDesktop.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import CrossfadeImage from 'react-crossfade-image'

const image0 = require('../../images/home-image-0.png');
const image1 = require('../../images/home-image-1.png');
// 

const HomePageDesktop = props => {
    const designLinks = ['abide','mountainmover', 'iamthatgirl', 'macronhoodie']
    const [current, setCurrent] = useState(image0);
    const [num, setNum] = useState(0);
    const numImages = designLinks.length

    function increaseNum() {
        console.log(num)
        var image = require('../../images/home-image-'+((num+1)%numImages).toString()+'.png')
        setCurrent(image)
        setNum((num+1)%numImages);
    }

    function decreaseNum() {
        if (num === 0) {
            console.log(num)
            var image = require('../../images/home-image-'+(numImages-1).toString()+'.png')
            setCurrent(image)
            setNum(numImages-1);
        }
        else {
            console.log(num)
            var image = require('../../images/home-image-'+((num-1)%numImages).toString()+'.png')
            setCurrent(image)
            setNum((num-1)%numImages);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => increaseNum(), 5000)
        return () => {
          clearInterval(interval);
        }
    })

    return (
        <div className='main-container'>
            <div className='top-container'>
                <div className='main-graphic'>
                    <div className='carousel-container'>
                        <Fade bottom>
                        <button onClick={() => decreaseNum()} className="arrow-buttons">
                            <img src={require("../../images/left-arrow.png")} alt="left-arrow" className="arrow"/>
                        </button>
                        </Fade>
                        <Fade bottom>
                            <div className='graphic-container'>
                                <Link to={'/design/'+designLinks[num]}>
                                    <CrossfadeImage src={current} duration={1500} timingFunction={"ease-out"} /> 
                                </Link>
                                <Link to='/about'>
                                    <div className="home-centered">SPERO</div>
                                </Link>
                            </div>
                        </Fade>
                        <Fade bottom>
                        <button onClick={() => increaseNum()} className="arrow-buttons"> 
                            <img src={require("../../images/right-arrow.png")} alt="right-arrow" className="arrow"/>
                        </button>
                        </Fade>
                    </div>
                    <Fade bottom>
                    <div>
                        <Link to='/about'>
                            <h3 className='sub-text'>
                                bridging fashion and mission
                            </h3>
                        </Link>
                    </div>
                    </Fade>
                    <Fade bottom>
                    <div className='shop-btn'>
                            <a href='http://tinyurl.com/spero-etsy'>
                                <h4 className='shop-text'>SHOP NOW</h4>
                            </a>
                    </div>
                    </Fade>
                </div>
             </div>
            <Footer color='#fff1e6'/>
        </div>
  );
};

export default HomePageDesktop;
