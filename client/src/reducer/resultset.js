import * as actionType from '../constants/action-type';

const initialState = () => {
  let list = localStorage.getItem('resultlist');
  list = list ? JSON.parse(list) : {};
  return {
    list,
  };
};
  

export default (state = initialState(), { type, payload }) => {
  switch (type) {
    case actionType.RESULT_EXEC_ADD: {
      const list = {
        ...state.list,
        [payload.id]: { ...payload },
      };
      localStorage.setItem('resultlist', JSON.stringify(list));
      return {
        list,
      };
    }
    case actionType.RESULT_ITEM_DELETE: {
      const list = Object.fromEntries(Object.entries(state.list)
        .filter((resultset) => resultset[0] !== String(payload)));
      localStorage.setItem('resultlist', JSON.stringify(list));
      return {
        ...state,
        list,
      }
    }
    default: {
      return state;
    }
  }
};
