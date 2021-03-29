import React from 'react';
import styled from 'styled-components';

function Home() {
  return (
    <Main>
      <h1>Hello</h1>
      <h1>Hello</h1>
    </Main>
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
