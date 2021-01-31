import React from 'react'
import AboutPageDesktop2 from './desktop/AboutDesktop2'
// import HomePageMobile from './mobile/HomePageMobile';
import { useMediaQuery } from 'react-responsive'

const AboutPage2 = (props) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 480px)',
    })
    // const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

    return (
        <div>
            {isDesktopOrLaptop && (
                <>
                    <AboutPageDesktop2 />
                </>
            )}

            {/* {isMobile && (
        <>
          <HomePageMobile />
        </>
      )} */}
        </div>
    )
}

export default AboutPage2