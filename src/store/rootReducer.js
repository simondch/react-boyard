import { combineReducers } from 'redux';

import counterReducer from 'store/counter/reducer';
import quotesReducer from 'store/quotes/reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  quotes: quotesReducer
});

export default rootReducer;
