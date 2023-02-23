import Home from './Home';
import Weather from './Weather';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import OutfitInspo from './OutfitInspo';

function App() {
return (
    <Router>
      <div>
        
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">Fashion for the Weather</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav d-flex">
        <li className="nav-item">
          <Link to="/" className="nav-link active">Home</Link>
          
          
        </li>
        <li className="nav-item">
          <Link to="/weather" className="nav-link">Weather</Link>
          
          
        </li>
        <li className="nav-item">
          <Link to="/outfitinspo" className="nav-link">Outfit Inspo</Link>
          
          
          
        </li>
      </ul>
    </div>
  </div>
</nav>
    


        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/weather">
            <Weather defaultCity="New York"  />
          </Route>
          <Route path="/outfitInspo">
            <OutfitInspo />
          </Route>
        </Switch>
      </div>
    </Router>
    );
}

export default App;



