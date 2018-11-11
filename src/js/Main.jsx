import React from 'react';
import ProjectList from './ProjectList';
import { projects } from './sitedata';

export default class Main extends React.Component {
    render() {
        return (
            <main className="main">
                <h1>Hello!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excitationem sint quisquam aut harum ullam fugit earum odio, eius aspernatur?</p>
                <h2>Projects</h2>
                <ProjectList data={projects} />
            </main>
        )
    }
}