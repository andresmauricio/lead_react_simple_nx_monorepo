import React from 'react';
import Navbar from '../components/Navbar';
import Austronauta from '../../assets/astronauta.png';
import styled from 'styled-components';
import Badge from '../components/Badge';

function Badges() {
  const persons = [
    {
      name: 'Paola Vargas',
      twitter: '@pvargas',
      profesion: 'Chif Officer Manager',
      image:
        'https://images.unsplash.com/photo-1505999407077-7937810b98ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=888&q=80',
    },
    {
      name: 'Jhon Doe',
      twitter: '@doe',
      profesion: 'Center Officer Organizer',
      image:
        'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },
  ];
  return (
    <>
      <Navbar />
      <Section>
        <Img src={Austronauta} alt="" />
      </Section>
      <ContainerBadges>
        <Badge person={persons[0]} />
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
