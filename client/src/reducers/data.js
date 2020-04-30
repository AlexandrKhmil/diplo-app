import { 
  DATA_GET_LOADING,
  DATA_GET_SUCCESS,
  DATA_GET_FAIL,
} from '../actions/types';

const initialState = {
  list: {},
  isLoading: false,
  data: {}, // {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case DATA_GET_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case DATA_GET_SUCCESS: {
      let data = {};
      for (let i = 0; i < payload.data.t.length; i++) {
        data = {...data, [payload.data.t[i]]: { 
          c: payload.data.c[i],
          h: payload.data.h[i],
          l: payload.data.l[i],
          o: payload.data.o[i],
          v: payload.data.v[i],
        } };
      }
      return {
        ...state,
        isLoading: false,
        data,
        result: { ...payload },
      };
    }
    case DATA_GET_FAIL: {
      return {
        ...state,
        isLoading: false,
      }
    }
    default: {
      return state;
    }
  }
};
