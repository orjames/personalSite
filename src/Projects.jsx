import React from 'react';
import './Projects.css';
import LinkIcon from './icons/LinkIcon';
import GithubIcon from './icons/GithubIcon';

const Projects = (props) => {
  let projects = props.projects.map((project, index) => {
    return (
      <div key={index} className='project-card'>
        <div>
          <img
            src={require(`./images/${project.imgUrl}`)}
            alt='project'
            className='project-image'
            width='250px'
          />
        </div>
        <div className='project-body'>
          <span className='project-name'>{project.name}</span>
          <span className='project-description'>{project.description}</span>
          <span className='project-technologies'>technologies used:</span>
          <div className='icon-div'>
            <br />
            {project.technologiesUsed}
          </div>
          <div className='project-buttons-div'>
            <a href={project.liveLink} className=''>
              <LinkIcon
                fill='#fff'
                width={14}
                className=''
                style={{ marginRight: '0.3rem' }}
              />
              Live-Link
            </a>
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
        </div>
      </div>
    );
  });
  return <div className='projects-div'>{projects}</div>;
};

export default Projects;
