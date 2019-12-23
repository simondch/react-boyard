import React from 'react';
import styled from 'styled-components';

import colors from 'styles/colors';

import HeaderBar from 'components/HeaderBar';
import { Switch, Route } from 'react-router-dom';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.primaryLight};
  color: ${colors.secondaryLight};
`;

const ExamplePage = () => {
  return (
    <PageContainer>
      <HeaderBar />
      <Switch>
        <Route path="/hooks">hooks</Route>
        <Route path="/redux">redux</Route>
        <Route path="/others">others</Route>
      </Switch>
    </PageContainer>
  );
};

export default ExamplePage;
