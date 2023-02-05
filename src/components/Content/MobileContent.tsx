import React from 'react';

import classes from './MobileContent.module.css';

import Button from '../UI/Button';

import HeroImg from '../../images/image-hero-mobile.png';

import { ReactComponent as DatabizLogo } from '../../images/client-databiz.svg';
import { ReactComponent as AudioPhileLogo } from '../../images/client-audiophile.svg';
import { ReactComponent as MeetLogo } from '../../images/client-meet.svg';
import { ReactComponent as MakerLogo } from '../../images/client-maker.svg';

const MobileContent = ({ width }: { width: number }) => {
  return (
    <>
      <img src={HeroImg} alt="Remote work." width={width} />
      <div className={classes.content}>
        <h1>Make remote&nbsp;work</h1>
        <p>
          Get your team in async, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <Button variant="contained">Learn more</Button>
      </div>
      <div className={classes.client}>
        <DatabizLogo />
        <AudioPhileLogo />
        <MeetLogo />
        <MakerLogo />
      </div>
    </>
  );
};

export default MobileContent;
