 import axios from 'axios';
 import setAuthToken from '../utils/setAuthToken';
 import jwt_decode from 'jwt-decode';

 import {
    GET_ERRORS,
    USER_LOADING,
    SET_CURRENT_USER
 } from './types'

 // Register User
 export const registerUser = (userData, history) => dispatch => {
    axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login")) // re-direct to login on successful register
    .catch(err => 
        dispatch({
            type: GET_ERRORS,
            payload : err.response.data
        })
    );
 };

 // Login - Get user token
 export const loginUser = (userData) => dispatch => {
     axios
     .post("/api/users/login", userData)
     .then(res => {
        const { token } = res.data;
        localStorage.setItem("jwtToken", token); // Store token locally
        setAuthToken(token); // Set token to authentication header
        const decoded = jwt_decode(token); // Decode token to get user data
        dispatch(setCurrentUser(decoded));
     })
     .catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload : err.response.data
        })
    );
 };

 // Set logged in user
 export const setCurrentUser = (decoded) => {
     return {
         type: SET_CURRENT_USER,
         payload: decoded
     };
 };

  // Set user loading
  export const setUserLoading = () => {
    return {
        type: USER_LOADING
    };
};

// Log user out
// Remove token from localstorage, remove authentication header, set authentication to false on logout
export const logoutUser = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setCurrentUser({}));
 };