import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from 'styles/colors';

import Menu from 'components/Menu';
import LanguageSelector from 'components/LanguageSelector';

import { useTranslation } from 'react-i18next';

import getMediaQueries from 'styles/mediaQueries';

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
`;

const HeaderBar = ({ title }) => {
  const { t } = useTranslation();
  const { Desktop } = getMediaQueries();
  return (
    <HeaderBarContainer>
      <PageName>{t(title)}</PageName>
      <MenusContainer>
        <Menu />
        <Desktop>
          <LanguageSelector />
        </Desktop>
      </MenusContainer>
    </HeaderBarContainer>
  );
};

HeaderBar.propTypes = {
  title: PropTypes.string.isRequired
};

export default HeaderBar;
