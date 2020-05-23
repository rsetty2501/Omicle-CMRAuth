import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import setAuthToken from './utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import {setCurrentUser, logoutUser } from './actions/authActions';

import { Provider } from 'react-redux';
import store from './store';
import './App.css';

import Navbar from "./components/layout/Navbar";
import Homepage from "./components/auth/Homepage";
import Register from "./components/auth/Register";
import LogisticCMR from "./components/cmrform/LogisticCMR";
import PrivateRoute from "./components/private-route/PrivateRoute";

// To keep user loggedin, check for token
if(localStorage.jwtToken){
    const token = localStorage.jwtToken;
    setAuthToken(token); // Set token to authentication header
    const decoded = jwt_decode(token); // Decode token to get user data
    store.dispatch(setCurrentUser(decoded));

    // Check for expired token
    const currTime = Date.now()/1000;  // time in millisec
    if(decoded.exp < currTime){
        store.dispatch(logoutUser());

        // Redirect to login window
        window.location.href = "/login";
    }

}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={Homepage} />
            <Switch>
              <PrivateRoute exact path="/LogisticCMR" component={LogisticCMR} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
