import axios from 'axios';
import { messageShow } from './message';
import * as actionType from '../constants/action-type';
import * as apiURL from '../constants/api-url';
import * as msgType from '../constants/message-type';

export const loaderGetRequest = () => ({
  type: actionType.LOADER_GET_REQUEST,
});

export const loaderGetSuccess = (data) => ({
  type: actionType.LOADER_GET_SUCCESS,
  payload: data,
});

export const loaderGetFail = () => ({
  type: actionType.LOADER_GET_FAIL,
});

export const selectDataset = (id) => ({
  type: actionType.DATASET_SELECT,
  payload: id,
});

export const datasetDelete = (id) => ({
  type: actionType.DATASET_DELETE,
  payload: id,
});

export const loadData = ({ resolution, start, end }) => (dispatch) => {
  dispatch(loaderGetRequest());
  axios.get(apiURL.FINHUB_GET({ resolution, start, end }))
    .then((res) => {
      res.data['loaded'] = parseInt(new Date().getTime() / 1000);
      dispatch(loaderGetSuccess(res.data));
      dispatch(messageShow({ 
        type: msgType.MESSAGE_SUCCESS, 
        title: 'Успех!', 
        text: 'Данные загруженны!'
      }));
    })
    .catch((error) => {
      dispatch(loaderGetFail());
      console.log(error);
      dispatch(messageShow({ 
        type: msgType.MESSAGE_ERROR, 
        title: 'Ошибка!', 
        text: 'Ошибка загрузки данных!'
      }));
    });
};