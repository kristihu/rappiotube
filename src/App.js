import React from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

import './App.css';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
      <div className="demo-big-content">
        <Layout>
          <Header title="Title" scroll>

          </Header>
          <Drawer title="Title">
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
      </div>
  );
}

export default App;
