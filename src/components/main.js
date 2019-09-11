import React from 'react';
import {Switch, Route} from 'react-router-dom';
import landingpage from './landingpage';

const Main = () => (
  <Switch>
    <Route path="/landingpage" component={landingpage} />

  </Switch>
)

export default Main;
