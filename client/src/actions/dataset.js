import axios from 'axios';
import shortid from 'shortid';
import { messageShow } from './message';
import { finhubToData } from '../functions/dataset';
import * as actionType from '../constants/action-type';
import * as apiURL from '../constants/api-url';
import * as msgType from '../constants/message-type';
import * as colType from '../constants/dataset-column-type';
import * as sourceType from '../constants/dataset-source-type';

export const finhubGetRequest = () => ({
  type: actionType.LOADER_GET_REQUEST,
});

export const finhubGetSuccess = (data) => ({
  type: actionType.LOADER_GET_SUCCESS,
  payload: data,
});

export const finhubGetFail = () => ({
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

export const datasetUserAdd = (dataset) => ({
  type: actionType.DATASET_USER_ADD,
  payload: dataset,
});

export const loadDataFinhub = ({ symbol, resolution, start, end }) => (dispatch) => {
  dispatch(finhubGetRequest());
  axios.get(apiURL.FINHUB_GET({ symbol, resolution, start, end }))
    .then((res) => {
      const dataset = {
        id: shortid.generate(), 
        meta: {
          loaded: parseInt(new Date().getTime() / 1000),
          headers: ['Date', 'Open', 'Close', 'High', 'Low'],
          type: [colType.TIMESTAMP, colType.NUMERIC, colType.NUMERIC, colType.NUMERIC, colType.NUMERIC],
          source: sourceType.FINHUB,
          key: 0,
          symbol,
          resolution,
        },
        data: finhubToData(res.data),
      };
      dispatch(finhubGetSuccess(dataset));
      dispatch(messageShow({ 
        type: msgType.MESSAGE_SUCCESS, 
        title: 'Успех!', 
        text: 'Данные загруженны!'
      }));
    })
    .catch((error) => {
      dispatch(finhubGetFail());
      console.log(error);
      dispatch(messageShow({ 
        type: msgType.MESSAGE_ERROR, 
        title: 'Ошибка!', 
        text: 'Ошибка загрузки данных!'
      }));
    });
};