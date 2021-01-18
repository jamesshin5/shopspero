import React, { Fragment } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import '../styles/Main.css'

import Navbar from './NavBar'
// import MobileNav from './MobileNav';

import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import TeamPage from '../pages/TeamPage'
import DesignsPage from '../pages/DesignsPage'
// import ShopPage from '../pages/ShopPage';
// import PartnershipsPage from '../pages/PartnershipsPage';
import { useMediaQuery } from 'react-responsive'
import MountainMoverPage from '../pages/desktop/MountainMoverPage'
import WalkOnWaterPage from '../pages/desktop/WalkOnWaterPage'
import SperoBearPage from '../pages/desktop/SperoBearPage'
import AbideHoodiePage from '../pages/desktop/AbideHoodiePage'
import IAmThatGirlHatPage from '../pages/desktop/IAmThatGirlHatPage'
import HopePage from '../pages/desktop/HopePage'
import MacronHoodiePage from '../pages/desktop/MacronHoodiePage'
import BlessedToBlessPage from '../pages/desktop/BlessedToBlessPage'
import BayAreaPage from '../pages/desktop/BayAreaPage'
import BerkeleyHoodiePage from '../pages/desktop/BerkeleyHoodiePage'
import ContactPage from '../pages/Contact'

const Main = ({ location }) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 480px)',
    })
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' })

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
            <TransitionGroup className="transition-group">
                <CSSTransition
                    key={location.key}
                    timeout={{ enter: 300, exit: 300 }}
                    classNames={'fade'}
                >
                    <section className="route-section">
                        <Switch location={location}>
                            <Route
                                exact
                                path="/"
                                component={withRouter(HomePage)}
                            />
                            <Route path="/about" component={AboutPage} />
                            <Route path="/team" component={TeamPage} />
                            <Route path="/designs" component={DesignsPage} />
                            <Route
                                path="/design/mountainmover"
                                component={MountainMoverPage}
                            />
                            <Route
                                path="/design/walkonwater"
                                component={WalkOnWaterPage}
                            />
                            <Route
                                path="/design/sperobear"
                                component={SperoBearPage}
                            />
                            <Route
                                path="/design/abide"
                                component={AbideHoodiePage}
                            />
                            <Route
                                path="/design/iamthatgirl"
                                component={IAmThatGirlHatPage}
                            />
                            <Route
                                path="/design/hopelongsleeve"
                                component={HopePage}
                            />
                            <Route
                                path="/design/macronhoodie"
                                component={MacronHoodiePage}
                            />
                            <Route
                                path="/design/blessedtobless"
                                component={BlessedToBlessPage}
                            />
                            <Route
                                path="/design/bayarea"
                                component={BayAreaPage}
                            />
                            <Route
                                path="/design/berkeleyhoodie"
                                component={BerkeleyHoodiePage}
                            />
                            {/* <Route path='/contact' component={ContactPage} /> */}
                        </Switch>
                    </section>
                </CSSTransition>
            </TransitionGroup>
        </Fragment>
    )
}

export default withRouter(Main)
