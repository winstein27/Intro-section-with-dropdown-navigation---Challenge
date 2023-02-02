import React from 'react';

import classes from './Menu.module.css';

interface Props {
  menuItems: { icon: React.ReactNode; text: string }[];
}

const Menu = ({ menuItems }: Props) => {
  return (
    <div className={classes.menu}>
      {menuItems.map((menuItem) => (
        <a>
          <span>{menuItem.icon}</span>
          {menuItem.text}
        </a>
      ))}
    </div>
  );
};

export default Menu;
