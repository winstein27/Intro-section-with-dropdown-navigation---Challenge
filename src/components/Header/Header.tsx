import React from 'react';

import Button from '../UI/Button';
import Navbar from './Navbar';

import classes from './Header.module.css';

const Header = () => {
  return (
    <header>
      <Navbar />

      <div className={classes['header-btns']}>
        <Button>Login</Button>
        <Button variant={'outlined'}>Register</Button>
      </div>
    </header>
  );
};

export default Header;
