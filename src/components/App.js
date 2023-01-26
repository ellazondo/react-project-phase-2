import Home from './Home';
import Weather from './Weather';
import Shopping from './Shopping';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";

function App() {
return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/weather">Weather</Link>
          </li>
          <li>
            <Link to="/shopping">Shopping</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/weather">
            <Weather defaultCity="New York"  />
          </Route>
          <Route path="/shopping">
            <Shopping />
          </Route>
        </Switch>
      </div>
    </Router>
    );
}

export default App;

