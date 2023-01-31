import React from 'react';

import Button from '../UI/Button';

const Header = () => {
  return (
    <header>
      <div></div>
      <div></div>
      <div>
        <Button>Login</Button>
        <Button variant={'outlined'}>Register</Button>
      </div>
    </header>
  );
};

export default Header;