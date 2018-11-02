import { createGlobalStyle } from "styled-components";

const GlobalColors = createGlobalStyle`
  :root {
    --color-zero: #FFF;
    --color-dark: #000;
    --color-primary: #ede645;
    --color-secondary: #f25252;
    --color-terciary: #64fd57;
    --color-text-default: #707070;
    --color-default-gray: #efeff0;
  }
`;

export default GlobalColors;
