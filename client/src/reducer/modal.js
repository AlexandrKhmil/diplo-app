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
    type: [],
  },
  candle: {
    isOpen: false,
    data: [],
    type: [],
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // LOGIN
    case actionType.MODAL_LOGIN_OPEN: {
      document.body.setAttribute('style', 'overflow: hidden;');
      return {
        ...state,
        login: { 
          isOpen: true,
        },
      };
    }
    case actionType.MODAL_LOGIN_CLOSE: {
      document.body.removeAttribute('style');
      return {
        ...state,
        login: { 
          isOpen: false,
        },
      };
    }

    // REGISTRATION
    case actionType.MODAL_REG_OPEN: {
      document.body.setAttribute('style', 'overflow: hidden;');
      return {
        ...state,
        reg: { 
          isOpen: true,
        },
      };
    }
    case actionType.MODAL_REG_CLOSE: {
      document.body.removeAttribute('style');
      return {
        ...state,
        reg: { 
          isOpen: false,
        },
      };
    }

    // DATASET TABLE
    case actionType.MODAL_TABLE_OPEN: {
      document.body.setAttribute('style', 'overflow: hidden;');
      return {
        ...state,
        table: {
          ...state.table,
          isOpen: true,
          headers: payload.headers,
          data: payload.data,
          type: payload.type,
        },
      };
    }
    case actionType.MODAL_TABLE_CLOSE: {
      document.body.removeAttribute('style');
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
      document.body.setAttribute('style', 'overflow: hidden;');
      return {
        ...state,
        candle: {
          isOpen: true,
          data: payload.data,
          type: payload.type,
        },
      };
    }
    case actionType.MODAL_CANDLE_CLOSE: {
      document.body.removeAttribute('style');
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
