import React from 'react';
import styled from 'styled-components';

import SocialList from './SocialList';
import { social } from './sitedata';

const StyledSidebar = styled.aside`
    background: #fff;
    padding: 2rem;
    box-shadow: inset 0 2px 0 #b13;
    text-align: center;

    @media screen and (min-width: 1200px) {
        position: fixed;
        left: 0;
        height: 100vh;
        width: 320px;
        box-shadow: inset 2px 0 0 #e14;
        text-align: left;
    }
`;

const SubTitle = styled.p`
    font-size: 1.2rem;
    margin-bottom: 1rem;
    line-height: 1;
    color: #e14;
`;

const Location = styled.p`
    font-weight: 500;
`;

export default class Sidebar extends React.Component {
    render() {
        return (
            <StyledSidebar>
                <h1>Charles Ojukwu</h1>
                <SubTitle>Full-Stack Web Developer</SubTitle>
                <p>London based full stack developer working with React and NodeJs and experience using PHP, WordPress, and Vue.</p>
                <Location><i className="fas fa-map-marker-alt"></i> London, UK</Location>
                <SocialList data={social} />
            </StyledSidebar>
        )
    }
}