import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
// import HomePage from '../../pages/Home';
// import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import VideoDetail from '../../pages/VideoDetails';
// import Private from '../Private';
// import Fortune from '../Fortune';
import Layout from '../Layout';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Switch>
            {/* <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route> */}
            <Route exact path="/">
              <SecretPage />
            </Route>
            <Route exact path="/detail">
              <VideoDetail />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          {/* <Fortune /> */}
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
