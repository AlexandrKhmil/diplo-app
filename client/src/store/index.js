import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../reducer';

const middleware = [thunk];

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);