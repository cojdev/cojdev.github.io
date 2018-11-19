import React from 'react';
import Project from './Project';
import styled from 'styled-components';

const StyledProjectList = styled.ul`

    display: block;
    list-style: none;
    padding: 0;
    margin: 0;
    margin-bottom: 4rem;

    @media screen and (min-width: 720px) {
        display: flex;
        flex-wrap: wrap;
        margin: -1rem;

        :not(:last-child) {
            margin-bottom: 4rem;
        }
    }
`;

export default class ProjectList extends React.Component {
    render() {
        const projects = this.props.data.map((item, index) => (
            <Project key={index} data={item} />
        ))
        return (
            <StyledProjectList>
                {projects}
            </StyledProjectList>
        );
    }
}