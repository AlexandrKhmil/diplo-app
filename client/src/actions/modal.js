import {
  MODAL_LOGIN_OPEN,
  MODAL_LOGIN_CLOSE,
} from './types';

export const modalLoginOpen = () => dispatch => dispatch({
  type: MODAL_LOGIN_OPEN
});

export const modalLoginClose = () => dispatch => dispatch({
  type: MODAL_LOGIN_CLOSE
});
