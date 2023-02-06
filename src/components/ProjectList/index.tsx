import React from 'react';
import styled from 'styled-components';
import { Project } from '../../common/siteData';
import ProjectItem from './ProjectItem';

const StyledProjectList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  justify-content: space-between;
`;

const ProjectList = ({
  projects,
  scrollTop,
}: {
  projects: any[];
  scrollTop: number;
}) => {
  const filteredProjects = projects
    .filter((item: Project) => item.hidden !== true)
    .map((item: Project, index: React.Key) => (
      <ProjectItem key={index} data={item} scrollTop={scrollTop} />
    ));

  return <StyledProjectList>{filteredProjects}</StyledProjectList>;
};

export default ProjectList;
