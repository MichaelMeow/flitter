import React from 'react';

function ProfileDescription() {
  let descStyles = {
    width: '300px',
    padding: '2%',
    border: '1px grey solid',
    borderRadius: '5px'
  };
  return (
    <div style={descStyles}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  );
}

export default ProfileDescription;
