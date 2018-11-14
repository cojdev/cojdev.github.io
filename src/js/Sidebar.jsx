import React from 'react';
import Social from './Social';
import { social } from './sitedata';

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <h1>Charles Ojukwu</h1>
                <h3>Full-Stack Web Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excitationem sint quisquam.</p>
                <p className="sidebar--location"><i className="fas fa-map-marker-alt"></i> London, UK</p>
                <Social data={social} />
            </div>
        )
    }
}