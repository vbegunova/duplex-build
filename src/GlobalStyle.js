import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';
import NeutralFaceRegular from './fonts/NeutralFaceRegular.woff';
import VisueltProLight from './fonts/VisueltPro-Light.woff';
import VisueltProRegular from './fonts/VisueltPro-Regular.woff';
import VisueltProMedium from './fonts/VisueltPro-Medium.woff';
import VisueltProBold from './fonts/VisueltPro-Bold.woff';
import WonderGardenScriptRegular from './fonts/WonderGardenScript-Regular.woff';
import StolzlBook from './fonts/Stolzl-Book.woff';
import StolzlRegular from './fonts/Stolzl-Regular.woff';
import StolzlMedium from './fonts/Stolzl-Medium.woff';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "NeutralFace";
    src: url(${NeutralFaceRegular}) format("woff");
    font-weight: 400;
  }

  @font-face {
    font-family: "VisueltPro";
    src: url(${VisueltProLight}) format("woff");
    font-weight: 300;
  }
  
  @font-face {
    font-family: "VisueltPro";
    src: url(${VisueltProRegular}) format("woff");
    font-weight: 400;
  }

  @font-face {
    font-family: "VisueltPro";
    src: url(${VisueltProMedium}) format("woff");
    font-weight: 600;
  }

  @font-face {
    font-family: "VisueltPro";
    src: url(${VisueltProBold}) format("woff");
    font-weight: 700;
  }

  @font-face {
    font-family: "WonderGardenScript";
    src: url(${WonderGardenScriptRegular}) format("woff");
    font-weight: 400;
  }

  @font-face {
    font-family: "Shtolzl Book";
    src: url(${StolzlBook}) format("woff");
    font-weight: 400;
  }

  @font-face {
    font-family: "Shtolzl";
    src: url(${StolzlRegular}) format("woff");
    font-weight: 400;
  }

  @font-face {
    font-family: "Shtolzl";
    src: url(${StolzlMedium}) format("woff");
    font-weight: 500;
  }

  &.hidden {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #ffffff;
    font-family: "VisueltPro", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: rgba(0, 0, 0, 0.6);
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  ol, ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  a, button {
    cursor: pointer;
  }

  html {
    scroll-behavior: smooth;
  }
`;
