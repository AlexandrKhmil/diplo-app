import { 
  MODAL_LOGIN_OPEN,
  MODAL_LOGIN_CLOSE,
} from '../actions/types';

const initialState = {
  login: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case MODAL_LOGIN_OPEN:
    return { ...state, login: true };
  case MODAL_LOGIN_CLOSE:
    return { ...state, login: false };
  default:
    return state;
  }
}
