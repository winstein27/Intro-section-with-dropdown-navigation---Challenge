import React from 'react';

import useViewport from '../../hooks/useViewport';

import classes from './Content.module.css';

import MobileContent from './MobileContent';
import DesktopContent from './DesktopContent';

const Content = () => {
  const windowWidth = useViewport();
  const isDesktopScreen = windowWidth > 1100;

  return (
    <main className={classes.content}>
      {isDesktopScreen ? <DesktopContent /> : <MobileContent />}
    </main>
  );
};

export default Content;
