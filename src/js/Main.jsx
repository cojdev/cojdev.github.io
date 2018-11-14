import React from 'react';
import ProjectList from './ProjectList';
import { projects, skills } from './sitedata';

export default class Main extends React.Component {
    render() {
        return (
            <main className="main">
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
            </main>
        )
    }
}