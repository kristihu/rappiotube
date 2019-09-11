import React, {Component} from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import './App.css';
import Main from './components/main';
import {Link} from 'react-router-dom';
import Nav from './components/Nav';
import TimeTable from './components/TimeTable';
import VideoContainer from './components/VideoContainer';

class App extends Component {
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
   this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
   this.setVideoSceenSize = this.setVideoSceenSize.bind(this);
 }

 componentDidMount() {
   this.updateWindowDimensions();
   window.addEventListener('resize', this.updateWindowDimensions);
 }

 componentWillUnmount() {
   window.removeEventListener('resize', this.updateWindowDimensions);
 }

 updateWindowDimensions() {
   this.setState({ width: window.innerWidth, height: window.innerHeight });
   this.setVideoSceenSize();
 }

 setVideoSceenSize() {
   //muuta videon kokoa kun näytön leveys menee alle 800
   if(this.state.width < 850){
     if(this.state.width < 400){ //mobiilinäkymä
       console.log(this.state.width);
       this.state.video.width = this.state.width;
     }else{
     this.state.video.width = "400px";
     this.state.video.height = "300px";
    }
   }else{
     this.state.video.width = "600px";
     this.state.video.height = "400px";
   }
   this.forceUpdate(); //Jotta state.video päivyttyy
 }

render(){
  return (
      <div className="demo-big-content">
        <Layout>
          <Header title="RappioTube" scroll>

          </Header>
          <Drawer title="Valikko" id="asd">
            <Navigation>
              <Link to="/landingpage">KOTI</Link>
              <Link to="/">Link</Link>
              <Link to="/">Link</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main/>
          </Content>
        </Layout>
        <Nav />
            <TimeTable />
            <VideoContainer
              video={this.state.video}
            />
      </div>
  );
}
}

export default App;
