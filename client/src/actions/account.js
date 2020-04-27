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

  ACCOUNT_REGISTER,
  ACCOUNT_LOGOUT,

  MODAL_LOGIN_CLOSE,
  
} from './types';

export const auth = () => (dispatch, getState) => {
  dispatch({ type: ACCOUNT_AUTH_LOADING });
  const token = getState().account.token;
  const { config, body } = jsonRequest({ token });
  axios
    .get('api/account/auth', config)
    .then(res => dispatch({ type: ACCOUNT_AUTH_SUCCESS, payload: res.data }))
    .catch(error => {
      dispatch({ type: ACCOUNT_AUTH_FAIL });
      errorAlert(error)(dispatch);
    })
};

export const login = ({ email, password }) => (dispatch) => {
  const { body, config } = jsonRequest(null, { email, password });
  dispatch({ type: ACCOUNT_LOGIN_LOADING });
  axios
    .post('/api/account/login', body, config)
    .then(res => {
      dispatch({ type: ACCOUNT_LOGIN_SUCCESS, payload: res.data });
      dispatch({ type: MODAL_LOGIN_CLOSE });
    })
    .catch(error => {
      dispatch({ type: ACCOUNT_LOGIN_FAIL });
      errorAlert(error)(dispatch);
    });
}

export const register = () => dispatch => {};

export const logout = () => dispatch => dispatch({
  type: ACCOUNT_LOGOUT
})