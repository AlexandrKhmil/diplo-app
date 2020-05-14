import axios from 'axios';
import { resMessageShow } from '../actions/message';
import * as apiURL from '../constants/api-url';

export const algoGetList = async () => {
  return await axios.get(apiURL.ALGO_LIST)
    .then((res) => res.data)
    .catch((err) => {
      resMessageShow(err.response.data);
      return [];
    });
};

export const algoGetInfo = async ({ link }) => {
  const config = { headers: { link, } };
  return await axios.get(apiURL.ALGO_ONE, config)
    .then((res) => res.data)
    .catch((err) => {
      resMessageShow(err.response.data);
      return {};
    });
};