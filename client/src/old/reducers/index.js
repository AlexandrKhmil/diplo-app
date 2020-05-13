import { combineReducers } from 'redux';
import account from './account';
import modal from './modal';
import error from './error';
import algorithm from './algroithm';
import data from './data';

export default combineReducers({
  account,
  modal,
  error,
  algorithm,
  data,
});