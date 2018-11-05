import React from "react";

function NavLinks(props) {
  let navLinkStyles = {
    listStyle: "none",

  }
  let navLinkWrapper = {
    display: "flex",
    width: "35%"
  }
  return (
    <ul style={navLinkWrapper}>
      <li style={navLinkStyles}><a href="#">Home</a></li>
      <li style={navLinkStyles}><a href="#">Notifications</a></li>
      <li style={navLinkStyles}><a href="#">Messages</a></li>
    </ul>
  )
};

export default NavLinks;
