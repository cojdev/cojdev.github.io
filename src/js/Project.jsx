import React from 'react';
import colour from './colour';

export default class Project extends React.Component {

    constructor() {
        super();
        this.state = {
            mx: 0,
            my: 0,
            bgx: .5,
            bgy: .5,
            bgc: 'transparent',//colour(true),
        };
        this.background = React.createRef();
    }

    componentDidMount() {
        if (this.props.data.image) {
            this.setState({ image: true}, () => {
                this.parallax.call(this, true);
                window.addEventListener('scroll', this.parallax.bind(this));
                window.addEventListener('resize', this.parallax.bind(this));
            })
            
        }
        
    }

    parallax() {
        const target = this.background.current;
        
        const targetPos = target.getBoundingClientRect().top;
        
        const dy = window.innerHeight,
            
            size = target.offsetHeight / 2;

        if ((targetPos + target.offsetHeight) > 0 && (targetPos - target.offsetHeight) < dy) {
            const bgy = -1 * size * (targetPos/dy);

            console.log(bgy);

            this.setState({
                bgy: bgy
            });
        }
    }

    mouse(e) {
        console.log(e.clientX, e.clientY);

        const mxRaw = e.clientX,
            myRaw = e.clientY,
            
            mx = mxRaw / window.innerWidth,
            my = myRaw / window.innerHeight,
            
            size = 14;

        const bgx = size * (2*mx - 1);
        const bgy = size * (2*my - 1);

        this.setState({
            mx: mx,
            my: my,
            bgx: bgx,
            bgy: bgy
        });
    }

    render() {
        const { bgx, bgy, bgc, image } = this.state;
        const { data } = this.props; 
        return (
            <li className="project">
                {image ? <div ref={this.background} className="project--image">
                    <div
                        className="project--background"
                        style={{
                            backgroundImage: `url(${data.image})`,
                            transform: `translate(${bgx}px, ${bgy}px)`
                            }}></div>
                </div> : ''}
                
                <div className="project--text">
                    <h3>{data.title}<span className="project--date"> - {data.date}</span></h3>
                    <ul className="tags">{data.tags.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}</ul>
                    <p>{data.description}</p>
                </div>
            </li>
        )
    }
}