import React from 'react';
import styled from 'styled-components';

import ProjectList from './ProjectList';
import { projects, skills } from './sitedata';

const StyledMain = styled.main`
    display: block;
    padding: 1rem;

    @media screen and (min-width: 1200px) {
        margin-left: 320px;
        width: calc(100% - 320px);
        padding: 2rem 4rem;
    }
`;
export default class Main extends React.Component {
    render() {
        return (
            <StyledMain>
                {/* <h2>Skills</h2>
                {skills.map((item, index) => (
                    <div key={index}>
                        <h3>{item.name}</h3>
                        <ul>{item.items.map((item2, index2) => (
                            <li key={index2}>{item2}</li>
                        ))}</ul>
                    </div>
                ))} */}
                <h2>Commercial Work</h2>
                <ProjectList data={projects.commercial} />
                <h2>Personal Projects</h2>
                <ProjectList data={projects.personal} />
            </StyledMain>
        )
    }
}