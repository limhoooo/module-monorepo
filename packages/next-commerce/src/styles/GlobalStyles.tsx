import styled, { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

export const boxModel = () => {
  return Array(10)
    .fill(1)
    .reduce((cssString, _, index) => {
      return `${cssString}
        .mt-${index} {
          margin-top: ${index * 8}px !important;
        }
        .mb-${index} {
          margin-bottom: ${index * 8}px !important;
        }
        .ml-${index} {
          margin-left: ${index * 8}px !important;
        }
        .mr-${index} {
          margin-right: ${index * 8}px !important;
        }
      `;
    }, '');
};

const GlobalStyles = createGlobalStyle`
    ${reset}
    html,body,#__next{
        width: 100%;
        height: 100%;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
    }
    body{
        line-height: 1;
        font-family: 'Noto Sans KR', sans-serif;
        margin-bottom: 100px;
        padding: 50px 12px 12px 12px;
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
${boxModel()}
`;

export default GlobalStyles;
