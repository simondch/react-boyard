import React from 'react';
import styled from 'styled-components';

import colors from 'styles/colors';

import Menu from 'components/Menu';
import LanguageSelector from 'components/LanguageSelector';

import { useTranslation } from 'react-i18next';

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

const PageName = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: ${colors.secondary};
`;

const MenusContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const HeaderBar = () => {
  const { t } = useTranslation('example');
  return (
    <HeaderBarContainer>
      <PageName>{t('example')}</PageName>
      <MenusContainer>
        <Menu />
        <LanguageSelector/>
      </MenusContainer>
    </HeaderBarContainer>
  );
};

export default HeaderBar;
