import { createGlobalStyle } from "styled-components";

const GlobalColors = createGlobalStyle`
  :root {
    --color-zero: #FFF;
    --color-dark: #000;
    --color-primary: #ece30b;
    --color-secondary: #f7a5a5;
    --color-terciary: #9af792;
    --color-text-default: #707070;
    --color-default-gray: #efeff0;
  }
`;

export default GlobalColors;
