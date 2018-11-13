import React from 'react';
import SuggestedFriend from './SuggestedFriend';

function SuggestedFriends() {
  let suggestedFriendsStyles = {
    border: '1px solid gray',
    width: '250px',
    padding: '8px 24px',
    height: '100%'
  };
  let h4Styles = {
    marginTop: '20px',
    marginBottom: '20px'
  };
  return(
    <div style={suggestedFriendsStyles}>
      <h4 style={h4Styles}>Lorem ipsum</h4>
      <div>
        <SuggestedFriend/>
        <SuggestedFriend/>
        <SuggestedFriend/>
      </div>
    </div>
  );
}

export default SuggestedFriends;
