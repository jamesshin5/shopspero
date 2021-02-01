import React from 'react'
import AboutDesktopOld from './desktop/AboutDesktopOld'
// import HomePageMobile from './mobile/HomePageMobile';
import { useMediaQuery } from 'react-responsive'

const AboutPageOld = (props) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 480px)',
    })
    // const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

    return (
        <div>
            {isDesktopOrLaptop && (
                <>
                    <AboutDesktopOld />
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

export default AboutPageOld
