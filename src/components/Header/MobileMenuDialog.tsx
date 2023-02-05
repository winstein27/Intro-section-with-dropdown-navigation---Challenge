import React, { useState } from 'react';

import classes from './MobileMenuDialog.module.css';

import Backdrop from '../UI/Backdrop';
import Button from '../UI/Button';

import { ReactComponent as CloseIcon } from '../../images/icon-close-menu.svg';
import { ReactComponent as ArrowUp } from '../../images/icon-arrow-up.svg';
import { ReactComponent as ArrowDown } from '../../images/icon-arrow-down.svg';
import { ReactComponent as TodoIcon } from '../../images/icon-todo.svg';
import { ReactComponent as CalendarIcon } from '../../images/icon-calendar.svg';
import { ReactComponent as RemindersIcon } from '../../images/icon-reminders.svg';
import { ReactComponent as PlanningIcon } from '../../images/icon-planning.svg';

interface Props {
  closeMenu: () => void;
}

const MobileMenuDialog = (props: Props) => {
  const [isMenuFeaturesOpen, setIsMenuFeatureOpen] = useState(false);
  const [isMenuCompanyOpen, setIsMenuCompanyOpen] = useState(false);

  return (
    <>
      <Backdrop onClick={props.closeMenu} />
      <div className={classes.menu}>
        <div className={classes.content}>
          <CloseIcon onClick={props.closeMenu} />
          <nav className={classes.nav}>
            <ul>
              <li onClick={() => setIsMenuFeatureOpen((prev) => !prev)}>
                Features {isMenuFeaturesOpen ? <ArrowUp /> : <ArrowDown />}
                {isMenuFeaturesOpen && (
                  <ul className={classes['sub-menu']}>
                    <li>
                      <TodoIcon /> Todo List
                    </li>
                    <li>
                      <CalendarIcon /> Calendar
                    </li>
                    <li>
                      <RemindersIcon /> Reminders
                    </li>
                    <li>
                      <PlanningIcon /> Planning
                    </li>
                  </ul>
                )}
              </li>
              <li onClick={() => setIsMenuCompanyOpen((prev) => !prev)}>
                Company {isMenuCompanyOpen ? <ArrowUp /> : <ArrowDown />}
                {isMenuCompanyOpen && (
                  <ul className={classes['sub-menu']}>
                    <li>History</li>
                    <li>Our Team </li>
                    <li>Blog</li>
                  </ul>
                )}
              </li>
              <li>Carrers</li>
              <li>About</li>
            </ul>
          </nav>
          <div className={classes.buttons}>
            <Button fullSize>Login</Button>
            <Button variant={'outlined'} fullSize>
              Register
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenuDialog;
