import React, { useEffect, useState } from 'react';
import Task from './Task';
import styled from 'styled-components';

export default function ListTask({ listOfTasks }) {
  const [tasks, setTasks] = useState(listOfTasks);
  useEffect(() => {
    setTasks(listOfTasks);
  });
  return (
    <GridTask>
      {tasks.map((task) => (
        <Task props={task} key={task.id} />
      ))}
    </GridTask>
  );
}

const GridTask = styled.div`
  flex: 3;
  flex-wrap: wrap;
  display: flex;
`;
