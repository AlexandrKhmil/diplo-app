import { combineReducers } from 'redux';
import account from './account';
import modal from './modal';
import error from './error';
import algorithm from './algroithm';

export default combineReducers({
  account,
  modal,
  error,
  algorithm,
});