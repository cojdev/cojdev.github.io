import React from 'react';
import styled from 'styled-components';
import siteData from '../common/siteData';

const StyledSocialList = styled.ul`
  list-style: none;
  margin: 1rem 0;
  padding: 0;
`;

const Item = styled.li`
  display: inline-block;
  margin-right: 1ch;

  a {
    color: #e14;
  }
`;

const SocialList = ({ data }) => {
  const items = data.map((item, index) => (
    <Item key={index}>
      <a href={item.url}><i className={item.class}></i></a>
    </Item>
  ));

  return (
    <>
      <StyledSocialList>
        {items}
        <Item><i className="fas fa-map-marker-alt"></i> {siteData.profile.location}</Item>
      </StyledSocialList>
    </>
  );
};

export default SocialList;
