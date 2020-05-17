import * as actionType from '../constants/action-type';

export const resultDelete = (id) => ({
  type: actionType.RESULT_ITEM_DELETE,
  payload: id,
});