import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store';
import './App.css';

import Navbar from "./components/layout/Navbar";
import Homepage from "./components/auth/Homepage";
import Register from "./components/auth/Register";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={Homepage} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
