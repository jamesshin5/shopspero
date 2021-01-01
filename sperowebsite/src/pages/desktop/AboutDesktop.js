import React, { Component } from 'react';
import '../../styles/desktop/AboutDesktop.css';
import Footer from '../../components/Footer';

class About extends Component {
  render() {
    return (
      <div>
        <div className="about-main-container">
          <div className="about-top-container">
            <img src={require("../../images/about-logo.png")} alt='ab logo' className="ab-logo" />
            <div className="about-caption-1">
              <div className="ab-caption-title-1"><b>About Us</b></div>
              <div className="ab-caption-content-1">
                We are a team of UC Berkeley students dedicated to bridging <b>fashion and mission</b>. We source our clothes through various Bay Area thrift stores. Spero also has in-house designers that create <b>original, mission-driven</b> clothing underlying our company's purpose. All of our proceeds go towards various local and global charitable organizations.
              </div>
            </div>
            <div className="about-caption-2">
              <div className="ab-caption-title-2"><b>Mission</b></div>
              <div className="ab-caption-content-2">
                In Latin, the word "spero" means "<b>to hope</b>". Our vision is also inspired by <b>Matthew 10:29-31</b>, where something as insignificant as a sparrow will be remembered and cared for.<br />
                We want to expose the poverty in these neglected communities through an innovative medium. <b>The goal of Spero is to bring hope to the hopeless and light into darkness</b>.
              </div>
            </div>
          </div>
          <div className="about-bottom-container">
            <div className="ab-explanation-1">
              Our vision is inspired by Matthew 10:29-31, where something as insignificant as a sparrow, will be remembered and cared for.
            </div>
            <div className="ab-colored-bar"></div>
            <img src={require("../../images/kinfolk-abide.jpg")} alt='' className="ab-image" />
            <div className="ab-explanation-2">
              His eye is on the sparrow and He watches over us. And through this we have identity and know our worth through Him.
            </div>
          </div>
          <Footer color="#fff2e6" />
        </div>
      </div >
    );
  }
}

export default About;