import React from 'react';
import Logo from './Logo';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import NavBar from './NavBar';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  height: var(--header-height);
  width: 100%;
  background-color: var(--primary-color);
  box-shadow: 0 5px 10px rgba(37,40,41,.3);
`;

const useStyles = makeStyles(theme => ({
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }
}));


export default function Header() {
  const classes = useStyles();
  
  return (
    <StyledHeader>
      <Container maxWidth="md" className={classes.container}>
        <Logo />
        <NavBar />
      </Container>
    </StyledHeader>
  )
}
