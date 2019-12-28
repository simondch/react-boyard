import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import colors from 'styles/colors'

const SelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
  font-size: 18px;
  line-height: 18px;
  color: white;
`;

const Language = styled.div`
  margin: 4px;
  font-weight: 400;
  cursor: pointer;
  color: ${({selected}) => selected ? colors.selectedLightTone : colors.lightTone};
  :hover {
    font-weight: 700;
  }
`;

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <SelectorContainer>
      <Language
        onClick={() => i18n.changeLanguage('fr')}
        selected={i18n.language === 'fr'}
      >
        FR
      </Language>
      |
      <Language
        onClick={() => i18n.changeLanguage('en')}
        selected={i18n.language === 'en'}
      >
        EN
      </Language>
    </SelectorContainer>
  );
};

export default LanguageSelector;
