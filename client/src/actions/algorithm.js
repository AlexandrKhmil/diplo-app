import axios from 'axios';
import { errorAlert } from './error';
import {
  ALGO_LIST_LOADING,
  ALGO_LIST_SUCCESS,
  ALGO_LIST_FAIL,
} from './types';

export const loadAlgoList = () => (dispatch) => {
  dispatch({ type: ALGO_LIST_LOADING });
  axios
    .get('api/algorithm/list')
    .then(res => dispatch({ type: ALGO_LIST_SUCCESS, payload: res.data }))
    .catch(error => {
      dispatch({ type: ALGO_LIST_FAIL });
      errorAlert(error.response.data)(dispatch);
    });
};