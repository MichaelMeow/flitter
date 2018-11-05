import React from "react";
import PropTypes from "prop-types";

function NavLink(props) {
  let navLinkStyles = {
    listStyle: "none",

  }
  return (
    <li style={navLinkStyles}>
      <a href="#">{props.name}</a>
    </li>
  )
}

NavLink.propTypes = {
  name: PropTypes.string
}

export default NavLink;
