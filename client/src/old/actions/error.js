import { ERROR_MESSAGE } from './types';

export const errorAlert = ({ msg, errors }) => (dispatch) => {
  if (msg) {
    dispatch({ type: ERROR_MESSAGE, payload: msg });
  }
  if (errors) {
    errors.forEach((validationError) => {
      dispatch({ type: ERROR_MESSAGE, payload: validationError.msg });
    });
  }
};