import * as actionType from '../constants/action-type';

const initialState = {
  login: {
    isOpen: false,
  },
  reg: {
    isOpen: false,
  },
  datasetTable: {
    isOpen: false,
    viewed: null,
  },
  datasetCandle: {
    isOpen: false,
    viewed: null,
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // LOGIN
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

    // REGISTRATION
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

    // DATASET TABLE
    case actionType.MODAL_DATASET_TABLE_OPEN: {
      return {
        ...state,
        datasetTable: {
          isOpen: true,
          viewed: payload,
        },
      };
    }
    case actionType.MODAL_DATASET_TABLE_CLOSE: {
      return {
        ...state,
        datasetTable: {
          ...state.dataset,
          isOpen: false,
        },
      };
    }

    // DATASET CANDLE
    case actionType.MODAL_DATASET_CANDLE_OPEN: {
      return {
        ...state,
        datasetCandle: {
          isOpen: true,
          viewed: payload,
        },
      };
    }
    case actionType.MODAL_DATASET_CANDLE_CLOSE: {
      return {
        ...state,
        datasetCandle: {
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
