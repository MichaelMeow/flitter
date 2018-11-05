import React from "react";

function ProfileLinks() {
  let navLinkStyles = {
    listStyle: "none",

  }
  let navLinkWrapper = {
    display: "flex",
    width: "100%"
  }
  return (
    <ul style={navLinkWrapper}>
      <li style={navLinkStyles}><a href="#">Tweets</a></li>
      <li style={navLinkStyles}><a href="#">Following</a></li>
      <li style={navLinkStyles}><a href="#">Fololowers</a></li>
    </ul>
  )
};

export default ProfileLinks;
