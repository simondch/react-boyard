import React from 'react';
import styled from 'styled-components';
import HeaderBar from 'components/HeaderBar';

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  color: black;
  margin: 12px;
`;

const HomePage = () => {
  return (
    <PageContainer>
      <HeaderBar title="title" />
      Testttttt
    </PageContainer>
  );
};

export default HomePage;
