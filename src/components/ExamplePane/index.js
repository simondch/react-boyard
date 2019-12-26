import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PaneContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px dashed black;
  margin: 16px;
  padding: 8px;
  width: 480px;
  align-items: center;
`;

const ExamplePane = ({ title, description, children }) => {
  return (
    <PaneContainer>
      <div>{title}</div>
      <div>{description}</div>
      {children}
    </PaneContainer>
  );
};

ExamplePane.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.element
};

export default ExamplePane;
