import * as types from './types';

const initialState = {
  counterValue: 1
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNTER:
      return { ...state, counterValue: state.counterValue + 1 };
    case types.DECREMENT_COUNTER:
      return { ...state, counterValue: state.counterValue - 1 };
    case types.RESET_COUNTER:
      return initialState;
    default:
      return state;
  }
};

export default counterReducer;
