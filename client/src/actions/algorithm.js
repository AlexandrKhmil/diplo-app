import axios from 'axios';
import { resMessageShow } from './message';
import * as actionType from '../constants/action-type';
import * as apiURL from '../constants/api-url';

export const algoExecRequest = (id) => ({
  type: actionType.ALGO_EXECUTE_REQUEST,
  payload: id,
});

export const algoExecSuccess = (id, data) => ({
  type: actionType.ALGO_EXECUTE_SUCCESS,
  payload: { id, data },
});

export const algoExecFail = (id) => ({
  type: actionType.ALGO_EXECUTE_FAIL,
  payload: id,
});


// GET 'api/algorithm/{id}/execute'
export const algoExecute = ({ id, data }) => (dispatch) => {
  dispatch(algoExecRequest(id));
  const config = { headers: { 'Content-Type': 'application/json' } };
  const body = { id, data };
  axios.post(apiURL.ALGO_EXECUTE, body, config)
    .then((res) => {
      dispatch(algoExecSuccess(id));
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
      dispatch(algoExecFail(id));
      dispatch(resMessageShow(err.response.data));
    });
};