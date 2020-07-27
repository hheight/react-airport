import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavList = styled.ul`
  display: flex;
  height: 100%;
`;

const NavItem = styled.li`
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 20px;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  padding: 0 35px;

  &.active {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export default function NavBar() {
  return (
    <NavList>
      <NavItem>
        <StyledNavLink exact to="/">
          Home
        </StyledNavLink>
      </NavItem>
      <NavItem>
        <StyledNavLink to="/departures">
          Flights
        </StyledNavLink>
      </NavItem>
    </NavList>
  )
}
