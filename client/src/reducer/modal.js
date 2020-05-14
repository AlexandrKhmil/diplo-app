import * as actionType from '../constants/action-type';

const initialState = {
  login: {
    isOpen: false,
  },
  reg: {
    isOpen: false,
  },
  dataset: {
    isOpen: false,
    viewed: null,
  }
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
    case actionType.MODAL_DATASET_OPEN: {
      return {
        ...state,
        dataset: {
          isOpen: true,
          viewed: payload,
        },
      };
    }
    case actionType.MODAL_DATASET_CLOSE: {
      return {
        ...state,
        dataset: {
          ...state.dataset,
          isOpen: false,
        },
      };
    }
    default: {
      return state;
    }
  }
};
