import { 
  ACCOUNT_AUTH_LOADING,
  ACCOUNT_AUTH_SUCCESS,
  ACCOUNT_AUTH_FAIL,

  ACCOUNT_LOGIN_LOADING,
  ACCOUNT_LOGIN_SUCCESS,
  ACCOUNT_LOGIN_FAIL,

  ACCOUNT_REGISTER_LOADING,
  ACCOUNT_REGISTER_SUCCESS,
  ACCOUNT_REGISTER_FAIL,
  ACCOUNT_LOGOUT, 
} from '../actions/types';

const initialState = {
  email: null,
  token: localStorage.getItem('token'),
  isLoading: false,
  isAuth: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACCOUNT_AUTH_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ACCOUNT_AUTH_SUCCESS: {
      return {
        ...state,
        ...payload,
        isLoading: false,
        isAuth: true,
      };
    }
    case ACCOUNT_AUTH_FAIL: {
      return {
        ...state,
        ...payload, 
        isLoading: false,
        isAuth: false,
      };
    }

    case ACCOUNT_LOGIN_LOADING: {
      return { 
        ...state, 
        isLoading: true, 
      };
    }
    case ACCOUNT_LOGIN_SUCCESS: {
      localStorage.setItem('token', payload.token);
      return { 
        ...state, 
        ...payload, 
        isLoading: false, 
        isAuth: true,
      };
    }
    case ACCOUNT_LOGIN_FAIL: { 
      return { 
        ...state,
        isLoading: false,
        isAuth: false,
      };
    }

    case ACCOUNT_REGISTER_LOADING: {
      return { 
        ...state,
        isLoading: true,
      };
    }
    case ACCOUNT_REGISTER_SUCCESS: {
      localStorage.setItem('token', payload.token);
      return { 
        ...state,
        ...payload,
        isLoading: false,
        isAuth: false,
      };
    }
    case ACCOUNT_REGISTER_FAIL: {
      return { 
        ...state,
        isLoading: false,
        isAuth: false,
      };
    }

    case ACCOUNT_LOGOUT: {
      localStorage.removeItem('token');
      return {
        email: null,
        token: null,
        isLoading: false,
        isAuth: false,
      };
    }

    default: {
      return state;
    } 
  }
};