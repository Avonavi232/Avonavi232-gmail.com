import { createGlobalStyle } from 'styled-components';

import './stylesheet.css';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Roboto;
    margin: 0;
    padding: 0;
    color: #1c1e21;
  }
`;
