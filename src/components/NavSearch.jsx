import React from "react";

function NavSearch(){
  let navSearchStyles = {
    height: "30px",
    borderRadius: "5px",
    borderStyle: "solid",
    padding: "0 2px"
  }
  return (
    <div>
      <input type="text" style={navSearchStyles}></input>
    </div>
  );
}

export default NavSearch;
