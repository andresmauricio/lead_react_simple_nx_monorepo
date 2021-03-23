import React from 'react';

export default function Task({props}) {
  const { name, priority, description, status } = props;
  console.log(props);
  
  return (
    <article>
      <header>{name}</header>
      <span>{priority}</span>
      <p>{description}</p>
      <p>{status}</p>
    </article>
  );
}
