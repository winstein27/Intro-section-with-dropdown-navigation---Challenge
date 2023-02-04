import React from 'react';

import classes from './Header.module.css';

import Button from '../UI/Button';
import Navbar from './Navbar';

import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as MenuIcon } from '../../images/icon-menu.svg';

import useViewport from '../../hooks/useViewport';

const Header = () => {
  const windowWidth = useViewport();
  const isDesktopScreen = windowWidth > 1100;

  return (
    <header>
      <div className={classes.logo}>
        <Logo title="snap logo" width={84} height={27} />
      </div>
      {isDesktopScreen ? (
        <>
          <Navbar />
          <div className={classes['header-btns']}>
            <Button>Login</Button>
            <Button variant={'outlined'}>Register</Button>
          </div>
        </>
      ) : (
        <div className={classes['menu-mobile']}>
          <MenuIcon />
        </div>
      )}
    </header>
  );
};

export default Header;
