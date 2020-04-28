import {
  ALGO_LIST_LOADING,
  ALGO_LIST_SUCCESS,
  ALGO_LIST_FAIL,

  ALGO_EXECUTE_LOADING,
  ALGO_EXECUTE_SUCCESS,
  ALGO_EXECUTE_FAIL,
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
      const list = payload.map((item) => ({
        ...item, 
        isExecuting: false,
        result: {},
      }));
      return {
        ...state,
        list: { ...list },
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

    case ALGO_EXECUTE_LOADING: {
      const listIndex = Object.entries(state.list)
        .find((item) => item[1].id === payload)[0];
      return {
        ...state,
        list: {
          ...state.list,
          [listIndex]: {
            ...state.list[listIndex],
            isExecuting: true,
          }
        }
      }
    }
    case ALGO_EXECUTE_SUCCESS: {
      const listIndex = Object.entries(state.list)
        .find((item) => item[1].id === payload.id)[0];
      return {
        ...state,
        list: {
          ...state.list,
          [listIndex]: {
            ...state.list[listIndex],
            isExecuting: false,
            result: payload.data
          }
        }
      }
    }
    case ALGO_EXECUTE_FAIL: {
      const listIndex = Object.entries(state.list)
        .find((item) => item[1].id === payload)[0];
      return {
        ...state,
        list: {
          ...state.list,
          [listIndex]: {
            ...state.list[listIndex],
            isExecuting: false,
          }
        }
      }
    }

    default: {
      return state;
    }
  }
};
