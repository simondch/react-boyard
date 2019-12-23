import * as types from './types';

export const getQuoteRequest = () => ({
  type: types.GET_QUOTE_REQUEST
});

export const getQuoteSuccess = quote => ({
  type: types.GET_QUOTE_SUCCESS,
  payload: quote
});

export const getQuoteFailure = error => ({
  type: types.GET_QUOTE_FAILURE,
  payload: error
});

export const getQuotesRequest = quotesNumber => ({
  type: types.GET_QUOTES_REQUEST,
  payload: quotesNumber
});

export const getQuotesSuccess = quotes => ({
  type: types.GET_QUOTES_SUCCESS,
  payload: quotes
});

export const getQuotesFailure = error => ({
  type: types.GET_QUOTES_FAILURE,
  payload: error
});

export const getQuote = () => {
  return (dispatch, _, api) => {
    dispatch(getQuoteRequest());
    return api
      .get()
      .then(({ data }) => dispatch(getQuoteSuccess(data)))
      .catch(err => dispatch(getQuoteFailure(err)));
  };
};
