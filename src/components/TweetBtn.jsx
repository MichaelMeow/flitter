import React from "react";

function TweetBtn(){
  let tweetButtonStyles = {
    height: "30px",
    borderRadius: "5px",
    borderStyle: "solid",
    padding: "4px",
    backgroundColor: "#2295e1",
    color: "white",
    width: "120px"
  }
  return (
    <div>
      <button type="button" style={tweetButtonStyles}>Fweet</button>
    </div>
  );
}

export default TweetBtn;
