import * as actionType from '../constants/action-type';

const initialState = {
  login: {
    isOpen: false,
  },
  reg: {
    isOpen: false,
  },
  table: {
    isOpen: false,
    headers: [],
    data: [],
  },
  candle: {
    isOpen: false,
    data: [],
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
    case actionType.MODAL_TABLE_OPEN: {
      return {
        ...state,
        table: {
          ...state.table,
          isOpen: true,
          headers: payload.headers,
          data: payload.data,
        },
      };
    }
    case actionType.MODAL_TABLE_CLOSE: {
      return {
        ...state,
        table: {
          ...state.table,
          isOpen: false,
        },
      };
    }

    // DATASET CANDLE
    case actionType.MODAL_CANDLE_OPEN: {
      return {
        ...state,
        candle: {
          isOpen: true,
          data: payload,
        },
      };
    }
    case actionType.MODAL_CANDLE_CLOSE: {
      return {
        ...state,
        candle: {
          ...state.candle,
          isOpen: false,
        },
      };
    }
    default: {
      return state;
    }
  }
};
