import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>api party</h1>

        <ul>
          <li>
            <NavLink to="/github">GitHub</NavLink>
          </li>
        </ul>

        <Switch>
          <Route path="/github" render={() => <h1>GitHub!</h1>} />
          <Route render={() => (
            <p>To get started, click on one of the links above</p>
          )} />
        </Switch>
      </div>
    );
  }
}

export default App;
