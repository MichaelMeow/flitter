import React from "react";
import FweetFeedHeaderPic from "./FweetFeedHeaderPic";

function FweetFeedFweet(){
  let tweetButtonStyles = {
    width: "500px",
    border: "1px solid grey",
    padding: "20px 12px",
    display: "flex"
  }
  return (
    <div style={tweetButtonStyles}>
      <FweetFeedHeaderPic/>
      <div>
        <h4>Lorem Ipsum</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
      </div>
    </div>
  );
}

export default FweetFeedFweet;
