import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function FweetFeedHeaderInput(props) {
  let _fweet = null;

  function handleSubmit(event){
    event.preventDefault();
    props.onNewFweet({
      name: 'Fakey',
      fweet: _fweet.value,
      id: v4(),
      likes: 0
    });
    _fweet.value = '';
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="What's Happening?" ref={(input) => {_fweet = input;}}></input>
        <button type="submit">Fweet</button>
      </form>
    </div>
  );
}

FweetFeedHeaderInput.propTypes = {
  onNewFweet: PropTypes.func
};

export default FweetFeedHeaderInput;
