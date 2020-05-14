import * as actionType from '../constants/action-type';

const initialState = {
  list: {},
  loader: {
    isLoading: false,
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.LOADER_GET_REQUEST: {
      return {
        ...state,
        loader: {
          isLoading: true,
        },
      };
    }
    case actionType.LOADER_GET_SUCCESS: {
      return {
        ...state,
        list: {
          ...state.list,
          [payload.loaded]: { ...payload },
        },
        loader: {
          isLoading: false,
        }
      };
    }
    case actionType.LOADER_GET_FAIL: {
      return {
        ...state,
        loader: {
          isLoading: false,
        }
      };
    }
    default: {
      return state;
    }
  }
};
