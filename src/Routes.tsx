import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.component';
import RecipeViewer from './components/recipe-viewer/RecipeViewer.component';
import Home from './pages/Home';

const Routes: FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/recipe/:id" component={RecipeViewer} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
