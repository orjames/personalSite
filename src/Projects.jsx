import React from 'react';
import './Projects.css';
import LinkIcon from './icons/LinkIcon';
import GithubIcon from './icons/GithubIcon';

const Projects = (props) => {
  if (props.nameBeenSelected === false) {
    let projects = props.projects.map((project, index) => {
      return (
        <div key={index} className='project-card'>
          <div>
            <img src={project.imgUrl} alt='project' className='project-image' />
          </div>
          <div className='project-body'>
            <span className='project-name'>{project.name}</span>
            <span className='project-description'>{project.description}</span>
            <div>{project.technologiesUsed}</div>
            <div className='project-buttons-div'>
              <a href='#' className=''>
                <LinkIcon
                  fill='#fff'
                  width={14}
                  className=''
                  style={{ marginRight: '0.3rem' }}
                />
                Live-Link
              </a>
              <a href='#' className=''>
                <GithubIcon
                  fill='#fff'
                  width={14}
                  className=''
                  style={{ marginRight: '0.3rem', marginLeft: '1rem' }}
                />
                Github
              </a>
            </div>
          </div>
        </div>
      );
    });
    return <div className='projects-div'>{projects}</div>;
  } else {
    let projects = props.displayedProjects.map((project, index) => {
      return (
        <div key={index} className='project-card'>
          <div>
            <img src={project.imgUrl} alt='project' className='project-image' />
          </div>
          <div className='project-body'>
            <span className='project-name'>{project.name}</span>
            <span className='project-description'>{project.description}</span>
            <div>{project.technologiesUsed}</div>
            <div className='project-buttons-div'>
              <button>Live link</button>
            </div>
          </div>
        </div>
      );
    });
    return <div className='projects-div'>{projects}</div>;
  }
};

export default Projects;
