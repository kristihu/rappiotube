import React from 'react';
import {Switch, Route} from 'react-router-dom';
import landingpage from './landingpage';
import VideoContainer from './VideoContainer';

const Main = () => (
  <Switch>
    <Route path="/landingpage" component={landingpage} />
    <VideoContainer />
  </Switch>
)

export default Main;
