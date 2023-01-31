import React from 'react';

import classes from './Button.module.css';

interface Props {
  children: React.ReactNode;
  variant?: 'text' | 'outlined';
}

const Button = (props: Props) => {
  return (
    <button
      className={
        classes.btn +
        ' ' +
        (props.variant === 'outlined' ? classes['btn-outlined'] : '')
      }
    >
      {props.children}
    </button>
  );
};

export default Button;
