import axios from 'axios';
import { jsonRequest } from '../functions';
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

export const accountLogin = ({ email, password }) => (dispatch) => {
  dispatch(accountLoginRequest());
  const config = { headers: { 'Content-Type': 'application/json' } };
  const body = JSON.stringify({ email, password });
  axios.post(apiURL.ACCOUNT_LOGIN, body, config)
    .then((res) => {
      dispatch(accountLoginSuccess(res.data));
    })
    .catch((err) => {
      dispatch(accountLoginFail());
    });
};