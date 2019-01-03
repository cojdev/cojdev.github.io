import React from 'react';
import styled from 'styled-components';

import SocialList from './SocialList';
import { social } from '../common/sitedata';
import theme from '../common/theme';

const StyledSidebar = styled.aside`
    padding: 2rem 0 4rem 2rem;
    box-shadow: inset 0 2px 0 #b13;
    /* text-align: center; */

    @media screen and (min-width: ${theme.breakpoints.s}) {
        position: fixed;
        left: 0;
        height: 100vh;
        width: 360px;
        box-shadow: inset 2px 0 0 #e14;
        /* text-align: left; */
    }

    @media screen and (min-width: ${theme.breakpoints.m}) {
        padding-left: 8rem;
        width: calc(360px + 4rem);
    }
`;

const SubTitle = styled.p`
    font-size: 1.2rem;
    margin-bottom: 1rem;
    line-height: 1;
    color: #e14;
`;

export default class Sidebar extends React.Component {
    render() {
        return (
            <StyledSidebar>
                <h1>Charles Ojukwu</h1>
                <SubTitle>Full-Stack Web Developer</SubTitle>
                <p>London based full stack developer working with React and NodeJs and experience using PHP, WordPress, and Vue.</p>
                <SocialList data={social} />
            </StyledSidebar>
        )
    }
}