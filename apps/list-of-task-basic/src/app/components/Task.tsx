import React from 'react';
import styled from 'styled-components';

export default function Task({ props }) {
  const { name, priority, description, status } = props;
  return (
    <Article>
      <Title>{name}</Title>
      <Badget>{priority}</Badget>
      <Description>{description}</Description>
      <p>{status}</p>
    </Article>
  );
}

const Article = styled.article`
  width: 200px;
  height: auto;
  padding: 20px 8px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 10px;
  background-color: #f3f4ed;
  box-shadow: 7px 7px 3px 0px rgba(0, 0, 0, 0.5);
`;

const Title = styled.header`
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
`;

const Badget = styled.span`
  background-color: #c06014;
  margin: 5px auto;
  width: 30%;
  font-size: 11px;
  color: #f3f4ed;
  border-radius: 7px;
  padding: 2px;
`;

const Description = styled.p`
  text-align: justify;
  font-size: 10px;
`;
