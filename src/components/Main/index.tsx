import React, { useState, useEffect, useRef, SyntheticEvent } from 'react';

import ProjectList from '../ProjectList';
import { projects } from '../../common/siteData';
import theme from '../../common/theme';
import useMedia from '../../hooks/useMedia';
import { StyledMain, StyledMainInner } from './Main.styles';

const Main = () => {
  const mainElem = useRef(null);

  const [mounted, setMounted] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const isMobile = useMedia(`(max-width: ${theme.breakpoints.s})`);

  const windowListener = () => {
    setScrollTop(window.pageYOffset);
  };

  const mainListener = (e: SyntheticEvent<HTMLElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
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
        <h2>
          <span>Personal Projects</span>
        </h2>
        <ProjectList projects={projects.personal} scrollTop={scrollTop} />
        <h2>
          <span>Commercial Work</span>
        </h2>
        <ProjectList projects={projects.commercial} scrollTop={scrollTop} />
      </StyledMainInner>
    </StyledMain>
  );
};

export default Main;
