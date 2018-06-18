import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import './App.css';
import Github from './Github';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>this is api party</h3>
          <h1>api party</h1>
        </div>

        <ul className="navLinks">
          <li>
            <NavLink to="/github">GitHub</NavLink>
          </li>
        </ul>

        <Switch>
          <Route path="/github" component={Github} />
          <Route
            render={() => (
              <p>To get started, click on one of the links above</p>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
