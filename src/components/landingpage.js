import React, { Component} from 'react';
import VideoContainer from './VideoContainer';

class Landingpage extends Component{
  render(){
    return(
        <div>
        <VideoContainer video={this.props.video}/>
        </div>
    )
  }
}

export default Landingpage;
