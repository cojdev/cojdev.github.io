import React from 'react';

import SocialList from './SocialList';
import siteData, { social } from '../../common/siteData';
import { StyledSidebar, SubTitle } from './Sidebar.styles';

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
