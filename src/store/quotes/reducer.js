import * as types from './types';

const initialState = {
  data: []
};

export const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_QUOTE_SUCCESS:
    case types.GET_QUOTES_SUCCESS:
      return { data: action.payload };
    case types.RESET_QUOTES:
      return initialState;
    default:
      return state;
  }
};

export default quotesReducer;
