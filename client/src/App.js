import React, { Component } from 'react';
import './App.css';

import Navbar from "./components/layout/Navbar";
import Homepage from "./components/layout/Homepage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Homepage />
      </div>
    );
  }
}

export default App;
