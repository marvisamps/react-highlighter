import { createGlobalStyle } from 'styled-components';

const GlobalColors = createGlobalStyle`
  :root {
    --color-zero: #FFF;
    --color-dark: #000;
    --color-primary: yellow;
    --color-secondary: red;
    --color-terciary: green;
    --color-text-default: gray;
  }
`;

export default GlobalColors;