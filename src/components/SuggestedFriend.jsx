import React from "react";
import SuggestedFriendsButton from "./SuggestedFriendsButton";
import FweetFeedHeaderPic from "./FweetFeedHeaderPic";

function SuggestedFriend(props) {
  let suggestedFriendStyles = {
    display: "flex",
    marginBottom: "20px"
  }
  return(
    <div style={suggestedFriendStyles}>
        <FweetFeedHeaderPic/>
        <div>
          <p>Donec eu orci et</p>
          <SuggestedFriendsButton/>
      </div>
    </div>
  );
}

export default SuggestedFriend;
