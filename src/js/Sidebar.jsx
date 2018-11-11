import React from 'react';
import Social from './Social';
import { social } from './sitedata';

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <h1>Charles Ojukwu</h1>
                <p>Full-Stack Web Developer</p>
                <Social data={social} />
            </div>
        )
    }
}