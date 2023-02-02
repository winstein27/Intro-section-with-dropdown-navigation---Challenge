import React from 'react';

import classes from './Menu.module.css';

interface Props {
  menuItems: { icon?: React.ReactNode; text: string }[];
  onMouseLeave: () => void;
}

const Menu = (props: Props) => {
  return (
    <div className={classes.menu} onMouseLeave={props.onMouseLeave}>
      {props.menuItems.map((menuItem) => (
        <a href="!#">
          {menuItem?.icon && <span>{menuItem.icon}</span>}
          {menuItem.text}
        </a>
      ))}
    </div>
  );
};

export default Menu;
