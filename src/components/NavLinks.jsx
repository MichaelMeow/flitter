import React from 'react';
import NavLink from './NavLink';

function NavLinks() {

  let navLinkWrapper = {
    display: 'flex',
    width: '35%',
    justifyContent: 'space-around'
  };
  return (
    <ul style={navLinkWrapper}>
      <NavLink name="Home"/>
      <NavLink name="Notifications"/>
      <NavLink name="Messages"/>
    </ul>
  );
}

export default NavLinks;
