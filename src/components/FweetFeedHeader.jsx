import React from "react";
import FweetFeedHeaderPic from "./FweetFeedHeaderPic";
import FweetFeedHeaderInput from "./FweetFeedHeaderInput";

function FweetFeedHeader(props) {
  let fweetHeaderStyles = {
    width: "500px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    border: "1px solid grey",
    padding: "20px 12px"
  }
  return(
    <div style={fweetHeaderStyles}>
      <FweetFeedHeaderPic/>
      <FweetFeedHeaderInput/>
    </div>
  );
}

export default FweetFeedHeader;
