import React, {Component} from 'react';

class VideoContainer extends Component {

  constructor(props) {
  super(props);
   this.state = {
          title: "",
          id: 1,
          playerElement: "playerElement1",
     };

     this.changeVideoLeft = this.changeVideoLeft.bind(this);
     this.changeVideoRight = this.changeVideoRight.bind(this);
 }

changeVideoLeft() {

  let currentVideoId = this.state.id;
  let playerElementString = "playerElement";

  if(currentVideoId === 1){
    this.setState({id: 4});
    this.setState({playerElement: (playerElementString + this.state.id)});
  }else{
    currentVideoId--;
    this.setState({id: currentVideoId});
    this.setState({playerElement: (playerElementString + this.state.id)});
  //  document.querySelector("#"+this.state.playerElement).childNodes[0].children[0].id = this.state.playerElement + "-Video";
//    this.forceUpdate();
    //console.log(document.querySelector("#"+this.state.playerElement).childNodes[0].children[0].id);
  }
}

changeVideoRight() {

  let currentVideoId = this.state.id;
  let playerElementString = "playerElement";

  if(currentVideoId === 4){
    this.setState({id: 1});
    this.setState({playerElement: (playerElementString + this.state.id)});
  }else{
    currentVideoId++;
    this.setState({id: currentVideoId});
    this.setState({playerElement: (playerElementString + this.state.id)});
  }
}

 componentDidMount() {
   console.log("video ",this.props);
 }

  render() {
  return(
    <React.Fragment>
    <div className="VideoContainer">
      <h2>{this.state.title}{this.state.id} </h2>
      <div>
        <h4 onClick={this.changeVideoLeft}>Edellinen video</h4>
        <h4 onClick={this.changeVideoRight}>Seuraava video</h4>
      </div>
      <div className="VideoParent">
        <div id={this.state.playerElement}></div>
      </div>
    </div>
    </React.Fragment>
  );
}

}

export default VideoContainer;
