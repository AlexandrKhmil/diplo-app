import {
  MODAL_LOGIN_OPEN,
  MODAL_LOGIN_CLOSE,
  MODAL_REGISTER_OPEN,
  MODAL_REGISTER_CLOSE,
} from './types';

export const modalLoginOpen = () => dispatch => dispatch({
  type: MODAL_LOGIN_OPEN
});

export const modalLoginClose = () => dispatch => dispatch({
  type: MODAL_LOGIN_CLOSE
});

export const modalRegisterOpen = () => dispatch => dispatch({
  type: MODAL_REGISTER_OPEN
});

export const modalRegisterClose = () => dispatch => dispatch({
  type: MODAL_REGISTER_CLOSE
})