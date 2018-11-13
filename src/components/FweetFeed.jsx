import React from 'react';
import FweetFeedHeader from './FweetFeedHeader';
import FweetFeedFweet from './FweetFeedFweet';

class FweetFeed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterFweets: [
        {
          name: 'Ollie',
          fweet: 'Look what I ate!',
          id: 0,
          likes: 0
        },
        {
          name: 'Desdemona',
          fweet: 'To die, to sleep... etc.',
          id: 1,
          likes: 0
        },
        {
          name: 'Tyrone',
          fweet: 'Don\'t vote!',
          id: 2,
          likes: 0
        },
        {
          name: 'Marcella',
          fweet: 'Fwitter is my favorite network!',
          id: 3,
          likes: 0
        },
        {
          name: 'Frump',
          fweet: 'Chinamexicoracismsexismblah',
          id: 4,
          likes: 0
        }
      ]
    };
    this.handleNewFweet = this.handleNewFweet.bind(this);
    this.updateLikes = this.updateLikes.bind(this);
  }

  handleNewFweet(newFweet) {
    const newFweetList = this.state.masterFweets.slice();
    newFweetList.push(newFweet);
    this.setState({masterFweets: newFweetList});
  }

  updateLikes(likedFweetId) {
    let newFweetList = this.state.masterFweets.map(fweet => {
      let newFweet = fweet;
      if(fweet.id == likedFweetId) {
        newFweet.likes++;
      }
      return newFweet;
    });

    this.setState({masterFweets: newFweetList});
  }
  render(){
    return (
      <div>
        <FweetFeedHeader onNewFweet={this.handleNewFweet}/>
        {this.state.masterFweets.map((fweet, key) =>
          <FweetFeedFweet name={fweet.name}
            fweet={fweet.fweet}
            likes={fweet.likes}
            key={key}
            id={fweet.id}
            onUpdateLikes={this.updateLikes} />
        )}
      </div>
    );
  }
}

export default FweetFeed;
