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
                <Profile  name="JAMES SHIN" title="WEB DEVELOPER" imageURL={require("../../images/staff/jamesshin.png")} />
                <Profile name="DORCAS CHEUNG" title="CMO" imageURL={require("../../images/staff/dorcascheung.png")} />
                <Profile  name="JAMES SHIN" title="WEB DEVELOPER" imageURL={require("../../images/staff/jamesshin.png")} />
                <Profile name="DORCAS CHEUNG" title="CMO" imageURL={require("../../images/staff/dorcascheung.png")} />
                <Profile name="DORCAS CHEUNG" title="CMO" imageURL={require("../../images/staff/dorcascheung.png")} />
            </div>
            <div className="cards-table">
                <Profile  name="JAMES SHIN" title="WEB DEVELOPER" imageURL={require("../../images/staff/jamesshin.png")} />
                <Profile name="DORCAS CHEUNG" title="CMO" imageURL={require("../../images/staff/dorcascheung.png")} />
                <Profile  name="JAMES SHIN" title="WEB DEVELOPER" imageURL={require("../../images/staff/jamesshin.png")} />
                <Profile name="DORCAS CHEUNG" title="CMO" imageURL={require("../../images/staff/dorcascheung.png")} />
                <Profile name="DORCAS CHEUNG" title="CMO" imageURL={require("../../images/staff/dorcascheung.png")} />
            </div>
        </div>
        <Footer color="#fff2e6"/>
    </div>
  );
};

export default TeamPage;