import React from 'react';
import styled from 'styled-components';

function Navbar() {
  return <Header>Hello</Header>;
}

export default Navbar;

const Header = styled.header`
  width: 100%;
  height: 60px;
  background-color: #1c3643;
  display: flex;
  align-items: center;
  padding: 2px;
  color: white;
`;
