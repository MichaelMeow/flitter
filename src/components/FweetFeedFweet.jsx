import React from 'react';
import FweetFeedHeaderPic from './FweetFeedHeaderPic';
import PropTypes from 'prop-types';

function FweetFeedFweet(props){
  let tweetButtonStyles = {
    width: '500px',
    border: '1px solid grey',
    padding: '20px 12px',
    display: 'flex',
    justifyContent: 'space-between'
  };

  function updateLikes() {
    props.onUpdateLikes(props.id);
  }

  return (
    <div style={tweetButtonStyles}>
      <style jsx>
        {`
					.left-wrap {
						display: flex;
					}
					`}
      </style>
      <div className="left-wrap">
        <FweetFeedHeaderPic/>
        <div>
          <h4>{props.name}</h4>
          <p>{props.fweet}</p>
        </div>
      </div>
      <div>
        <span>Liked: <span>{props.likes}</span></span>
        <button onClick={updateLikes} type="button"> + </button>
      </div>
    </div>
  );
}

FweetFeedFweet.propTypes = {
  name: PropTypes.string.isRequired,
  fweet: PropTypes.string.isRequired,
  onUpdateLikes: PropTypes.func,
  id: PropTypes.number,
  likes: PropTypes.number
};

export default FweetFeedFweet;
