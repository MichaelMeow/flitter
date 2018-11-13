import React from 'react';
import Nav from './Nav';
import Profile from './Profile';
import ProfileDescription from './ProfileDescription';
import FweetFeed from './FweetFeed';
import SuggestedFriends from './SuggestedFriends';

function App(){
  let appStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '1200px',
    margin: '0 auto'
  };
  return (
    <div>
      <Nav/>
      <div style={appStyles}>
        <div>
          <Profile/>
          <ProfileDescription/>
        </div>
        <FweetFeed/>
        <SuggestedFriends/>
      </div>
    </div>
  );
}

export default App;
