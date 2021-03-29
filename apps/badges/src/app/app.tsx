import React from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

export function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
