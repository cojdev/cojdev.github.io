import styled from 'styled-components';
import theme from '../../common/theme';

export const StyledProject = styled.div`
  display: block;
  width: 100%;

  /* @media screen and (min-width: ${theme.breakpoints.s}) { */
  /* width: calc(50% - 1rem); */
  /* } */

  @media screen and (min-width: ${theme.breakpoints.m}) {
    width: calc(50% - 2rem);
  }

  cursor: pointer;
  margin-bottom: 4rem;

  h3 {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: -120px;
  background-color: #444;
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

export const Image = styled.div`
  margin-bottom: 1rem;
  height: 120px;
  box-shadow: inset 0 4px 12px rgba(10, 20, 40, 0.04);
  overflow: hidden;
  position: relative;

  @media screen and (min-width: 720px) {
    border-radius: 2px;
  }
`;

export const ProjectText = styled.div``;

export const Description = styled.p`
  margin: 0.5em 0;
`;

export const TagList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  line-height: 1.5;
`;

export const TagLabel = styled.li`
  display: inline-block;
  margin-right: 1ch;
  font-size: 14px;
  font-weight: 700;
`;

export const Tag = styled(TagLabel)<{ background: string }>`
  :before {
    content: '';
    display: inline-block;
    position: relative;
    height: 0.3rem;
    width: 0.3rem;
    margin-right: 0.6ch;
    top: -0.2rem;
    border-radius: 40%;
    background-color: ${(props) => props.background || '#ccc'};

    box-shadow: 0 5px 15px rgba(11, 33, 22, 0.1);
  }
`;
