import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  body, html {
    font-family: 'Nunito', sans-serif;
    max-width: 100%;
    background-color: #E6E7EB;
  }
`;

export default GlobalStyle;
