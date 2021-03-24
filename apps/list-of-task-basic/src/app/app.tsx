import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { mocks } from './mocks/mock';
import Form from './components/Form';
import ListTask from './components/ListTask';
import Navabar from './components/Navbar';

export default function App() {  
  const [tasks, setTasks] = useState(mocks);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  return (
    <Fragment>
      <Navabar taskCount={tasks.length} />
      <Container>
        <Form addTask={addTask} />
        <ListTask listOfTasks={tasks} />
      </Container>
    </Fragment>
  );
}

const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;
