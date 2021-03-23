import React from 'react';
import styled from 'styled-components';

export default function Form() {
  return (
    <FormContainer>
      <Input type="text" autoComplete="off" placeholder="Title" name="title" />
      <Input
        type="text"
        autoComplete="off"
        placeholder="Description"
        name="description"
      />
      <Input
        type="text"
        autoComplete="off"
        placeholder="Priority"
        name="priority"
      />
      <Button type="submit">Send</Button>
    </FormContainer>
  );
}
const FormContainer = styled.form`
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
