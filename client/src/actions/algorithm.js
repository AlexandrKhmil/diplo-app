import axios from 'axios';
import { messageShow, resMessageShow } from './message';
import * as actionType from '../constants/action-type';
import * as apiURL from '../constants/api-url';
import * as msgType from '../constants/message-type';

// export const algoExecRequest = (id) => ({
//   type: actionType.ALGO_EXECUTE_REQUEST,
//   payload: id,
// });

// export const algoExecSuccess = (id, data) => ({
//   type: actionType.ALGO_EXECUTE_SUCCESS,
//   payload: { id, data },
// });

// export const algoExecFail = (id) => ({
//   type: actionType.ALGO_EXECUTE_FAIL,
//   payload: id,
// });

export const resultsetExecAdd = (data) => ({
  type: actionType.RESULT_EXEC_ADD,
  payload: data,
});


// GET 'api/algorithm/{id}/execute'
export const algoExecute = ({ id, data }) => async (dispatch) => {
  // dispatch(algoExecRequest(id));
  const config = { headers: { 'Content-Type': 'application/json' } };
  const body = { id, data };
  return await axios.post(apiURL.ALGO_EXECUTE, body, config)
    .then((res) => {
      // dispatch(algoExecSuccess(id));
      dispatch(messageShow({ 
        type: msgType.MESSAGE_SUCCESS, 
        title: 'Успех!', 
        text: 'Алгоритм выполнен!'
      }));
      dispatch(resultsetExecAdd(res.data));
      return(res.data);
    })
    .catch((err) => {
      console.log(err)
      // dispatch(algoExecFail(id));
      dispatch(resMessageShow(err.response.data));
      return({ error: 'Error' });
    });
};