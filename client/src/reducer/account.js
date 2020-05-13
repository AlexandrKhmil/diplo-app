import * as actionType from '../constants/action-type';

const initialState = {
  token: null,
  email: null,
  isLoading: false,
  isAuth: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.ACCOUNT_AUTH_REQUEST: {
      return {
        ...state,
      };
    }
    case actionType.ACCOUNT_AUTH_SUCCESS: {
      return {
        ...state,
      };
    }
    case actionType.ACCOUNT_AUTH_FAIL: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    } 
  }
};