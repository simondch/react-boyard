import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import colors from 'styles/colors';

const MenuContainer = styled.div`
  display: flex;
`;

const MenuItem = styled(NavLink)`
  margin: 8px;
  font-size: 24px;
  cursor: pointer;
  text-decoration: none;
  color: ${colors.secondaryLight};
  :hover {
    font-weight: 700;
    color: ${colors.secondary};
  }
`;

const Menu = () => {
  return (
    <MenuContainer>
      <MenuItem to="/hooks">Hooks</MenuItem>
      <MenuItem to="/redux">Redux</MenuItem>
      <MenuItem to="/others">Others</MenuItem>
    </MenuContainer>
  );
};

export default Menu;
