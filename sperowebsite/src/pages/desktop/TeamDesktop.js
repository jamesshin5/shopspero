import React from 'react';
import Footer from '../../components/Footer';
import Profile from '../../components/Profile'
import '../../styles/desktop/TeamDesktop.css';
import { Link } from 'react-router-dom';

const TeamPage = props => {
  return (
    <div className="staff-main-container">
        <div className="staff-card-container">
            <div className="cards-table">
                <Profile  name="REBECCA SOO" title="PRESIDENT" imageURL={require("../../images/staff/jamesshin.png")} />
                <Profile name="DORCAS CHEUNG" title="MARKETING LEAD" imageURL={require("../../images/staff/dorcascheung.png")} />
                <Profile  name="ANDREW CHENG" title="OPERATIONS LEAD" imageURL={require("../../images/staff/jamesshin.png")} />
                <Profile name="MATTHEW FLORES" title="TECHNICAL LEAD" imageURL={require("../../images/staff/dorcascheung.png")} />
                <Profile name="JASMINE CHEN" title="DESIGN LEAD" imageURL={require("../../images/staff/dorcascheung.png")} />
            </div>
            <div className="cards-table">
                <Profile  name="JUSTIN PARK" title="OPERATIONS" imageURL={require("../../images/staff/jamesshin.png")} />
                <Profile name="JAMES SHIN" title="WEB DEVELOPER" imageURL={require("../../images/staff/dorcascheung.png")} />
                <Profile  name="JENNY WOO" title="MARKETING" imageURL={require("../../images/staff/jamesshin.png")} />
                <Profile name="RACHEL SOO" title="DESIGN" imageURL={require("../../images/staff/dorcascheung.png")} />
                <Profile name="ESTHER YOO" title="MARKETING" imageURL={require("../../images/staff/dorcascheung.png")} />
            </div>
        </div>
        <Footer color="#fff2e6"/>
    </div>
  );
};

export default TeamPage;