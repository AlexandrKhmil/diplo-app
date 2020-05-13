import { 
  MODAL_LOGIN_OPEN,
  MODAL_LOGIN_CLOSE,
  MODAL_REGISTER_OPEN,
  MODAL_REGISTER_CLOSE,
} from '../actions/types';

const initialState = {
  login: false,
  register: false,
};

export default (state = initialState, { type }) => {
  switch (type) {
    case MODAL_LOGIN_OPEN: {
      return { ...state, login: true };
    }
    case MODAL_LOGIN_CLOSE: {
      return { ...state, login: false };
    }
    case MODAL_REGISTER_OPEN: {
      return { ...state, register: true };
    }
    case MODAL_REGISTER_CLOSE: {
      return { ...state, register: false };
    }
    default: {
      return state;
    }
  }
}
