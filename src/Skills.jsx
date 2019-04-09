import React from 'react';
import './Skills.css';
import CSS3Icon from './icons/CSS3Icon';
import HTMLIcon from './icons/HTMLIcon';
import JSIcon from './icons/JSIcon';
import PythonIcon from './icons/PythonIcon';
import SQLIcon from './icons/SQLIcon';
import MaterializeIcon from './icons/MaterializeIcon';
import MongoDBIcon from './icons/MongoDBIcon';
import BootstrapIcon from './icons/BootstrapIcon';
import ReactIcon from './icons/ReactIcon';
import NodeJSIcon from './icons/NodeJSIcon';
import MongooseIcon from './icons/MongooseIcon';
import PostgresIcon from './icons/PostgresIcon';
import GithubIcon from './icons/GithubIcon';
import SequelizeIcon from './icons/SequelizeIcon';
import DjangoIcon from './icons/DjangoIcon';

const Skills = (props) => {
  return (
    <div className='outer-skills-div'>
      <div className='skills-div'>
        <div className='skills-div-header'>
          <span className='skills-header'>skills</span>
          <span className='skills-sub-header'>
            these are the skills I have, and technologies I have worked with
          </span>
        </div>
        <div className='skills-div-list'>
          <div className='skills-div-list-item'>
            <HTMLIcon fill='white' width={40} style={{ background: '' }} />
            <br />
            HTML5
          </div>
          <div className='skills-div-list-item'>
            <CSS3Icon fill='white' width={40} style={{ background: '' }} />,
          </div>
          <div className='skills-div-list-item'>
            <JSIcon fill='white' width={40} style={{ background: '' }} />,
          </div>

          <div className='skills-div-list-item'>
            <PythonIcon fill='white' width={40} style={{ background: '' }} />,
          </div>
          <div className='skills-div-list-item'>
            <SQLIcon fill='white' width={40} style={{ background: '' }} />,
          </div>
          <div className='skills-div-list-item'>
            <MaterializeIcon
              fill='white'
              width={40}
              style={{ background: '' }}
            />
          </div>
          <div className='skills-div-list-item'>
            <MongoDBIcon fill='white' width={40} style={{ background: '' }} />{' '}
            MongoDB,
          </div>
          <div className='skills-div-list-item'>
            <BootstrapIcon fill='white' width={40} style={{ background: '' }} />
            ,
          </div>
          <div className='skills-div-list-item'>
            <ReactIcon fill='white' width={40} style={{ background: '' }} />,
          </div>
          <div className='skills-div-list-item'>
            <NodeJSIcon fill='white' width={40} style={{ background: '' }} />,
          </div>
          <div className='skills-div-list-item'>
            <PostgresIcon fill='white' width={40} style={{ background: '' }} />e
          </div>
          <div className='skills-div-list-item'>
            <MongooseIcon fill='white' width={40} style={{ background: '' }} />,
          </div>
          <div className='skills-div-list-item'>
            <GithubIcon fill='white' width={40} style={{ background: '' }} />
          </div>
          <div className='skills-div-list-item'>
            <SequelizeIcon fill='white' width={40} style={{ background: '' }} />
          </div>
          <div className='skills-div-list-item'>
            <DjangoIcon fill='white' width={40} style={{ background: '' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
