import React, { Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import '../styles/Main.css';

import Navbar from './NavBar';
// import MobileNav from './MobileNav';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import TeamPage from '../pages/TeamPage';
import DesignsPage from '../pages/DesignsPage';
// import ShopPage from '../pages/ShopPage';
// import PartnershipsPage from '../pages/PartnershipsPage';
import { useMediaQuery } from 'react-responsive';

const Main = ({ location }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 480px)',
  });
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  return (
    <Fragment>
      {isDesktopOrLaptop && (
        <>
          <Navbar />
        </>
      )}

      {/* {isMobile && (
        <>
          <MobileNav />
        </>
      )} */}
      <TransitionGroup className='transition-group'>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={'fade'}
        >
          <section className='route-section'>
            <Switch location={location}>
              <Route exact path='/' component={HomePage} />
              <Route path='/about' component={AboutPage} />
              <Route path='/team' component={TeamPage} />
              <Route path='/designs' component={DesignsPage} />
              {/* <Route path='/shop' component={ShopPage} />
              <Route path='/partnerships' component={PartnershipsPage} /> */}
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
};

export default withRouter(Main);