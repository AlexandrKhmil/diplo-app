import * as actionType from '../constants/action-type';

export const openLogin = () => ({
  type: actionType.MODAL_LOGIN_OPEN,
});

export const closeLogin = () => ({
  type: actionType.MODAL_LOGIN_CLOSE,
});

export const openReg = () => ({
  type: actionType.MODAL_REG_OPEN,
});

export const closeReg = () => ({
  type: actionType.MODAL_REG_CLOSE,
});