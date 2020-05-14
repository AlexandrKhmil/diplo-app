import { combineReducers } from 'redux';
import account from './account';
import modal from './modal';
import message from './message';
import dataset from './dataset';

export default combineReducers({
  account,
  modal,
  message,
  dataset,
});