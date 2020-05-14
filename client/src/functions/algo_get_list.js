import axios from 'axios';
import { resMessageShow } from '../actions/message';
import * as apiURL from '../constants/api-url';

const algoGetList = async () => {
  return await axios.get(apiURL.ALGO_LIST)
    .then((res) => res.data)
    .catch((err) => {
      resMessageShow(err.response.data);
      return [];
    });
};

export default algoGetList;