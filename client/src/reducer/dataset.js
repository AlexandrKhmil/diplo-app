import * as actionType from '../constants/action-type';

const initialState = () => {
  let list = localStorage.getItem('datasetlist');
  list = list ? JSON.parse(list) : {};
  return {
    list,
    loader: {
      isLoading: false,
    },
    selected: null,
  };
};
  

export default (state = initialState(), { type, payload }) => {
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
      const list = {
        ...state.list,
        [payload.loaded]: { ...payload },
      };
      localStorage.setItem('datasetlist', JSON.stringify(list));
      return {
        ...state,
        list,
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

    case actionType.DATASET_SELECT: {
      return {
        ...state,
        selected: payload, 
      };
    }
    default: {
      return state;
    }
  }
};
