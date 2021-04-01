import React from 'react';
import Navbar from '../components/Navbar';
import Austronauta from '../../assets/astronauta.png';
import styled from 'styled-components';
import Badge from '../components/Badge';
import { Link } from 'react-router-dom';
import { persons as listOfPersons } from '../db/persons';

function Badges() {
  let persons = listOfPersons;

  const addPerson = (person) => {
    console.log(person);
    persons.push(person);
  };
  return (
    <>
      <Navbar />
      <Section>
        <Img src={Austronauta} alt="" />
      </Section>
      <BackDrop>
        <ContainerBadges>
          <Link to="/add-badge">
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
