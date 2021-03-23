import React from 'react';
import Task from './Task';
import { Fragment } from 'react';

export default function ListTask() {
  return (
    <Fragment>
      {
        [1, 2, 3].map((task) => <Task key={task} />)
      }
    </Fragment>
  );
}
