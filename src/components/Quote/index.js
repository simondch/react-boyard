import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getQuote } from 'store/quotes/actions';
import Button from 'components/Button';

const Quote = ({ getQuoteAction, quote }) => {
  useEffect(() => {
    getQuoteAction();
  }, []);

  return (
    <>
      <div>{quote.quote}</div>
      <Button onClick={getQuoteAction}>Get New Quote</Button>
    </>
  );
};

Quote.propTypes = {
  getQuoteAction: PropTypes.func,
  quote: PropTypes.object
};

const mapStateToProps = ({ quotes: { data } }) => ({
  quote: (data?.length > 0 && data[0]) || { quote: 'NoQuote' }
});

const mapDispatchToProps = dispatch => ({
  getQuoteAction: () => dispatch(getQuote())
});

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
