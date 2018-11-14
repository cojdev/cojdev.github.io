import React from 'react';
import Project from './Project';


export default class ProjectList extends React.Component {
    render() {
        const projects = this.props.data.map((item, index) => (
            <Project key={index} data={item} />
        ))
        return (
            <ul className="project-list">
                {projects}
            </ul>
        );
    }
}