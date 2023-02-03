import React from 'react';

import classes from './Header.module.css';

import Button from '../UI/Button';
import Navbar from './Navbar';

import { ReactComponent as Logo } from '../../images/logo.svg';

const Header = () => {
  return (
    <header>
      <div className={classes.logo}>
        <Logo title="snap logo" width={84} height={27} />
      </div>
      <Navbar />
      <div className={classes['header-btns']}>
        <Button>Login</Button>
        <Button variant={'outlined'}>Register</Button>
      </div>
    </header>
  );
};

export default Header;
