import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import Counter from '../CounterHooks';

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DefaultPage = () => {
  return (
    <MainContainer>
      <Header text="React Boyard" />
      <Counter />
    </MainContainer>
  );
};
export default DefaultPage;
