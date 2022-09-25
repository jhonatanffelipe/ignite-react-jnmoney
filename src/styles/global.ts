import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #202024;
    --red: #F75A68;

    --green-light: #00875F;
    --green: #015F43;
    --black: #121214;

    --text-title: #E1E1E6;
    --text-body: #C4C4CC;

    --shape: #29292E;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1000px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }


  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
