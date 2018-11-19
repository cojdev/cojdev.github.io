import React from 'react';
import styled from 'styled-components';
import colour from './colour';

const StyledProject = styled.div`

    display: block;
    width: 100%;
    cursor: pointer;
    margin-bottom: 2rem;

    h3 {
        margin-top: 0;
        margin-bottom: 0;
    }

    @media screen and (min-width: 720px) {
        width: calc(50% - 2rem);
        margin: 1rem;
    }
`;

const Background = styled.div`
    position: absolute;
    top: -100px;
    left: 0;
    right: 0;
    bottom: -100px;
    background-color: #444;
    background-size: cover;
    background-position: center;
    z-index: -1;
`;

const Image = styled.div`
    margin-bottom: 1rem;
    margin-left: -1rem;
    margin-right: -1rem;
    height: 200px;
    box-shadow: inset 0 10px 30px rgba(0,0,0,0.1);
    overflow: hidden;
    position: relative;

    @media screen and (min-width: 1200px) {
        border-radius: 2px;
        margin-left: 0;
        margin-right: 0;
    }
`;

const TagList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 1em 0;
`;

const Tag = styled.li`

    display: inline-block;
    margin-right: 1ch;
    font-size: 12px;
    line-height: 1;
    color: #fff;
    font-weight: 500;
    background: #b13;
    padding: .5ch 1.5ch;
    border-radius: 100px;
    box-shadow: 0 5px 15px rgba(11, 33, 22, .1);

    :before {
        content: '';
        display: inline-block;
        position: relative;
        height: .5rem;
        width: .5rem;
        border-radius: 50%;
        color: #000;
    }
`;

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

            // console.log(bgy);

            this.setState({
                bgy: bgy
            });
        }
    }

    mouse(e) {
        // console.log(e.clientX, e.clientY);

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
            <StyledProject className={this.props.className}>
                {image ? <Image ref={this.background}>
                    <Background
                        style={{
                            backgroundImage: `url(${data.image})`,
                            transform: `translate(${bgx}px, ${bgy}px)`
                            }} />
                </Image> : ''}
                
                <div className="project--text">
                    <h3>{data.title}</h3>
                    <a className="project--link" href={data.url}>View</a>
                    <TagList>{data.tags.map((item, index) => (
                        <Tag key={index}>{item}</Tag>
                    ))}</TagList>
                    <p>{data.description}</p>
                </div>
            </StyledProject>
        )
    }
}