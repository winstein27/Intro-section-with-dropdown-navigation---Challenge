import React from 'react';

import Button from '../UI/Button';

import classes from './Content.module.css';

import HeroImg from '../../images/image-hero-desktop.png';

const Content = () => {
  return (
    <div className={classes.content}>
      <div>
        <h1>Make remote&nbsp;work</h1>
        <p>Get your team in async, no matter your location.</p>
        <p>
          Streamline processes, create team rituals, and watch productivity
          soar.
        </p>
        <Button variant="contained">Learn more</Button>
      </div>
      <div className={classes.image}>
        <img src={HeroImg} alt="Remote work." width="540" height="720" />
      </div>
    </div>
  );
};

export default Content;
