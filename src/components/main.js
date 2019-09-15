import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landingpage from './landingpage';
import MultipleVideos from './MultipleVideos';

const Main = () => (

    <Switch>
        <Route path="/landingpage" render={(props) => <Landingpage {...props} video={props.video} />} />
        <Route path="/multiplestreams" component={MultipleVideos} />

    </Switch>
)

export default Main;
