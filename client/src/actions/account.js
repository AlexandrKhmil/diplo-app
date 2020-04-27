import axios from 'axios';
import { errorAlert } from './error';
import { jsonRequest } from './functions';
import {
  ACCOUNT_AUTH_LOADING,
  ACCOUNT_AUTH_SUCCESS,
  ACCOUNT_AUTH_FAIL,

  ACCOUNT_LOGIN_LOADING,
  ACCOUNT_LOGIN_SUCCESS,
  ACCOUNT_LOGIN_FAIL,

  ACCOUNT_REGISTER_LOADING,
  ACCOUNT_REGISTER_SUCCESS,
  ACCOUNT_REGISTER_FAIL,

  ACCOUNT_LOGOUT,

  MODAL_LOGIN_CLOSE,
  MODAL_REGISTER_CLOSE
} from './types';

// GET 'api/account/auth'
export const auth = () => (dispatch, getState) => {
  dispatch({ type: ACCOUNT_AUTH_LOADING });
  const token = getState().account.token;
  const { config } = jsonRequest({ token });
  axios
    .get('api/account/auth', config)
    .then(res => dispatch({ type: ACCOUNT_AUTH_SUCCESS, payload: res.data }))
    .catch(error => {
      dispatch({ type: ACCOUNT_AUTH_FAIL });
      errorAlert(error.response.data)(dispatch);
    })
};

// POST 'api/account/login'
export const login = ({ email, password }) => (dispatch) => {
  dispatch({ type: ACCOUNT_LOGIN_LOADING });
  const { body, config } = jsonRequest(null, { email, password });
  axios
    .post('/api/account/login', body, config)
    .then(res => {
      dispatch({ type: ACCOUNT_LOGIN_SUCCESS, payload: res.data });
      dispatch({ type: MODAL_LOGIN_CLOSE });
    })
    .catch(error => {
      dispatch({ type: ACCOUNT_LOGIN_FAIL });
      errorAlert(error.response.data)(dispatch);
    });
};

// POST 'api/account/register'
export const register = ({ email, password }) => (dispatch) => {
  dispatch({ type: ACCOUNT_REGISTER_LOADING });
  const { body, config } = jsonRequest(null, { email, password });
  axios
    .post('/api/account/register', body, config)
    .then((res) => {
      dispatch({ 
        type: ACCOUNT_REGISTER_SUCCESS,
        payload: { ...res.data, email }
      });
      dispatch({ type: MODAL_REGISTER_CLOSE });
    })
    .catch((error) => {
      dispatch({ type: ACCOUNT_REGISTER_FAIL });
      errorAlert(error.response.data)(dispatch);
    });
};

export const logout = () => (dispatch) => dispatch({
  type: ACCOUNT_LOGOUT,
});