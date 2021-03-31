import React from 'react';
import Navbar from '../components/Navbar';
import Austronauta from '../../assets/astronauta.png';
import styled from 'styled-components';
import Badge from '../components/Badge';
import { Link } from 'react-router-dom';


function Badges() {
  const persons = [
    {
      id: 1,
      name: 'Paola Vargas',
      twitter: '@pvargas',
      profesion: 'Chif Officer Manager',
      image:
        'https://images.unsplash.com/photo-1505999407077-7937810b98ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=888&q=80',
    },
    {
      id: 2,
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
      <BackDrop>
        <ContainerBadges>
          <Link to='/add-badge'>
            <Button>New Badge</Button>
          </Link>
          {persons.map((person) => (
            <Badge person={person} key={person.id} />
          ))}
        </ContainerBadges>
      </BackDrop>
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

const BackDrop = styled.main`
  width: 100%auto;
  background-color: #eaeaec;
`;

const ContainerBadges = styled.section`
  width: 60%;
  margin: 0 auto;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  width: 130px;
  height: 40px;
  border: none;
  cursor: pointer;
  background-color: #7dcd40;
  color: white;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-left: auto;
`;
