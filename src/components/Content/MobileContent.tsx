import React from 'react';

import classes from './MobileContent.module.css';

import Button from '../UI/Button';

import HeroImg from '../../images/image-hero-mobile.png';

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
    </>
  );
};

export default MobileContent;
