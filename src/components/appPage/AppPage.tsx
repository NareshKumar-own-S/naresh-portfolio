import React from 'react';
import HeroContent from '../dashboard/DashBoardContent';
import SpaceVideo from '../video/SpaceVideo';

const AppPage = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <SpaceVideo />
      <HeroContent />
    </div>
  );
};

export default AppPage;
