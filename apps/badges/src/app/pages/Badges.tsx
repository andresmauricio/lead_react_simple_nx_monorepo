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
      <ContainerBadges>
        <Article>
          <ImgProfile
            src="https://images.unsplash.com/photo-1505999407077-7937810b98ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=888&q=80"
            alt="Image profile"
          />
          <div>
            <h3>Paola Vargas</h3>
            <span>@pvargas</span>
            <p>Contador publico</p>
          </div>
        </Article>
        <Article>
          <ImgProfile
            src="https://images.unsplash.com/photo-1505999407077-7937810b98ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=888&q=80"
            alt="Image profile"
          />
          <div>
            <h3>Paola Vargas</h3>
            <span>@pvargas</span>
            <p>Contador publico</p>
          </div>
        </Article>
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

const Article = styled.article`
  width: 550px;
  height: 150px;
  background-color: white;
  display: flex;
  align-items: center;
  margin: 20px auto;
  padding: 0 20px;
`;

const ImgProfile = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;

const ContainerBadges = styled.section`
  width: 100%;
  background-color: #eaeaec;
`;
