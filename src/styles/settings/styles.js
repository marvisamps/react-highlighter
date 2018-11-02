import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  .yellow {
    background: var(--color-primary);
  }

  .yellowSelection::selection {
    background: var(--color-primary); /* WebKit/Blink Browsers */
  }

  .yellowSelection::-moz-selection {
    background: var(--color-primary); /* Gecko Browsers */
  }

  .red {
    background: var(--color-secondary);
  }

  .redSelection::selection {
    background: var(--color-secondary); /* WebKit/Blink Browsers */
  }

  .redSelection::-moz-selection {
    background: var(--color-secondary); /* Gecko Browsers */
  }

  .green {
    background: var(--color-terciary);
  }

  .greenSelection::selection {
    background: var(--color-terciary); /* WebKit/Blink Browsers */
  }

  .greenSelection::-moz-selection {
    background: var(--color-terciary); /* Gecko Browsers */
  }
`;

export default GlobalStyles;
