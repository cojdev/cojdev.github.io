import React from 'react';
import styled from 'styled-components';

import ProjectList from './ProjectList';
import { projects } from '../common/sitedata';
import theme from '../common/theme';

const StyledMain = styled.main`
    display: block;
    padding: 2rem;

    @media screen and (min-width: ${theme.breakpoints.s}) {
        margin-left: 360px;
        width: calc(100% - 360px);
        max-width: 1000px;
        padding: 4rem 4rem 0;
    }

    @media screen and (min-width: ${theme.breakpoints.m}) {
        padding-right: 8rem;
        width: calc(100% - 360px - 4rem);
        margin-left: calc(360px + 4rem);
    }
`;

export default class Main extends React.Component {
    render() {
        return (
            <StyledMain>
                <h2><span>Personal Projects</span></h2>
                <ProjectList data={projects.personal} />
                <h2><span>Commercial Work</span></h2>
                <ProjectList data={projects.commercial} />
            </StyledMain>
        )
    }
}