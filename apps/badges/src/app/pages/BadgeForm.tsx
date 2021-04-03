import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Austronauta from '../../assets/astronauta.png';
import { persons as listOfPersons } from '../db/persons';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


function BadgeForm() {
  const person = {
    name: 'Andres Mauricio Acelas',
    profesion: 'Frontend Engineer',
    twitter: '@andresm',
  };
  const [personForm, setPerson] = useState(person);

  const history = useHistory();

  const handlerChange = (e) => {
    const { value, name } = e.target;
    setPerson({ ...personForm, [name]: value });
  };

  const handlerForm = (e) => {
    e.preventDefault();
    const personOfbadge = { ...personForm, image, id: uuidv4()};    
    listOfPersons.unshift(personOfbadge);    
    history.push('/badges');
  };

  const image =
    'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlcnNvbiUyMG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
  return (
    <div>
      <Navbar />
      <Container>
        <Section>
          <ContainerImage>
            <Img src={Austronauta} alt="" />
          </ContainerImage>
          <ContainerName>
            <ImgPerson src={image} alt="" />
            <Name>{personForm.name}</Name>
          </ContainerName>
          <Twitter>{personForm.twitter}</Twitter>
          <Profesion>{personForm.profesion}</Profesion>
        </Section>
        <Form onSubmit={(e) => handlerForm(e)}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Jhon Doe"
              id="fullName"
              name="name"
              value={personForm.name}
              onChange={(e) => handlerChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="twitter">Twitter</label>
            <input
              type="text"
              className="form-control"
              placeholder="@doejoe"
              id="twitter"
              name="twitter"
              value={personForm.twitter}
              onChange={(e) => handlerChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="profesionIn">Profesion</label>
            <input
              type="text"
              className="form-control"
              placeholder="Chif Officer Manager"
              id="profesionIn"
              name="profesion"
              value={personForm.profesion}
              onChange={(e) => handlerChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-success btn-block">
            Send
          </button>
        </Form>
      </Container>
    </div>
  );
}

export default BadgeForm;

const Container = styled.main`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 40px;
  background-color: #eaeaec;
`;

const Section = styled.section`
  background-color: white;
  width: 400px;
  height: 350px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 23%);
`;

const Form = styled.form`
  background-color: white;
  width: 400px;
  height: 350px;
  border-radius: 15px;
  overflow: hidden;
  padding: 30px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 23%);
`;

const ContainerImage = styled.div`
  background-color: #1b1b25;
  padding: 5px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  height: 70px;
`;

const ImgPerson = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 30px;
`;

const ContainerName = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;

const Name = styled.h2`
  flex: 1;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 26px;
  line-height: 20px;
  letter-spacing: -1px;
`;

const Twitter = styled.div`
  background-color: #eaeaec;
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-style: italic;
  font-weight: bold;
`;

const Profesion = styled.h4`
  font-weight: bold;
  text-transform: capitalize;
  letter-spacing: -1px;
  text-align: center;
  opacity: 0.8;
  margin-top: 20px;
`;
