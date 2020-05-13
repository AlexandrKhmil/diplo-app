import axios from 'axios';
import { errorAlert } from './error';
import {
  DATA_GET_LOADING,
  DATA_GET_FAIL,
  DATA_GET_SUCCESS,
} from './types';

export const loadData = ({ resolution, start, end }) => (dispatch) => {
  dispatch({ type: DATA_GET_LOADING });
  axios
    .get(`https://finnhub.io/api/v1/stock/candle?symbol=AAPL&resolution=${resolution}&from=${start}&to=${end}&token=bql6il7rh5ra8kpl6eg0`)
    .then((data) => {
      dispatch({ type: DATA_GET_SUCCESS, payload: data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: DATA_GET_FAIL });
      errorAlert({ msg: 'Ошибка подгрузки данных!' })(dispatch);
    });
};