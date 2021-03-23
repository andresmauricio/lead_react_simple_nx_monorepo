import React from 'react';

import styled from 'styled-components';
import Form from './components/Form';
import ListTask from './components/ListTask';

import Navabar from './components/Navbar';

const Main = styled.div``;

export function App() {
  return (
    <Main>
      <Navabar />
      <Form />
      <ListTask />
    </Main>
  );
}

export default App;
