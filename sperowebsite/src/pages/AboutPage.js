import React from 'react'
import AboutPageDesktop from './desktop/AboutDesktop'
// import HomePageMobile from './mobile/HomePageMobile';
import { useMediaQuery } from 'react-responsive'

const AboutPage = (props) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 480px)',
    })
    // const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

    return (
        <div>
            {isDesktopOrLaptop && (
                <>
                    <AboutPageDesktop />
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

export default AboutPage