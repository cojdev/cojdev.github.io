import styled from 'styled-components';
import theme from '../../common/theme';

export const StyledMain = styled.main`
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

export const StyledMainInner = styled.div`
  display: block;
  max-width: 1200px;
`;
