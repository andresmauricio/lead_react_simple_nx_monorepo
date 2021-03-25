import React, { useEffect, useState } from 'react';
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
      <Table />
    </>
  );
}

export default App;
