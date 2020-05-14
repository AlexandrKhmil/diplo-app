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

export const modalDatasetTableOpen = (id) => ({
  type: actionType.MODAL_DATASET_TABLE_OPEN,
  payload: id,
});

export const modalDatasetTableClose = () => ({
  type: actionType.MODAL_DATASET_TABLE_CLOSE,
});

export const modalDatasetChartCandleOpen = (id) => ({
  type: actionType.MODAL_DATASET_CANDLE_OPEN,
  payload: id,
});

export const modalDatasetChartCandleClose = () => ({
  type: actionType.MODAL_DATASET_CANDLE_CLOSE,
});