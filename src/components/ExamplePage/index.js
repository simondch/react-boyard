import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import colors from 'styles/colors';

import HeaderBar from 'components/HeaderBar';
import ExamplePane from 'components/ExamplePane';

const CounterHooks = lazy(() => import('components/CounterHooks'));
const CounterRedux = lazy(() => import('components/CounterRedux'));

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
        <Route path="/hooks">
          <ExamplePane title="hooks" description="hooks Example">
            <Suspense fallback={<div>Loading ...</div>}>
              <CounterHooks />
            </Suspense>
          </ExamplePane>
        </Route>
        <Route path="/redux">
          <ExamplePane title="redux" description="redux Example">
            <Suspense fallback={<div>Loading ...</div>}>
              <CounterRedux />
            </Suspense>
          </ExamplePane>
        </Route>
        <Route path="/others">others</Route>
      </Switch>
    </PageContainer>
  );
};

export default ExamplePage;
