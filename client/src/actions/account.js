import axios from 'axios';
import { errorAlert } from './error';
import {
  ACCOUNT_AUTH,
  
  ACCOUNT_LOGIN_LOADING,
  ACCOUNT_LOGIN_SUCCESS,
  ACCOUNT_LOGIN_FAIL,

  ACCOUNT_REGISTER,
  ACCOUNT_LOGOUT,

  MODAL_LOGIN_CLOSE,
} from './types';

const jsonReqest = (data) => {
  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify(data)
  return { config, body }
}

export const auth = () => dispatch => {};

export const login = ({ email, password }) => dispatch => {
  const { body, config } = jsonReqest({ email, password });
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