import React from 'react';
import DashBoardContent from '../dashboard/DashBoardContent';
import SpaceVideo from '../video/SpaceVideo';

const AppPage = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <SpaceVideo />
      <DashBoardContent />
    </div>
  );
};

export default AppPage;
