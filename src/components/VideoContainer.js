import React, {Component} from 'react';

class VideoContainer extends Component {

render() {
  return(
    <React.Fragment>
    <div className="VideoContainer">
      <h2>VideoContainer</h2>
      <div className="VideoParent">
        <video width={this.props.video.width} height={this.props.video.height} controls />
      </div>
    </div>
    </React.Fragment>
  );
}

}

export default VideoContainer;
