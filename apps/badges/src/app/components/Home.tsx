import React from 'react';
import styled from 'styled-components';
import Star from '../../assets/star.png';
import Austronauta from '../../assets/astronauta.png';
import AustronautaWomen from '../../assets/astronauta-women.png';

function Home() {
  return (
    <Main>
      <section>
        <ImgBrand src={AustronautaWomen} alt="" />
        <Title>
          Badge Management <br /> System
        </Title>
        <Button>Start</Button>
      </section>
      <section>
        <ImgAutronaut src={Austronauta} alt="" />
      </section>
    </Main>
  );
}

export default Home;

const Main = styled.main`
  width: 100%;
  height: calc(100vh - 60px);
  background-color: #1b1b25;
  background-image: url('../../assets/stars.svg');
  background-repeat: repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

const ImgAutronaut = styled.img`
  height: 400px;
`;

const ImgBrand = styled.img`
  height: 150px;
`;

const Title = styled.h2`
  color: white;
  font-size: 32px;
  line-height: 30px;
  font-weight: bold;
  margin: 35px 0;
`;

const Button = styled.button`
  width: 130px;
  height: 40px;
  border: none;
  cursor: pointer;
  background-color: #7dcd40;
  color: white;
`;
