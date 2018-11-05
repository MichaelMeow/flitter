import React from "react";
import FweetFeedHeader from "./FweetFeedHeader";
import FweetFeedFweet from "./FweetFeedFweet";

const masterFweets = [
  {
    name: "Ollie",
    fweet: "Look what I ate!"
  },
  {
    name: "Desdemona",
    fweet: "To die, to sleep... etc."
  },
  {
    name: "Tyrone",
    fweet: "Don't vote!"
  },
  {
    name: "Marcella",
    fweet: "Fwitter is my favorite network!"
  },
  {
    name: "Frump",
    fweet: "Chinamexicoracismsexismblah"
  }
]

function FweetFeed(props) {
  return (
    <div>
      <FweetFeedHeader/>
      {masterFweets.map((fweet, index) =>
      <FweetFeedFweet name={fweet.name}
      fweet={fweet.fweet}
      key={index} />
  )}
    </div>
  );
}

export default FweetFeed;
