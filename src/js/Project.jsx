import React from 'react';

export default class Project extends React.Component {

    constructor() {
        super();
        this.state = {
            mx: 0,
            my: 0,
        };
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.parallax.bind(this));
    }

    parallax(e) {
        console.log(e.clientX, e.clientY);

        const mxRaw = e.clientX,
            myRaw = e.clientY,
            
            mx = mxRaw / window.innerWidth,
            my = myRaw / window.innerHeight,
            
            size = 10;

        const bgx = size * (1 - 2*mx);
        const bgy = size * (1 - 2*my);

        this.setState({
            mx: mx,
            my: my,
            bgx: bgx,
            bgy: bgy
        });
    }

    render() {
        const { bgx, bgy } = this.state;
        const { data } = this.props; 
        return (
            <li className="projects--item">
                <div
                    className="projects--item--background"
                    style={{
                        backgroundImage: `url(https://source.unsplash.com/300x200)`,
                        transform: `translate(${bgx}px, ${bgy}px)`
                        }}></div>
                <div className="projects--item--text">
                    <h3>{data.title}</h3>
                    <p>{data.date} - {data.tags.join(', ')}</p>
                    <p>{data.description}</p>
                </div>
            </li>
        )
    }
}