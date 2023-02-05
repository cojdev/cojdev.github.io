import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import ProjectList from './ProjectList';
import { projects } from '../common/siteData';
import theme from '../common/theme';
import useMedia from '../hooks/useMedia';

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

const Main = () => {
  const mainElem = useRef(null);

  const [mounted, setMounted] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const isMobile = useMedia(`(max-width: ${theme.breakpoints.s})`);

  const windowListener = () => {
    setScrollTop(window.pageYOffset);
  };

  const mainListener = (e) => {
    setScrollTop(e.target.scrollTop);
  };

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      setScrollTop(mainElem.current.scrollTop);
    }

    if (isMobile) {
      window.addEventListener('scroll', windowListener);
      return () => {
        window.removeEventListener('scroll', windowListener);
      };
    }

    mainElem.current.addEventListener('scroll', mainListener);
    return () => {
      mainElem.current.removeEventListener('scroll', mainListener);
    };
  }, [mounted, isMobile]);

  return (
      <StyledMain ref={mainElem}>
        <StyledMainInner>
          <h2><span>Personal Projects</span></h2>
          <ProjectList data={projects.personal} scrollTop={scrollTop} />
          <h2><span>Commercial Work</span></h2>
          <ProjectList data={projects.commercial} />
        </StyledMainInner>
      </StyledMain>
  );
};

export default Main;
