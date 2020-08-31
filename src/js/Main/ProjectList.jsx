import React from 'react';
import styled from 'styled-components';
import Project from './Project';

const StyledProjectList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  justify-content: space-between;
`;

const ProjectList = ({ data, scrollTop }) => {
  const projects = data.filter(item => item.hidden !== true).map((item, index) => (
    <Project key={index} data={item} scrollTop={scrollTop} />
  ));

  return (
    <StyledProjectList>
      {projects}
    </StyledProjectList>
  );
};

export default ProjectList;
