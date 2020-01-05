import React from 'react';
import styled from 'styled-components';

import ProjectList from './ProjectList';
import { projects } from '../common/siteData';
import theme from '../common/theme';

const StyledMain = styled.main`
  display: block;
  padding: 2rem;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.s}) {
    overflow: auto;
    height: 100vh;
  }

  @media screen and (min-width: ${theme.breakpoints.m}) {
    
  }
`;

const StyledMainInner = styled.div`
  display: block;
  max-width: 1200px;
`;

export default class Main extends React.Component {
  render() {
    return (
      <StyledMain>
        <StyledMainInner>
          <h2><span>Personal Projects</span></h2>
          <ProjectList data={projects.personal} />
          <h2><span>Commercial Work</span></h2>
          <ProjectList data={projects.commercial} />
        </StyledMainInner>
      </StyledMain>
    );
  }
}
