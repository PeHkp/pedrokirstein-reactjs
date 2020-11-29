import {createGlobalStyle} from 'styled-components';

import imageBackground from '../assets/image/wave.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  ::-webkit-scrollbar {
    display: none;
}
  body {
    background: #141B23 url(${imageBackground}) no-repeat bottom;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
  }
  body, input, button {
    font: 16px Roboto, sans-serif;
  }
  #root {
    max-width: 1000px;
    margin: 0 auto;
    padding: 40px 20px;
    @media (max-width: 720px) {
      padding: 20px;
  }
  }

  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`;