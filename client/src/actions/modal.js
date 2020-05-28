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

export const tableOpen = (data) => ({
  type: actionType.MODAL_TABLE_OPEN,
  payload: data,
});

export const tableClose = () => ({
  type: actionType.MODAL_TABLE_CLOSE,
});

export const linearOpen = (data) => ({
  type: actionType.MODAL_LINEAR_OPEN,
  payload: data,
});

export const linearClose = (data) => ({
  type: actionType.MODAL_LINEAR_CLOSE,
});

export const candleOpen = (data) => ({
  type: actionType.MODAL_CANDLE_OPEN,
  payload: data,
});

export const candleClose = () => ({
  type: actionType.MODAL_CANDLE_CLOSE,
});