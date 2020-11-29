import React from 'react';
import DesignsDesktop from './desktop/DesignDesktop';
// import HomePageMobile from './mobile/HomePageMobile';
import { useMediaQuery } from 'react-responsive';

const DesignsPage = props => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 480px)' });
  // const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  return (
    <div>
      {isDesktopOrLaptop && (
        <>
          <DesignsDesktop />
        </>
      )}

      {/* {isMobile && (
        <>
          <HomePageMobile />
        </>
      )} */}
    </div>
  );
};

export default DesignsPage;