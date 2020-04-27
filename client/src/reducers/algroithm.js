import {
  ALGO_LIST_LOADING,
  ALGO_LIST_SUCCESS,
  ALGO_LIST_FAIL,
} from '../actions/types';

const initialState = {
  list: {},
  isLoading: false,
  isLoaded: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ALGO_LIST_LOADING: {
      return {
        isLoading: true,
        isLoaded: false,
      };
    }
    case ALGO_LIST_SUCCESS: {
      return {
        ...state,
        list: { ...payload },
        isLoading: false,
        isLoaded: true,
      };
    }
    case ALGO_LIST_FAIL: {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
      };
    }

    default: {
      return state;
    }
  }
};
