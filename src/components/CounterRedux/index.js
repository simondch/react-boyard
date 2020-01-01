import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { decrementCounter, incrementCounter } from 'store/counter/actions';

import Button from 'components/Button';

const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CounterValue = styled.span`
  margin: 8px;
`;

const CounterRedux = ({ increment, decrement, counterValue }) => {
  return (
    <CounterContainer>
      <Button
        onClick={decrement}
        data-testid="decrement-button-counter-hooks"
      >
        -
      </Button>
      <CounterValue data-testid="counter-value-counter-hooks">
        {counterValue}
      </CounterValue>
      <Button
        onClick={increment}
        data-testid="increment-button-counter-hooks"
      >
        +
      </Button>
    </CounterContainer>
  );
};

CounterRedux.propTypes = {
  counterValue: PropTypes.number.isRequired,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired
};

const mapStateToProps = ({ counter: { counterValue } }) => ({ counterValue });

const mapDispatchToProps = dispatch => ({
  decrement: () => dispatch(decrementCounter()),
  increment: () => dispatch(incrementCounter())
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux);
