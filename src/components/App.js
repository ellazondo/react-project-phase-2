
import Header from './Header';
import Weather from "./Weather";
import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      
  <Header />
  <Weather defaultCity="New York" />
    
    </div>
  );
}

export default App;

