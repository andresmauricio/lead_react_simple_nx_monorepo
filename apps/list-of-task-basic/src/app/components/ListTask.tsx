import React from 'react';
import Task from './Task';
import { Fragment } from 'react';
import styled from 'styled-components';


export default function ListTask() {
  const tasks = [
    {
      name: 'Install Visual Studio',
      priority: 'Low',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      status: true
    },
    {
      name: 'Create Proyect',
      priority: 'Medium',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      status: false
    },
    {
      name: 'Deploy Proyect',
      priority: 'Higth',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      status: true
    },
    {
      name: 'Deploy Proyect2',
      priority: 'Higth',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      status: true
    },
    {
      name: 'Deploy Proyect3',
      priority: 'Higth',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      status: true
    }
  ]
  return (
    <GridTask>
      {
        tasks.map((task) => <Task props={task} key={task.name} />)
      }
    </GridTask>
  );
};

const GridTask = styled.div`
  flex: 3;
  flex-wrap: wrap;
  display: flex;
`
