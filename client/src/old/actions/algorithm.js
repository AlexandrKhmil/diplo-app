import axios from 'axios';
import { errorAlert } from './error';
import { jsonRequest } from './functions'
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
export const execute = ({ id, link, data, forward }) => (dispatch) => {
  dispatch({ type: ALGO_EXECUTE_LOADING, payload: id });
  const { config } = jsonRequest({ data: JSON.stringify({
    data: data,
    forward: forward}
  )});
  axios
    .get(`/api/algorithm/${link}/execute`, config)
    .then((res) => dispatch({ 
      type: ALGO_EXECUTE_SUCCESS, 
      payload: { data: res.data, id: id }
    }))
    .catch((error) => {
      dispatch({ type: ALGO_EXECUTE_FAIL, payload: id });
      error.response 
        ? errorAlert(error.response.data)(dispatch)
        : errorAlert({ msg: 'Ошибка выполнения!' })(dispatch);
    })
};