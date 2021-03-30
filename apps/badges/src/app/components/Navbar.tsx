import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/astronaut.png';

function Navbar() {
  return (
    <Header>
      <Img src={Logo} alt="Logo" />
      Badges Conf
    </Header>
  );
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

const Img = styled.img`
  height: 40px;
  padding-left: 20px;
`;
