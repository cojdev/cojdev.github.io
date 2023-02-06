import React, { useRef, useState, useEffect } from 'react';
import { technologies } from '../../common/siteData';
import {
  Background,
  Description,
  Image,
  ProjectText,
  StyledProject,
  Tag,
  TagLabel,
  TagList,
} from './ProjectItem.styles';

const ProjectItem = ({
  className,
  data,
  scrollTop,
}: {
  className?: string;
  data: any;
  scrollTop: number;
}) => {
  const [state, setState] = useState({
    mx: 0,
    my: 0,
    bgx: 0.5,
    bgy: 0.5,
    bgc: 'transparent',
    image: false,
  });

  const background = useRef(null);

  /**
   * parallax effect
   */
  const parallax = () => {
    // the background and position
    const target = background.current;

    if (target) {
      const targetPos = target.getBoundingClientRect().top;

      // distance to travel
      const dy = window.innerHeight;
      const size = target.offsetHeight;

      // prevent unnecessary state changes
      if (
        targetPos + target.offsetHeight > 0 &&
        targetPos - target.offsetHeight < dy
      ) {
        // set the background transform to the
        // negative value of the relative
        // position of the image in the viewport
        const bgy = -1 * size * (targetPos / (dy - size));
        setState({ ...state, bgy });
      }
    }
  };

  useEffect(() => {
    if (data.image) {
      setState({ ...state, image: true });
      parallax();
    }
  }, []);

  useEffect(() => {
    parallax();
  }, [scrollTop]);

  const { bgx, bgy, image } = state;

  return (
    <StyledProject className={className}>
      {image ? (
        <Image ref={background}>
          <Background
            style={{
              backgroundImage: `url(${data.image})`,
              transform: `translate(${bgx}px, ${bgy}px)`,
            }}
          />
        </Image>
      ) : (
        ''
      )}

      <ProjectText>
        <h3>
          {data.title} <a href={data.url}>View</a>
        </h3>
        <Description>{data.description}</Description>
        <TagList>
          <TagLabel>Technologies:</TagLabel>
          {data.tags.map((item: {}, index: React.Key) => (
            <Tag
              key={index}
              background={(() => {
                const col = technologies.find((item2) => item2.name === item);
                return col !== undefined ? col.colour : '#bbb';
              })()}>
              {item}
            </Tag>
          ))}
        </TagList>
      </ProjectText>
    </StyledProject>
  );
};

export default ProjectItem;
