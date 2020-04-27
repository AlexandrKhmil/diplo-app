import { 
  ERROR_MESSAGE,
} from '../actions/types';

const initialState = {
  message: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case ERROR_MESSAGE: 
    return { message: payload };
  default:
    return state;
  }
}
