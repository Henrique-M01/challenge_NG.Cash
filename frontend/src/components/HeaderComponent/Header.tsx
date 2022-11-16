import React from 'react';
import { HeaderContainer } from './HeaderStyles';

function Header() {
  return (
    <HeaderContainer>
      <div>
        <span>Username + Balance</span>
      </div>
      <h1>NG.Cash</h1>
      <div>
        <span>Logout</span>
      </div>
    </HeaderContainer>
  )
}

export default Header;