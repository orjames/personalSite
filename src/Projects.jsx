import React from 'react';
import './Projects.css';
import LinkIcon from './icons/LinkIcon';
import GithubIcon from './icons/GithubIcon';
import ImageSlide from './ImageSlide';
import Arrow from './Arrow';

const projectImgs = [
  'nextbook1.jpg',
  'nextbook2.jpg',
  'nextbook3.jpg',
  'nextbook4.jpg',
  'nextbook5.jpg',
];

const images = {
  1: [
    'nextbook1.jpg',
    'nextbook2.jpg',
    'nextbook3.jpg',
    'nextbook4.jpg',
    'nextbook5.jpg',
  ],
  2: ['dogPlaceholder.jpg'],
  3: ['complement0.jpg', 'complement1.jpg', 'complement2.jpg'],
  4: ['intejump.jpg', 'intejump2.jpg', 'intejump3.jpg'],
  5: ['personalwebsite0.jpg'],
  6: ['apocalist0.png', 'apocalist1.png', 'apocalist2.png'],
};

const Projects = (props) => {
  let projects = props.projects.map((project, index) => {
    let projectId = project.id;
    let liveLink = null;
    if (project.liveLink) {
      liveLink = (
        <a href={project.liveLink} className=''>
          <LinkIcon
            fill='#fff'
            width={14}
            className=''
            style={{ marginRight: '0.3rem' }}
          />
          Live-Link
        </a>
      );
    }
    return (
      <div key={index} className='project-card'>
        <div className='outer-carousel'>
          <div className='carousel'>
            <Arrow
              direction='left'
              clickFunction={() => props.previousSlide(projectId)}
              glyph='&#9664;'
            />
            <ImageSlide
              url={images[projectId][props.currentImageIndex[projectId]]}
            />
            <Arrow
              direction='right'
              clickFunction={() => props.nextSlide(projectId)}
              glyph='&#9654;'
            />
          </div>
        </div>
        <div className='project-body'>
          <span className='project-name'>{project.name}</span>
          <span className='project-description'>{project.description}</span>
          <div className='project-buttons-div'>
            {liveLink}
            <a href={project.githubLink} className=''>
              <GithubIcon
                fill='#fff'
                width={14}
                className=''
                style={{ marginRight: '0.3rem', marginLeft: '1rem' }}
              />
              Github
            </a>
          </div>
          <span className='project-technologies'>technologies used:</span>
          <div className='icon-div'>
            <br />
            {project.technologiesUsed}
          </div>
        </div>
      </div>
    );
  });
  return <div className='projects-div'>{projects}</div>;
};

export default Projects;
