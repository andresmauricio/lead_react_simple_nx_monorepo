import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';

import GlobalStyle from './global/Global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
