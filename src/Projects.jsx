import React from 'react';
import './Projects.css';
import LinkIcon from './icons/LinkIcon';
import GithubIcon from './icons/GithubIcon';
import ImageSlide from './ImageSlide';
import RightIcon from './icons/RightIcon';
import LeftIcon from './icons/LeftIcon';

const Projects = (props) => {
  let images = props.images;
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
            <div onClick={() => props.previousSlide(projectId)}>
              <LeftIcon
                className={`slide-arrow left`}
                fill='#fff'
                width={14}
                style={{}}
              />
            </div>
            <ImageSlide
              url={images[projectId][props.currentImageIndex[projectId]]}
            />
            <div onClick={() => props.nextSlide(projectId)}>
              <RightIcon
                className={`slide-arrow right`}
                onClick={() => props.nextSlide(projectId)}
                fill='#fff'
                width={14}
                style={{}}
              />
            </div>
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
