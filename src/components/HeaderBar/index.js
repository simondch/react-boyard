import React from 'react';
import styled from 'styled-components';

import colors from 'styles/colors';

import Menu from 'components/Menu';

const HeaderBarContainer = styled.div`
  width: calc(100% - 32px);
  height: 64px;
  background-color: ${colors.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

const SiteName = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: ${colors.secondary};
`;

const HeaderBar = () => {
  return (
    <HeaderBarContainer>
      <SiteName>Example Page</SiteName>
      <Menu />
    </HeaderBarContainer>
  );
};

export default HeaderBar;
