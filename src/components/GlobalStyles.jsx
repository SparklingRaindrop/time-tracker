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


    // Typography
    body,
    input,
    button,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Poppins', sans-serif;
    }

    h3,
    h4,
    h5,
    h6 {
        font-weight: 600;
    }
    
    h3 {
        font-size: 1.9rem;
    }

    h4 {
        font-size: 1.5rem;
    }

    h5 {
        font-size: 1.25rem;
    }

    h6 {
        font-size: 1rem;
    }

    body,
    input,
    button {
        font-size: 1.2em;
        font-weight: 400;
    }

    h1,
    h2 {
        font-family: 'Righteous', cursive;
        font-weight: 400;
    }

    h1 {
        font-size: 3rem;
        text-align: center;
    }

    h2 {
        font-size: 2.4rem;
    }

    button,
    label {
        text-transform: capitalize;
    }

`;