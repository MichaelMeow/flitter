import React from "react";
import FweetFeedHeaderPic from "./FweetFeedHeaderPic";
import PropTypes from 'prop-types';

function FweetFeedFweet(props){
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
        <h4>{props.name}</h4>
        <p>{props.fweet}</p>
      </div>
    </div>
  );
}

FweetFeedFweet.propTypes = {
  name: PropTypes.string.isRequired,
  fweet: PropTypes.string.isRequired
};

export default FweetFeedFweet;
