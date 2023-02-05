import React from 'react';
import styled from 'styled-components';
import * as Icon from 'react-feather';
import { location } from '../common/siteData';

const StyledSocialList = styled.ul`
  list-style: none;
  margin: 1rem 0;
  padding: 0;
`;

const Item = styled.li`
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

const SocialList = ({ data }: { data: { url: string; icon: any }[] }) => {
  const items = data.map(
    (item: { url: string; icon: any }, index: React.Key) => {
      const SocialIcon = item.icon;

      return (
        <Item key={index}>
          <a href={item.url}>
            <SocialIcon />
          </a>
        </Item>
      );
    }
  );

  return (
    <>
      <StyledSocialList>
        {items}
        <Item>
          <Icon.MapPin /> {location}
        </Item>
      </StyledSocialList>
    </>
  );
};

export default SocialList;
