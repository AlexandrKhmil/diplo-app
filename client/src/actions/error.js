import { ERROR_MESSAGE } from './types';

export const errorAlert = (error) => dispatch => {
  const { msg, errors } = error.response.data; 
  msg && dispatch({ type: ERROR_MESSAGE, payload: msg });
  errors && errors.forEach((validationError) => {
    dispatch({ type: ERROR_MESSAGE, payload: validationError.msg });
  });
};