import React from 'react';
import styled from 'styled-components';
import error from '../../assets/close.png'
import success from '../../assets/tick.png'

export default function Task({ props }) {
  const { name, priority, description, status } = props;
  return (
    <Article>
      <Badget>{priority}</Badget>
      <Hr />
      <Title>{name}</Title>
      <Description>{description}</Description>
      <p>{status}</p>
    </Article>
  );
}

const Article = styled.article`
  width: 200px;
  border: 1px solid #f3f4ed;
  background-color: #fff;
  padding: 20px 8px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 10px;
`;

const Title = styled.header`
  font-weight: bold;
  font-size: 14px;
  margin-top: 15px;
  margin-bottom: 10px;
`;

const Badget = styled.span`
  font-size: 10px;
  font-weight: 300;
  color: #333;
  text-align: right;
  margin-bottom: 15px;
`;

const Hr = styled.div`
  height: 1px;
  width: 100%;
  background-color: #babbb6;
`;

const Description = styled.p`
  text-align: justify;
  font-size: 10px;
`;
