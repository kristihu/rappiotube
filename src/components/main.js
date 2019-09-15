import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landingpage from './Landingpage';
import MultipleVideos from './MultipleVideos';

const Main = () => (
    <Switch>
        <Route path="/landingpage" component={Landingpage} />
        <Route path="/multiplestreams" component={MultipleVideos} />
    </Switch>
)

export default Main;
