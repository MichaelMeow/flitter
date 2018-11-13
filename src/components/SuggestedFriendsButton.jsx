import React from 'react';

function SuggestedFriendsButton() {
  let buttonStyles = {
    marginTop: '8px'
  };
  let paddedButtonStyles = {
    padding: '4px 16px',
    backgroundColor: '#2295e1',
    color: 'white',
    borderRadius: '5px'
  };
  return(
    <div style={buttonStyles}>
      <button style={paddedButtonStyles} type="button">Button</button>
    </div>
  );
}

export default SuggestedFriendsButton;
