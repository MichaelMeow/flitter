import React from "react";
import FweetFeedHeader from "./FweetFeedHeader";
import FweetFeedFweet from "./FweetFeedFweet";

function FweetFeed(props) {
  return (
    <div>
      <FweetFeedHeader/>
      <FweetFeedFweet/>
      <FweetFeedFweet/>
      <FweetFeedFweet/>
      <FweetFeedFweet/>
      <FweetFeedFweet/>
    </div>
  );
}

export default FweetFeed;
