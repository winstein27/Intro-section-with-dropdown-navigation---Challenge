import React, { useState } from 'react';

import classes from './Navbar.module.css';

import Menu from '../UI/Menu';

import { ReactComponent as ArrowUp } from '../../images/icon-arrow-up.svg';
import { ReactComponent as ArrowDown } from '../../images/icon-arrow-down.svg';
import { ReactComponent as TodoIcon } from '../../images/icon-todo.svg';
import { ReactComponent as CalendarIcon } from '../../images/icon-calendar.svg';
import { ReactComponent as RemindersIcon } from '../../images/icon-reminders.svg';
import { ReactComponent as PlanningIcon } from '../../images/icon-planning.svg';

import { ReactComponent as Logo } from '../../images/logo.svg';

const featureMenu = [
  { icon: <TodoIcon />, text: 'Todo List' },
  { icon: <CalendarIcon />, text: 'Calendar' },
  { icon: <RemindersIcon />, text: 'Reminders' },
  { icon: <PlanningIcon />, text: 'Planning' },
];

const companyMenu = [
  { text: 'History' },
  { text: 'Our Team' },
  { text: 'Blog' },
];

const Navbar = () => {
  const [isMenuFeaturesOpen, setIsMenuFeaturesOpen] = useState(false);
  const [isMenuCompanyOpen, setIsMenuCompanyOpen] = useState(false);

  return (
    <nav className={classes.bar}>
      <div className={classes.logo}>
        <Logo title="snap logo" width={84} height={27} />
      </div>
      <div className={classes.menu}>
        <a href="!#" onMouseOver={() => setIsMenuFeaturesOpen(true)}>
          Features
          {!isMenuFeaturesOpen && <ArrowUp />}
          {isMenuFeaturesOpen && <ArrowDown />}
          {isMenuFeaturesOpen && (
            <Menu
              menuItems={featureMenu}
              onMouseLeave={() => setIsMenuFeaturesOpen(false)}
            />
          )}
        </a>

        <a href="!#" onMouseEnter={() => setIsMenuCompanyOpen(true)}>
          Company
          {!isMenuCompanyOpen && <ArrowUp />}
          {isMenuCompanyOpen && <ArrowDown />}
          {isMenuCompanyOpen && (
            <Menu
              menuItems={companyMenu}
              onMouseLeave={() => setIsMenuCompanyOpen(false)}
            />
          )}
        </a>

        <a href="!#">Carrers</a>
        <a href="!#">About</a>
      </div>
    </nav>
  );
};

export default Navbar;
