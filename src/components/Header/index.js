import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 36px;
  font-weight: 500;
`;

const Header = props => {
  return <H1 data-testid="header-h1">{props.text}</H1>;
};

Header.propTypes = {
  text: PropTypes.string.isRequired
};

export default Header;
