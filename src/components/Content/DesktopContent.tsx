import React from 'react';

import classes from './DesktopContent.module.css';

import Button from '../UI/Button';

import HeroImg from '../../images/image-hero-desktop.png';

const DesktopContent = () => {
  return (
    <>
      <div className={classes.content}>
        <h1>Make remote&nbsp;work</h1>
        <p>Get your team in async, no matter your location.</p>
        <p>
          Streamline processes, create team rituals, and watch productivity
          soar.
        </p>
        <Button variant="contained">Learn more</Button>
      </div>
      <div className={`${classes.content} ${classes.image}`}>
        <img src={HeroImg} alt="Remote work." width="540" height="720" />
      </div>
    </>
  );
};

export default DesktopContent;
