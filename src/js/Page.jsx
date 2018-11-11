import React from 'react';
import ProjectList from './ProjectList';

export default class Page extends React.Component {
    render() {
        return (
            <main className="container">
                <h2>Projects</h2>
                <ProjectList />
            </main>
        )
    }
}