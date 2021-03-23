import React from 'react';
import styled from 'styled-components';

export default function Navbar() {
  return (
    <Header>
      <Title>Task App</Title>
      <Count>5</Count>
    </Header>
  );
}

const Header = styled.header`
  height: 60px;
  width: auto;
  padding: 0 40px;
  background-color: #424642;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  color: #f3f4ed;
  font-size: 24px;
`;

const Count = styled.span`
  color: #f3f4ed;
  font-size: 24px;  
  text-transform: uppercase;
`
