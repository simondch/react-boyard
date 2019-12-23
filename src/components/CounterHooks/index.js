import React, { useState } from 'react';
import styled from 'styled-components';

import Button from 'components/Button';

const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CounterValue = styled.span`
  margin: 8px;
`;

const CounterHooks = () => {
  const [counterValue, setCounterValue] = useState(1);

  return (
    <CounterContainer>
      <Button
        onClick={() => setCounterValue(counterValue - 1)}
        data-testid="decrement-button-counter-hooks"
      >
        -
      </Button>
      <CounterValue data-testid="counter-value-counter-hooks">
        {counterValue}
      </CounterValue>
      <Button
        onClick={() => setCounterValue(counterValue + 1)}
        data-testid="increment-button-counter-hooks"
      >
        +
      </Button>
    </CounterContainer>
  );
};

export default CounterHooks;
