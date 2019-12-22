import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 48px;
  height: 32px;
`;

const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CounterValue = styled.span`
  margin: 8px;
`;

const Counter = () => {
  const [counterValue, setCounterValue] = useState(1);

  return (
    <CounterContainer>
      <Button
        onClick={() => setCounterValue(counterValue - 1)}
        data-testid="decrement-button"
      >
        -
      </Button>
      <CounterValue data-testid="counter-value">{counterValue}</CounterValue>
      <Button
        onClick={() => setCounterValue(counterValue + 1)}
        data-testid="increment-button"
      >
        +
      </Button>
    </CounterContainer>
  );
};

export default Counter;
