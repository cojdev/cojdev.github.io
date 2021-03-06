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
    left: 0;
    height: 100vh;
    width: 320px;
    box-shadow: inset 2px 0 0 #e14;
  }

  @media screen and (min-width: ${theme.breakpoints.m}) {
    width: 400px;
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
        London based full stack developer working with React and
        NodeJs and experience using PHP, WordPress, and Vue.
      </p>
      <SocialList data={social} />
    </div>

  </StyledSidebar>
);

export default Sidebar;
