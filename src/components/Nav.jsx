import React from "react";
import NavLinks from "./NavLinks";
import NavSearch from "./NavSearch";
import TweetBtn from "./TweetBtn";

function Nav(props){
  let navStyles = {
    minWidth: "100%",
    borderBottom: "2px solid black",
    height: "72px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  }
  return (
    <div style={navStyles}>
      <NavLinks/>
      <NavSearch/>
      <TweetBtn/>
    </div>
  );
}

export default Nav;
