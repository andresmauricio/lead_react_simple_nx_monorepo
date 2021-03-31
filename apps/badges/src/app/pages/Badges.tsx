import React from 'react';
import Navbar from '../components/Navbar';
import Austronauta from '../../assets/astronauta.png';
import styled from 'styled-components';

function Badges() {
  return (
    <>
      <Navbar />
      <Section>
        <Img src={Austronauta} alt="" />
      </Section>
    </>
  );
}

export default Badges;

const Section = styled.section`
  width: 100%;
  height: 250px;
  background-color: #1b1b25;
  background-image: url('../../assets/stars.svg');
  background-repeat: repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  height: 180px;
`;
