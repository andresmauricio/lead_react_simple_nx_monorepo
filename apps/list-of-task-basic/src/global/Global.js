import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  body, html {
    font-family: sans-serif;
    max-width: 100%;
  }
`;

export default GlobalStyle;
