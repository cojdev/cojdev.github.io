import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { social } from './common/siteData';
import theme from './common/theme';

const MenuWrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  z-index: 3;
  background: #fff;
  display: block;

  @media screen and (min-width: ${theme.breakpoints.s}) {
    display: none;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  margin: 0;
  font-size: 24px;
  height: 100%;
  box-shadow:
    0 2px 3px rgba(0,0,0,0.1),
    0 2px 12px rgba(0,0,0,0.1);
`;

const MenuItem = styled.li`
  
`;

const Menu = () => {
  const [visible, setVisible] = useState(false);

  const listener = () => {
    if (window.pageYOffset > 60) {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });
  const items = social.map((item, index) => (
    <MenuItem key={index}>
    <a href={item.url}><i className={item.class}></i></a>
  </MenuItem>
  ));

  return (
    <MenuWrapper visible={visible}>
      <MenuList>
        {items}
      </MenuList>
    </MenuWrapper>
  );
};

export default Menu;
