import axios from 'axios';
import { closeLogin, closeReg } from './modal';
import * as actionType from '../constants/action-type';
import * as apiURL from '../constants/api-url';

export const accountAuthRequest = () => ({
  type: actionType.ACCOUNT_AUTH_REQUEST,
});

export const accountAuthSuccess = (data) => ({
  type: actionType.ACCOUNT_AUTH_SUCCESS,
  payload: data,
});

export const accountAuthFail = () => ({
  type: actionType.ACCOUNT_AUTH_FAIL,
});

export const accountLoginRequest = () => ({
  type: actionType.ACCOUNT_LOGIN_REQUEST,
});

export const accountLoginSuccess = (data) => ({
  type: actionType.ACCOUNT_LOGIN_SUCCESS,
  payload: data,
});

export const accountLoginFail = () => ({
  type: actionType.ACCOUNT_LOGIN_FAIL,
});

export const accountRegRequest = () => ({
  type: actionType.ACCOUNT_REG_REQUEST,
});

export const accountRegSuccess = (data) => ({
  type: actionType.ACCOUNT_REG_SUCCESS,
  payload: data,
});

export const accountRegFail = () => ({
  type: actionType.ACCOUNT_REG_FAIL,
});

export const accountLogout = () => ({
  type: actionType.ACCOUNT_LOGOUT,
});

export const accountAuth = ({ token }) => (dispatch) => {
  dispatch(accountAuthRequest());
  const config = { headers: { token, } };
  axios.get(apiURL.ACCOUNT_AUTH, config)
    .then((res) => {
      dispatch(accountAuthSuccess(res.data));
    })
    .catch((err) => {
      dispatch(accountAuthFail());
    });
};

export const accountLogin = ({ email, password }) => (dispatch) => {
  dispatch(accountLoginRequest());
  const body = JSON.stringify({ email, password });
  const config = { headers: { 'Content-Type': 'application/json' } };
  axios.post(apiURL.ACCOUNT_LOGIN, body, config)
    .then((res) => {
      dispatch(accountLoginSuccess(res.data));
      dispatch(closeLogin());
    })
    .catch((err) => {
      dispatch(accountLoginFail());
    });
};

export const accountReg = ({ email, password }) => (dispatch) => {
  dispatch(accountRegRequest());
  const body = JSON.stringify({ email, password });
  const config = { headers: { 'Content-Type': 'application/json' } };
  axios.post(apiURL.ACCOUNT_REG, body, config)
    .then((res) => {
      dispatch(accountRegSuccess(res.data));
      dispatch(closeReg());
    })
    .catch((err) => {
      dispatch(accountRegFail());
    });
};