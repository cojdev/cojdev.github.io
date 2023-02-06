import React from 'react';
import * as Icon from 'react-feather';
import { location, Social } from '../../common/siteData';
import { Item, StyledSocialList } from './SocialList.styles';

const SocialList = ({ data }: { data: Social[] }) => {
  const items = data.map((item: Social, index: React.Key) => {
    const SocialIcon = item.icon;

    return (
      <Item key={index}>
        <a href={item.url} title={item.name}>
          <SocialIcon />
        </a>
      </Item>
    );
  });

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
