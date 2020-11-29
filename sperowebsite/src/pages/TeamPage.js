import React from 'react';
import TeamDesktop from './desktop/TeamDesktop';
// import HomePageMobile from './mobile/HomePageMobile';
import { useMediaQuery } from 'react-responsive';

const TeamPage = props => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 480px)' });
  // const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  return (
    <div>
      {isDesktopOrLaptop && (
        <>
          <TeamDesktop />
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

export default TeamPage;