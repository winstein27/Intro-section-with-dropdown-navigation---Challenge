import React, { useState } from 'react';

import classes from './Navbar.module.css';

import Menu from '../UI/Menu';

import { ReactComponent as ArrowUp } from '../../images/icon-arrow-up.svg';
import { ReactComponent as ArrowDown } from '../../images/icon-arrow-down.svg';
import { ReactComponent as TodoIcon } from '../../images/icon-todo.svg';
import { ReactComponent as CalendarIcon } from '../../images/icon-calendar.svg';
import { ReactComponent as RemindersIcon } from '../../images/icon-reminders.svg';
import { ReactComponent as PlanningIcon } from '../../images/icon-planning.svg';

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
    <nav className={classes.navbar}>
      <ul className={classes.menu}>
        <li key="1">
          <a href="!#" onMouseOver={() => setIsMenuFeaturesOpen(true)}>
            Features
          </a>
          {!isMenuFeaturesOpen ? <ArrowUp /> : <ArrowDown />}
          {isMenuFeaturesOpen && (
            <Menu
              menuItems={featureMenu}
              onMouseLeave={() => setIsMenuFeaturesOpen(false)}
            />
          )}
        </li>
        <li key="2">
          <a href="!#" onMouseEnter={() => setIsMenuCompanyOpen(true)}>
            Company
          </a>
          {!isMenuCompanyOpen ? <ArrowUp /> : <ArrowDown />}
          {isMenuCompanyOpen && (
            <Menu
              menuItems={companyMenu}
              onMouseLeave={() => setIsMenuCompanyOpen(false)}
            />
          )}
        </li>
        <li key="3">
          <a href="!#">Carrers</a>
        </li>
        <li key="4">
          <a href="!#">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
