import styled from 'styled-components';

export const StyledSocialList = styled.ul`
  list-style: none;
  margin: 1rem 0;
  padding: 0;
`;

export const Item = styled.li`
  display: inline-block;
  margin-right: 1ch;
  vertical-align: middle;

  svg {
    vertical-align: middle;
  }

  a {
    color: #e14;
  }
`;
