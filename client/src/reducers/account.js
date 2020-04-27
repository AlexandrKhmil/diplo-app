import { 
  ACCOUNT_AUTH,

  ACCOUNT_LOGIN_LOADING,
  ACCOUNT_LOGIN_SUCCESS,
  ACCOUNT_LOGIN_FAIL,

  ACCOUNT_REGISTER,
  ACCOUNT_LOGOUT, 
} from '../actions/types';

const initialState = {
  email: null,
  token: null,
  isLoading: false,
  isAuth: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACCOUNT_AUTH:
      return state;

    case ACCOUNT_LOGIN_LOADING:
      return { 
        ...state, 
        isLoading: true, 
      };
    case ACCOUNT_LOGIN_SUCCESS: 
      return { 
        ...state, 
        ...payload, 
        isLoading: false, 
        isAuth: true,
      };
    case ACCOUNT_LOGIN_FAIL: 
      return { 
        ...state, 
        ...payload, 
        isLoading: false,
        isAuth: false,
      };

    case ACCOUNT_REGISTER:
      return state;

    case ACCOUNT_LOGOUT:
      return initialState;

    default:
      return state;
  }
};