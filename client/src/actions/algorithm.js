import axios from 'axios';
import { errorAlert } from './error';
import {
  ALGO_LIST_LOADING,
  ALGO_LIST_SUCCESS,
  ALGO_LIST_FAIL,

  ALGO_EXECUTE_LOADING,
  ALGO_EXECUTE_SUCCESS,
  ALGO_EXECUTE_FAIL,
} from './types';

// GET '/api/algorithm/list'
export const loadAlgoList = () => (dispatch) => {
  dispatch({ type: ALGO_LIST_LOADING });
  axios
    .get('/api/algorithm/list')
    .then((res) => dispatch({ type: ALGO_LIST_SUCCESS, payload: res.data }))
    .catch((error) => {
      dispatch({ type: ALGO_LIST_FAIL });
      errorAlert(error.response.data)(dispatch);
    });
};

// GET 'api/algorithm/{id}/execute'
export const execute = ({ id, link }) => (dispatch) => {
  dispatch({ type: ALGO_EXECUTE_LOADING, payload: id });
  axios
    .get(`/api/algorithm/${link}/execute`)
    .then((res) => dispatch({ 
      type: ALGO_EXECUTE_SUCCESS, 
      payload: { data: res.data, id: id }
    }))
    .catch((error) => {
      dispatch({ type: ALGO_EXECUTE_FAIL, payload: id });
      errorAlert(error.response.data)(dispatch);
    })
};