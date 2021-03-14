import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.component';

const Routes: FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
