import React from 'react';
import FweetFeedHeaderPic from './FweetFeedHeaderPic';
import FweetFeedHeaderInput from './FweetFeedHeaderInput';
import PropTypes from 'prop-types';



class FweetFeedHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputVisible: false
    };
    this.showInput = this.showInput.bind(this);
  }

  showInput() {
    this.setState({inputVisible: true});
  }

  render(){
    let fweetHeaderStyles = {
      width: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      border: '1px solid grey',
      padding: '20px 12px'
    };
    if (this.state.inputVisible) {
      return(
        <div style={fweetHeaderStyles}>
          <FweetFeedHeaderPic/>
          <FweetFeedHeaderInput onNewFweet={this.props.onNewFweet}/>
        </div>
      );
    } else {
      return(
        <div style={fweetHeaderStyles}>
          <FweetFeedHeaderPic/>
          <h2 onClick={this.showInput}>Click Here for Input!</h2>
        </div>
      );
    }
  }
}

FweetFeedHeader.propTypes = {
  onNewFweet: PropTypes.func
};

export default FweetFeedHeader;
