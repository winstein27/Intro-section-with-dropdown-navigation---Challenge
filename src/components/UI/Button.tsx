import React from 'react';

import classes from './Button.module.css';

interface Props {
  children: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  fullSize?: boolean;
}

const Button = (props: Props) => {
  let btnClasses = classes.btn;

  btnClasses += props.fullSize ? ` ${classes.full} ` : ' ';
  if (props?.variant === 'outlined') {
    btnClasses += classes['btn-outlined'];
  }
  if (props?.variant === 'contained') {
    btnClasses += classes['btn-contained'];
  }

  return <button className={btnClasses}>{props.children}</button>;
};

export default Button;
