import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// components
import Sidebar from './Sidebar';
import Main from './Main';
import theme from './common/theme';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    background: #fff;
    padding: 0;
    margin: 0;
    font: 400 16px/1.8 'Inter', sans-serif;
    color: #444;
  }

  /* Typography */
  h1 {
    font-size: 2.4rem;
    margin: 1rem 0;
    font-weight: 400;
    line-height: 1;
  }

  h1, h2 {
    color: #222;
  }

  h2 {
    font-size: 1.6rem;
    line-height: 1;
    font-weight: 600;
    margin: 2em 0;
    position: relative;

    :first-child {
      margin-top: 0;
    }

    span {
      position: relative;
      background: #fff;
      padding-right: 1ch;
    }
  }

  h3 {
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: #e14;
    border-bottom: 1px solid #eee;
    padding-bottom: .5ch;
    transition: 150ms ease;
    position: relative;
    top: 0;

    :hover {
      padding-bottom: calc(.5ch + 3px);
      top: -3px;
    }

    :active {
      color: #128;
    }
  }

  @media screen and (min-width: ${theme.breakpoints.s}) {
    h2:before {
      content: '';
      display: block;
      position: absolute;
      height: 2px;
      background: #eee;
      width: 100%;
      left: 0;
      top: calc(.5em);
    }   
  }
`;

const StyledWrapper = styled.div`
  display: flex;
`;

export default class App extends React.Component {
  render() {
    return (
      <StyledWrapper>
        <GlobalStyles />
        <Sidebar />
        <Main />
      </StyledWrapper>
    );
  }
}
