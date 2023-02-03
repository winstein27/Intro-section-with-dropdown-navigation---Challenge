import React from 'react';

import classes from './Button.module.css';

interface Props {
  children: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
}

const Button = (props: Props) => {
  let btnClasses = `${classes.btn} `;

  if (props?.variant === 'outlined') {
    btnClasses += classes['btn-outlined'];
  }
  if (props?.variant === 'contained') {
    btnClasses += classes['btn-contained'];
  }

  return <button className={btnClasses}>{props.children}</button>;
};

export default Button;
