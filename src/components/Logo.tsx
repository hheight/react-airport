import React from 'react';
import styled from 'styled-components';
import logoImg from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 180px;
  height: 67px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`

export default function Logo() {
  return (
    <Container>
      <Link to="/">
        <Image src={logoImg} alt="Logo"/>
      </Link>
    </Container>
  )
}
