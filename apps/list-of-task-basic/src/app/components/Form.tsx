import React, { useState } from 'react';
import styled from 'styled-components';

export default function Form({ addTask }) {
  const taskInit = {
    title: '',
    description: '',
    priority: '',
  };

  const [task, setTask] = useState(taskInit);

  const handlerForm = (e) => {
    addTask(task);
    e.preventDefault();
  };

  const handlerUpdateField = (e) => {
    const { value, name } = e.target;
    setTask({ ...task, [name]: value });
  };
  return (
    <FormContainer onSubmit={handlerForm}>
      <Title>Add Task</Title>
      <Input
        type="text"
        autoComplete="off"
        placeholder="Title"
        name="title"
        value={task.title}
        onChange={(e) => handlerUpdateField(e)}
        required
      />
      <Input
        type="text"
        autoComplete="off"
        placeholder="Description"
        name="description"
        value={task.description}
        onChange={(e) => handlerUpdateField(e)}
        required
      />
      <Input
        type="text"
        autoComplete="off"
        placeholder="Priority"
        name="priority"
        value={task.priority}
        onChange={(e) => handlerUpdateField(e)}
        required
      />
      <Button type="submit">Send</Button>
    </FormContainer>
  );
}
const FormContainer = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 250px;
  margin-top: 10px;
  background-color: #fff;
  padding: 50px 30px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  border: none;
  border: 1px solid #c2c4b7;
  border-radius: 8px;
  height: 35px;
  padding-left: 5px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #c2c4b7;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  height: 35px;
  cursor: pointer;
  background-color: #424642;
  color: #f3f4ed;
`;

const Title = styled.h2`
  margin-bottom: 15px;
  text-align: center;
`;
