import React from 'react';

import classes from './DesktopContent.module.css';

import Button from '../UI/Button';

import HeroImg from '../../images/image-hero-desktop.png';

import { ReactComponent as DatabizLogo } from '../../images/client-databiz.svg';
import { ReactComponent as AudioPhileLogo } from '../../images/client-audiophile.svg';
import { ReactComponent as MeetLogo } from '../../images/client-meet.svg';
import { ReactComponent as MakerLogo } from '../../images/client-maker.svg';

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
        <div className={classes.client}>
          <DatabizLogo />
          <AudioPhileLogo />
          <MeetLogo />
          <MakerLogo />
        </div>
      </div>
      <div className={`${classes.content} ${classes.image}`}>
        <img src={HeroImg} alt="Remote work." width="540" height="720" />
      </div>
    </>
  );
};

export default DesktopContent;
