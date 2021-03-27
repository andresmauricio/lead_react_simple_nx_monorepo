import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Table from './components/Table';
import GlobalStyle from './GlobalStyle';

const API = 'https://openlibrary.org/recentchanges.json?limit=30';

export function App() {
  const [openLibrary, setOpenLibrary] = useState([]);

  const getData = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setOpenLibrary(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        {openLibrary.length ? <Table books={openLibrary} /> : <h2>Loading...</h2>}
      </Container>
    </>
  );
}

export default App;

export const Container = styled.div`
  padding: 30px;
  margin-top: 20px;
`;
