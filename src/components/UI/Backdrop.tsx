import React from 'react';

import classes from './Backdrop.module.css';

interface Props {
  onClick: () => void;
}

const Backdrop = (props: Props) => {
  return <div onClick={props.onClick} className={classes.backdrop}></div>;
};

export default Backdrop;
