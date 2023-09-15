import { createGlobalStyle } from "styled-components";

import { theme } from "@/styles/themes";

const GlobalStyle = createGlobalStyle`
  html {
    /* 1rem = 10px */
    font-size: 62.5%;
  }
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    border: 0;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html {
    height: -webkit-fill-available;
  }
  body {
    min-height: -webkit-fill-available;
    color: ${theme.colors.mainBlack};
    line-height: 1;
    background-color: ${theme.colors.white};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-y: overlay;
  }

  body,
  body *,
  body::before,
  body::after,
  body *::before,
  body *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  img {
    vertical-align: middle;
  }
  button,
  fieldset,
  input {
    all: unset;
  }
  input,
  textarea,
  button {
    box-sizing: border-box;
    outline: 0;
  }
  input::-ms-clear,
  input::-ms-reveal {
	  display:none;
    width:0;
    height:0;
  }

  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration {
	  display:none;
  }
  textarea {
    outline: none;
    resize: none;
  }
  button {
    border-color: transparent;
    border: 0;
    padding: 0;
    cursor: pointer;
    user-select: none;
    background-color: transparent;
    text-align: center;
    &:disabled {
      cursor: not-allowed;
    }
  }
  abbr[title] {
    cursor: help;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }
  path {
    pointer-events: none;
  }
  dialog {
    border: 0;
    padding: 0;
    outline: 0;
  }
  li,
  ol,
  ul {
    list-style: none;
  }
  mark {
    background-color: inherit;
  }
  pre {
    color: ${theme.colors.mainBlack};
  }

`;

export default GlobalStyle;
