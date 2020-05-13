import * as actionType from '../constants/action-type';

const initialState = {
  login: {
    isOpen: false,
  },
  reg: {
    isOpen: false,
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.MODAL_LOGIN_OPEN: {
      return {
        ...state,
        login: { 
          isOpen: true,
        },
      };
    }
    case actionType.MODAL_LOGIN_CLOSE: {
      return {
        ...state,
        login: { 
          isOpen: false,
        },
      };
    }
    case actionType.MODAL_REG_OPEN: {
      return {
        ...state,
        reg: { 
          isOpen: true,
        },
      };
    }
    case actionType.MODAL_REG_CLOSE: {
      return {
        ...state,
        reg: { 
          isOpen: false,
        },
      };
    }
    default: {
      return state;
    }
  }
};
