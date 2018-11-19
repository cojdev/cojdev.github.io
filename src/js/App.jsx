import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// components
import Sidebar from './Sidebar';
import Main from './Main';

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        background: #f8f8f8;
        padding: 0;
        margin: 0;
        font: 300 14px/1.8 'HK Grotesk', sans-serif;
        letter-spacing: .1ch;
        color: #444;
    }

    /* Typography */
    h1 {
        font-size: 1.8rem;
        font-weight: bold;
        line-height: 1;
    }

    h1, h2 {
        color: #666;
    }

    h2 {
        font-size: 1.4rem;
        line-height: 1;
        font-weight: bold;
        padding-bottom: 1.4rem;
        margin-bottom: 2rem;
        position: relative;
    }

    h2:after {
        content: '';
        display: block;
        position: absolute;
        height: 2px;
        background: #e14;
        width: 48px;
        left: 0;
        bottom: -1px;
    }

    a {
        text-decoration: none;
        color: #e14;
        border-bottom: 1px solid #e14;
        padding-bottom: .5ch;
    }
`;

export default class App extends React.Component {
    render() {
        return (
            <div>
                <GlobalStyles />
                <Sidebar />
                <Main />
            </div>
        )
    }
}