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

const Navbar = () => {
  const [hoverFeatures, setHoverFeatures] = useState(false);
  const [hoverCompany, setHoverCompany] = useState(false);

  return (
    <nav className={classes.bar}>
      <div className={classes.logo}>
        <Logo title="snap logo" width={84} height={27} />
      </div>
      <div className={classes.menu}>
        <a
          href="#"
          onMouseEnter={() => setHoverFeatures(true)}
          onMouseLeave={() => setHoverFeatures(false)}
        >
          Features
          {!hoverFeatures && <ArrowUp />}
          {hoverFeatures && <ArrowDown />}
          {hoverFeatures && <Menu menuItems={featureMenu} />}
        </a>

        <a
          href="#"
          onMouseEnter={() => setHoverCompany(true)}
          onMouseLeave={() => setHoverCompany(false)}
        >
          Company
          {!hoverCompany && <ArrowUp />}
          {hoverCompany && <ArrowDown />}
        </a>

        <a href="#">Carrers</a>
        <a href="#">About</a>
      </div>
    </nav>
  );
};

export default Navbar;
