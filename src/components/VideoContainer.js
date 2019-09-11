import React, {Component} from 'react';

class VideoContainer extends Component {

  constructor(props) {
  super(props);
   this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      video: {
        width: "600px",
        height: "400px",
      }
     };
 }


 componentDidMount() {
   console.log("video ",this.props);
 }

  render() {
  return(
    <React.Fragment>
    <div className="VideoContainer">
      <h2>VideoContainer</h2>
      <div className="VideoParent">
        {/* <video width={this.props.video.width} height={this.props.video.height} controls /> */}
        <div id="playerElement1" ></div>
      </div>
    </div>
    </React.Fragment>
  );
}

}

export default VideoContainer;
