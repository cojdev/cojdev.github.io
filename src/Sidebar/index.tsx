import React from 'react';
import styled from 'styled-components';

import SocialList from './SocialList';
import siteData, { social } from '../common/siteData';
import theme from '../common/theme';

const StyledSidebar = styled.aside`
  padding: 2rem;
  box-shadow: inset 0 2px 0 #b13;

  @media screen and (min-width: ${theme.breakpoints.s}) {
    display: flex;
    align-items: center;
    height: 100vh;
    flex-shrink: 0;
    width: 320px;
    box-shadow: inset 2px 0 0 #e14;
  }
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  line-height: 1;
  color: #e14;
`;

const Sidebar = () => (
  <StyledSidebar>
    <div>
      <h1>{siteData.profile.name}</h1>
      <SubTitle>{siteData.profile.role}</SubTitle>
      <p>
        London based Full Stack Engineer working predominantly with React,
        Typescript and Node.
      </p>
      <SocialList data={social} />
    </div>
  </StyledSidebar>
);

export default Sidebar;
