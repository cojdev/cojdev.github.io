import React from 'react';
import styled from 'styled-components';

const StyledSocialList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 1.25rem;
`;

const Item = styled.li`
    display: inline-block;
    margin-right: 1ch;

    a {
        color: #e14;
    }
`;

export default function SocialList(props) {

    const items = props.data.map((item, index) => (
        <Item key={index}>
            <a href={item.link}><i className={item.class}></i></a>
        </Item>
    ));

    return (
        <StyledSocialList>
            {items}
            {/* <i class="far fa-envelope"></i>
            <i class="fab fa-github"></i>
            <i class="fab fa-codepen"></i> */}
        </StyledSocialList>
    );
}