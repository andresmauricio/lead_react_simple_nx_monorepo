import React, { useEffect } from 'react';
import Table from './components/Table';
import GlobalStyle from './GlobalStyle';

const API = 'https://openlibrary.org/recentchanges.json?limit=30';

export function App() {
  const getData = async () => {
    const response = await fetch(API);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Table />
    </>
  );
}

export default App;
