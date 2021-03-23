import React, { Fragment } from 'react';
import styled from 'styled-components';

import Form from './components/Form';
import ListTask from './components/ListTask';
import Navabar from './components/Navbar';

export default function App() {
  return (
    <Fragment>
      <Navabar />
      <Container>
        <Form />
        <ListTask />
      </Container>
    </Fragment>
  );
}

const Container = styled.div`
  padding: 20px;
  display: flex;
  /* width: 50%; */
  /* margin: 20px auto; */
`;
