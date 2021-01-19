import React, { Component } from 'react'
import '../../styles/desktop/AboutDesktop.css'
import Footer from '../../components/Footer'
import Navbar from '../../components/NavBar'
import Fade from 'react-reveal/Fade'

class About extends Component {
    render() {
        return (
            <div className="about-main-container">
                <Navbar />
                <div className="about-top-container">
                    {/* <img
                        src={require('../../images/about-logo.png')}
                        alt="ab logo"
                        className="ab-logo"
                    /> */}
                    <div className="about-caption-1">
                        <Fade bottom>
                            <div className="ab-caption-title-1">
                                ABOUT US
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="ab-caption-content-1">
                                We are a team of UC Berkeley students dedicated to
                            bridging <b>fashion and mission</b>. We source our
                            clothes through various Bay Area thrift stores.
                            Spero also has in-house designers that create{' '}
                                <b>original, mission-driven</b> clothing underlying
                            our company's purpose. All of our proceeds go
                            towards various local and global charitable
                            organizations.
                        </div>
                        </Fade>
                        <Fade bottom>
                            <img src={require('../../images/about-image-1.jpg')} className='about-image-0' />
                        </Fade>
                    </div>
                    <div className='ab-image-container-1'>
                        <Fade bottom>
                            <img src={require('../../images/design-photos/abide-window.jpg')} className='about-image-1' />
                        </Fade>
                    </div>
                    <Fade bottom>
                        <div className='about-line-1'></div>
                    </Fade>
                    {/* <Fade bottom>
                        <div className='about-subline-1'></div>
                    </Fade> */}
                    <div className="about-caption-2">
                        <Fade bottom>
                            <div className="ab-caption-title-2">
                                MISSION
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="ab-caption-content-2">
                                In Latin, the word "spero" means "<b>to hope</b>
                            ". Our vision is also inspired by{' '}
                                <b>Matthew 10:29-31</b>, where something as
                            insignificant as a sparrow will be remembered and
                            cared for.
                            <br />
                            We want to expose the poverty in these neglected
                            communities through an innovative medium.{' '}
                                <b>
                                    The goal of Spero is to bring hope to the
                                    hopeless and light into darkness.
                            </b>
                            </div>
                        </Fade>
                    </div>
                </div>
                <div className="about-bottom-container">
                    <div className='ab-image-container-2'>
                        <Fade bottom>
                            <img src={require('../../images/design-photos/mountain-mover-right.jpg')} className='about-image-2' />
                        </Fade>
                    </div>
                    <Fade bottom>
                        <div className='about-line-2'></div>
                    </Fade>
                    <Fade bottom>
                        <div className="ab-explanation-1">
                            MATTHEW 10:29-31
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className='ab-subex-1'>
                            "Are not two sparrows sold for a penny? And not
                            one of them will fall to the ground apart from your
                            Father. But even the hairs of your head are all
                            numbered. Fear not, therefore; you are of more
                            value than many sparrows."
                        </div>
                    </Fade>
                    <div className='ab-image-container-3'>
                        <Fade bottom>
                            <img src={require('../../images/design-photos/abide-overlay.jpg')} className='about-image-3' />
                        </Fade>
                    </div>
                    <Fade bottom>
                        <div className='about-line-2'></div>
                    </Fade>
                    <Fade bottom>
                        <div className="ab-explanation-2">
                            Our vision is inspired by Matthew 10:29-31, where
                            something as insignificant as a sparrow, will be
                            remembered and cared for.
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="ab-explanation-3">
                            His eye is on the sparrow and He watches over us. And
                            through this we have identity and know our worth through
                            Him.
                        </div>
                    </Fade>
                </div>
                <Footer color="#fff2e6" />
            </div>
        )
    }
}

export default About
