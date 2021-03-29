import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/astronaut.png'

function Home() {
  return (
    <Main>
      <section>
        <img src={Logo} alt=""/>
        <p>Badge Management System</p>
        <button>Start</button>
      </section>
      <section>
        <img src={Logo} alt=""/>
        <p>Badge Management System</p>
        <button>Start</button>
      </section>    </Main>
  );
}

export default Home;

const Main = styled.main`
  width: 100%;
  height: calc(100vh - 60px);
  background-color: #1b1b25;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
