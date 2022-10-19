import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-size: 1rem;
        box-sizing: border-box;
    }

    body {
        max-width: 100vw;
        overflow-x: hidden;
    }

    input,
    button {
        font-size: 1.2rem;
    }
`;