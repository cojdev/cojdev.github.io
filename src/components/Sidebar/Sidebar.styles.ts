import styled from 'styled-components';
import theme from '../../common/theme';

export const StyledSidebar = styled.aside`
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

export const SubTitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  line-height: 1;
  color: #e14;
`;
