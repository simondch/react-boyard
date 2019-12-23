import React from 'react';
import styled from 'styled-components';

import Header from 'components/Header';
import CounterHooks from 'components/CounterHooks';
import CounterRedux from 'components/CounterRedux';
import Quote from 'components/Quote';

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
      <CounterHooks />
      <CounterRedux />
      <Quote />
    </MainContainer>
  );
};
export default DefaultPage;
