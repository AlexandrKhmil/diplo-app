import { combineReducers } from 'redux';
import account from './account';
import modal from './modal';

export default combineReducers({
  account,
  modal,
});