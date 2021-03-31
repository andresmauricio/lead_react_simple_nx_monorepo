import React from 'react';
import Navbar from '../components/Navbar';
import Austronauta from '../../assets/astronauta.png';
import styled from 'styled-components';
import Badge from '../components/Badge';

function Badges() {
  return (
    <>
      <Navbar />
      <Section>
        <Img src={Austronauta} alt="" />
      </Section>
      <ContainerBadges>
        <Badge />
        <Badge />
        <Badge />
      </ContainerBadges>
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

const ContainerBadges = styled.section`
  width: 100%;
  background-color: #eaeaec;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
