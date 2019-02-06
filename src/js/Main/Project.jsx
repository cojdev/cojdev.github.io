import React from 'react';
import styled from 'styled-components';
import colour from '../common/colour';
import { technologies } from '../common/sitedata';

const StyledProject = styled.div`

    display: block;
    width: 100%;
    cursor: pointer;
    margin-bottom: 4rem;

    h3 {
        margin-top: 0;
        margin-bottom: 0;
    }
`;

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: -120px;
    background-color: #444;
    background-size: cover;
    background-position: center;
    z-index: -1;

`;

const Image = styled.div`
    margin-bottom: 1rem;
    height: 120px;
    box-shadow: inset 0 4px 12px rgba(10,20,40,0.04);
    /* box-shadow: inset 0 0 0 6px red; */
    overflow: hidden;
    position: relative;

    @media screen and (min-width: 720px) {
        border-radius: 2px;
    }
`;

const ProjectText = styled.div`

`;

const Description = styled.p`
    margin: .5em 0;
`;

const TagList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    line-height: 1.5;
`;

const TagLabel = styled.li`

    display: inline-block;
    margin-right: 1ch;
    font-size: 14px;
    font-weight: 700;
`;

const Tag = styled(TagLabel)`

    :before {
        content: '';
        display: inline-block;
        position: relative;
        height: .3rem;
        width: .3rem;
        margin-right: .6ch;
        top: -.2rem;
        border-radius: 40%;
        background-color: ${props => props.background || '#ccc'};
        
    box-shadow: 0 5px 15px rgba(11, 33, 22, .1);
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
            bgc: 'transparent',
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

    /**
     * parallax
     */
    parallax() {
        // the background and position
        const target = this.background.current;
        const targetPos = target.getBoundingClientRect().top;
        
        // distance to travel
        const dy = window.innerHeight,
            size = target.offsetHeight;

        // prevent unnecessary state changes
        if ((targetPos + target.offsetHeight) > 0 && (targetPos - target.offsetHeight) < dy) {
            // set the background transform to the negative value of the relative position of the image in the viewport
            const bgy = -1 * size * ((targetPos)/(dy - size));
            this.setState({ bgy: bgy });
        }
    }
    
    /**
     * Set the mouse position in state
     * @param {MouseEvent} e The mouse event
     */
    mouse(e) {
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
                
                <ProjectText>
                    <h3>{data.title} <a href={data.url}>View</a></h3>
                    <Description>{data.description}</Description>
                    <TagList>
                        <TagLabel>Technologies:</TagLabel>
                        {data.tags.map((item, index) => (
                        <Tag key={index} background={() => {
                            const colour = technologies.find(item2 => {
                                return item2.name === item;
                            });
                            return colour !== undefined ? colour.colour : '#bbb';
                        }}>{item}</Tag>
                    ))}</TagList>
                </ProjectText>
            </StyledProject>
        )
    }
}