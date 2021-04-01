import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Austronauta from '../../assets/astronauta.png';

function BadgeForm() {
  const person = {
    name: 'Andres Mauricio Acelas',
    profesion: 'Frontend Enginner',
    twitter: '@andresm',
  };
  const [personForm, setPerson] = useState(person);
  const handlerChange = (e) => {
    const { value, name } = e.target;
    setPerson({ ...personForm, [name]: value });
  };
  return (
    <div>
      <Navbar />
      <Container>
        <Section>
          <ContainerImage>
            <Img src={Austronauta} alt="" />
          </ContainerImage>
          <p>Name: {personForm.name}</p>
          <p>Profesion: {personForm.profesion}</p>
          <p>Twitter: {personForm.twitter}</p>
        </Section>
        <form>
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
        </form>
      </Container>
    </div>
  );
}

export default BadgeForm;

const Container = styled.main`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
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
