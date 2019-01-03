import React from 'react';
import styled from 'styled-components';

const StyledSocialList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const Item = styled.li`
    display: inline-block;
    margin-right: 1ch;

    a {
        color: #e14;
    }

    :not(:last-child):after {
        display: inline-block;
        content: '';
        position: relative;
        
        height: .25em;
        width: .25em;

        margin-left: 1ch;
        background-color: #ddd;
    }
`;

export default function SocialList(props) {

    const items = props.data.map((item, index) => (
        <Item key={index}>
            <a href={item.url}><i className={item.class}></i> {item.name}</a>
        </Item>
    ));

    return (
        <StyledSocialList>
            <Item><i className="fas fa-map-marker-alt"></i> London, UK</Item>
            {items}
            {/* <i class="far fa-envelope"></i>
            <i class="fab fa-github"></i>
            <i class="fab fa-codepen"></i> */}
        </StyledSocialList>
    );
}