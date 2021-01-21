import React from 'react'
import HomePageDesktop from './desktop/HomeDesktop'
// import HomePageMobile from './mobile/HomePageMobile';
// import { useMediaQuery } from 'react-responsive'
import { withRouter } from 'react-router'

const HomePage = (props) => {
    // const isDesktopOrLaptop = useMediaQuery({
    //     query: '(min-device-width: 480px)',
    // })
    // const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

    return (
        <div>
            {/* {isDesktopOrLaptop && (
        <> */}
            <HomePageDesktop />
            {/* </>
      )} */}

            {/* {isMobile && (
        <>
          <HomePageMobile />
        </>
      )} */}
        </div>
    )
}

export default withRouter(HomePage)
