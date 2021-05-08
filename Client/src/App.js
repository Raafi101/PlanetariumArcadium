import React from 'react';
import './App.css';

import SearchPage from './Pages/SearchPage.js';
import Animation from './Pages/AnimationPage.js';
import HomePage from './Pages/HomePage.js';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/search' component={SearchPage} />
        <Route path='/' component={Animation} />
      </Switch>
    </Router>
  );
}

export default App;
