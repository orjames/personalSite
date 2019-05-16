import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Projects from './Projects';
import GoT from './GoT';
import BottomBar from './BottomBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CSS3Icon from './icons/CSS3Icon';
import ResumeIcon from './icons/ResumeIcon';
import EmailIcon from './icons/EmailIcon';
import HTMLIcon from './icons/HTMLIcon';
import JSIcon from './icons/JSIcon';
import BarsIcon from './icons/BarsIcon';
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
import CloudIcon from './icons/CloudIcon';
import ExpressIcon from './icons/ExpressIcon';
import CloseIcon from './icons/CloseIcon';
import TypeScriptIcon from './icons/TypeScriptIcon';

const projects = [
  {
    id: 1,
    name: 'nextbook',
    description: `Me: 'I want a practical experience using SQL.' Also me: 'What book should I read next?' Enter Nextbook. Nextbook is a full-stack app using Postgres (PSQL), Express, Node.js, and EJS. It recommends users their next book - based on a users selected genres, and books that they've read and rated in the app. The app uses 20 full crud routes, and two foreign API's.`,
    imgUrl: 'nextbook2.jpg',
    technologiesUsed: [
      <div className='project-div-list-item'>
        <NodeJSIcon fill='white' width={40} style={{ background: '' }} />
        Node.js
      </div>,
      <div className='project-div-list-item'>
        <ExpressIcon fill='white' width={40} style={{ background: '' }} />
        Express.js
      </div>,
      <div className='project-div-list-item'>
        <SequelizeIcon fill='white' width={40} style={{ background: '' }} />
        Sequelize
      </div>,
      <div className='project-div-list-item'>
        <SQLIcon fill='white' width={40} style={{ background: '' }} />
        SQL
      </div>,
      <div className='project-div-list-item'>
        <PostgresIcon fill='white' width={40} style={{ background: '' }} />
        Postgres (PSQL)
      </div>,
      <div className='project-div-list-item'>
        <JSIcon fill='white' width={40} style={{ background: '' }} />
        JavaScript
      </div>,
      <div className='project-div-list-item'>
        <HTMLIcon fill='white' width={40} style={{ background: '' }} />
        HTML5
      </div>,
      <div className='project-div-list-item'>
        <BootstrapIcon fill='white' width={40} style={{ background: '' }} />
        Bootstrap
      </div>,
      <div className='project-div-list-item'>
        <CSS3Icon fill='white' width={40} style={{ background: '' }} />
        CSS3
      </div>,
    ],
    liveLink: 'https://orj-nextbook.herokuapp.com/',
    githubLink: 'https://github.com/orjames/nextbook',
  },
  {
    id: 2,
    description:
      "Have you ever been in a situation where you know you want to get dinner but have no idea where you want to go? Your friend offers up a weak 'I'm good with anything.' Hunger and indecisiveness end here. Nextbite is a full-stack app using the MERN stack (MongoDB with Mongoose, Express, React, and Node.js). The app allows users to browse their feed for photos of food from local restaurants for what looks good for their next bite. Think Instagram for local eateries.",
    name: 'nextbite',
    imgUrl: 'dogPlaceholder.jpg',
    technologiesUsed: [
      <div className='project-div-list-item'>
        <TypeScriptIcon fill='white' width={40} style={{ background: '' }} />
        TypeScript
      </div>,
      <div className='project-div-list-item'>
        <NodeJSIcon fill='white' width={40} style={{ background: '' }} />
        Node.js
      </div>,
      <div className='project-div-list-item'>
        <ExpressIcon fill='white' width={40} style={{ background: '' }} />
        Express.js
      </div>,
      <div className='project-div-list-item'>
        <MongoDBIcon fill='white' width={40} style={{ background: '' }} />{' '}
        MongoDB
      </div>,
      <div className='project-div-list-item'>
        <MongooseIcon fill='white' width={40} style={{ background: '' }} />
        Mongoose
      </div>,
      <div className='project-div-list-item'>
        <ReactIcon fill='white' width={40} style={{ background: '' }} />
        React
      </div>,
      <div className='project-div-list-item'>
        <JSIcon fill='white' width={40} style={{ background: '' }} />
        JavaScript
      </div>,
      <div className='project-div-list-item'>
        <CloudIcon fill='white' width={40} style={{ background: '' }} />
        Cloudinary
      </div>,
      <div className='project-div-list-item'>
        <HTMLIcon fill='white' width={40} style={{ background: '' }} />
        HTML5
      </div>,
      <div className='project-div-list-item'>
        <CSS3Icon fill='white' width={40} style={{ background: '' }} />
        CSS3
      </div>,
    ],
    liveLink: 'https://nextbite.herokuapp.com/',
    githubLink: 'https://github.com/orjames/nextbite',
  },

  {
    id: 3,
    description:
      "Color complements which lead to many compliments. Complement is a full-stack MERN app (MongoDB with Mongoose, Express, React, and Node.js). It uses full CRUD routes, and three foreign API's. The app allows the user to upload a photo, then it analyzes the photo to pick out the predominant colors, and displays complementary colors. The app can help pick out accents for interior design, website design, or outfit choices.",
    name: 'complement',
    imgUrl: 'complement0.jpg',
    technologiesUsed: [
      <div className='project-div-list-item'>
        <NodeJSIcon fill='white' width={40} style={{ background: '' }} />
        Node.js
      </div>,
      <div className='project-div-list-item'>
        <ExpressIcon fill='white' width={40} style={{ background: '' }} />
        Express.js
      </div>,
      <div className='project-div-list-item'>
        <MongoDBIcon fill='white' width={40} style={{ background: '' }} />{' '}
        MongoDB
      </div>,
      <div className='project-div-list-item'>
        <MongooseIcon fill='white' width={40} style={{ background: '' }} />
        Mongoose
      </div>,
      <div className='project-div-list-item'>
        <ReactIcon fill='white' width={40} style={{ background: '' }} />
        React
      </div>,
      <div className='project-div-list-item'>
        <JSIcon fill='white' width={40} style={{ background: '' }} />
        JavaScript
      </div>,
      <div className='project-div-list-item'>
        <CloudIcon fill='white' width={40} style={{ background: '' }} />
        Cloudinary
      </div>,
      <div className='project-div-list-item'>
        <HTMLIcon fill='white' width={40} style={{ background: '' }} />
        HTML5
      </div>,
      <div className='project-div-list-item'>
        <CSS3Icon fill='white' width={40} style={{ background: '' }} />
        CSS3
      </div>,
      <div className='project-div-list-item'>
        <GithubIcon fill='white' width={40} style={{ background: '' }} />
        Team
      </div>,
    ],
    liveLink: 'https://orj-mern-project.herokuapp.com/',
    githubLink: 'https://github.com/orjames/mernProject',
  },
  {
    id: 4,
    name: 'intejump',
    description:
      'Intejump, a portmanteau of integer and jump, is a static html, css, and javascript based app. The game uses logic to create a board of combinations to either single or double jump to the next slot. The cumulative score is shown, and the goal is to reach the next block by landing on the right slots to sum to the next safe block.',
    imgUrl: 'intejump.jpg',
    technologiesUsed: [
      <div className='project-div-list-item'>
        <JSIcon fill='white' width={40} style={{ background: '' }} />
        JavaScript
      </div>,
      <div className='project-div-list-item'>
        <HTMLIcon fill='white' width={40} style={{ background: '' }} />
        HTML5
      </div>,
      <div className='project-div-list-item'>
        <CSS3Icon fill='white' width={40} style={{ background: '' }} />
        CSS3
      </div>,
      <div className='project-div-list-item'>
        <MaterializeIcon fill='white' width={40} style={{ background: '' }} />
        Materialize
      </div>,
    ],
    liveLink: 'https://orjames.github.io/gameproject/',
    githubLink: 'https://github.com/orjames/gameproject',
  },
  {
    id: 5,
    description:
      "If you're reading this, this is this. Portfolio showcasing projects completed, skills, a resume, and technologies familiar with. Built in React.",
    name: 'personal website',
    imgUrl: 'personalwebsite0.jpg',
    technologiesUsed: [
      <div className='project-div-list-item'>
        <ReactIcon fill='white' width={40} style={{ background: '' }} />
        React
      </div>,
      <div className='project-div-list-item'>
        <JSIcon fill='white' width={40} style={{ background: '' }} />
        JavaScript
      </div>,
      <div className='project-div-list-item'>
        <HTMLIcon fill='white' width={40} style={{ background: '' }} />
        HTML5
      </div>,
      <div className='project-div-list-item'>
        <CSS3Icon fill='white' width={40} style={{ background: '' }} />
        CSS3
      </div>,
    ],
    liveLink: 'www.orjames.com',
    githubLink: 'https://github.com/orjames/personalSite',
  },

  {
    id: 6,
    description:
      'A themed hackathon project set in the dystopian future where the robot apocalypse happened. How will people obtain goods and services once the apocalypse has happened? You guess it! Apocalist. Craigslist for the nightmarish future.',
    name: 'apocalist',
    imgUrl: 'apocalist0.png',
    technologiesUsed: [
      <div className='project-div-list-item'>
        <ReactIcon fill='white' width={40} style={{ background: '' }} />
        React
      </div>,
      <div className='project-div-list-item'>
        <JSIcon fill='white' width={40} style={{ background: '' }} />
        JavaScript
      </div>,
      <div className='project-div-list-item'>
        <HTMLIcon fill='white' width={40} style={{ background: '' }} />
        HTML5
      </div>,
      <div className='project-div-list-item'>
        <CSS3Icon fill='white' width={40} style={{ background: '' }} />
        CSS3
      </div>,
      <div className='project-div-list-item'>
        <GithubIcon fill='white' width={40} style={{ background: '' }} />
        Team
      </div>,
    ],
    liveLink: '',
    githubLink: 'https://github.com/orjames/apocalist',
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeBeenSelected: false,
      modalBeenSelected: false,
      projects: projects,
      currentImageIndex: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
      dropDownSelected: false,
      images: {
        1: [
          'nextbook1.jpg',
          'nextbook2.jpg',
          'nextbook3.jpg',
          'nextbook4.jpg',
          'nextbook5.jpg',
        ],
        2: [
          'nextbitePlaceholder.jpg',
          'nextbitePlaceholder1.jpg',
          'nextbitePlaceholder2.jpg',
          'nextbitePlaceholder3.jpg',
          'nextbitePlaceholder4.jpg',
        ],
        3: ['complement0.jpg', 'complement1.jpg', 'complement2.jpg'],
        4: ['intejump.jpg', 'intejump2.jpg', 'intejump3.jpg'],
        5: [
          'personalwebsiteRecursive.png',
          'personalwebsite0.jpg',
          'personalwebsite1.jpg',
          'personalwebsite2.jpg',
        ],
        6: ['apocalist0.png', 'apocalist1.png', 'apocalist2.png'],
      },
    };
    this.displayResume = this.displayResume.bind(this);
    this.closeResume = this.closeResume.bind(this);
    this.displayModal = this.displayModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide = (projectId) => {
    const images = this.state.images;
    let projectImgs = images[projectId];
    let index = 0;
    const lastIndex = projectImgs.length - 1;
    let currentImageIndex = this.state.currentImageIndex[projectId];
    const shouldResetIndex = currentImageIndex === 0;
    if (shouldResetIndex === true) {
      index = lastIndex;
      this.state.currentImageIndex[projectId] = lastIndex;
      // this.setState({
      //   [currentImageIndex[projectId]]: lastIndex,
      // });
    } else {
      this.state.currentImageIndex[projectId] =
        this.state.currentImageIndex[projectId] - 1;
      // this.setState({
      //   [currentImageIndex[projectId]]:
      //     this.state.currentImageIndex[projectId] - 1,
      // });
      index = this.state.currentImageIndex[projectId];
    }
    this.setState({
      [currentImageIndex[projectId]]: index,
    });
  };

  nextSlide = (projectId) => {
    console.log('nextSlide pressed');
    const images = this.state.images;
    let projectImgs = images[projectId];
    let index = 0;
    const lastIndex = projectImgs.length - 1;
    let currentImageIndex = this.state.currentImageIndex[projectId];
    const shouldResetIndex = currentImageIndex === lastIndex;
    if (shouldResetIndex === true) {
      index = 0;
      this.state.currentImageIndex[projectId] = 0;
      // this.setState({
      //   [currentImageIndex[projectId]: 0,
      // });
    } else {
      this.state.currentImageIndex[projectId] =
        this.state.currentImageIndex[projectId] + 1;
      // this.setState({
      //   [currentImageIndex[projectId]]:
      //     this.state.currentImageIndex[projectId] + 1,
      // });
      index = this.state.currentImageIndex[projectId];
    }
    this.setState({
      [currentImageIndex]: index,
    });
  };

  displayResume = () => {
    this.setState({
      resumeBeenSelected: true,
    });
  };

  closeResume = () => {
    this.setState({
      resumeBeenSelected: false,
    });
  };

  displayModal = () => {
    this.setState({
      modalBeenSelected: true,
    });
  };

  closeModal = (e, classPassed) => {
    this.setState({
      modalBeenSelected: false,
    });
  };

  handleChildClick = (e) => {
    e.stopPropagation();
  };

  openDropDown = () => {
    this.setState({
      dropDownSelected: true,
    });
  };

  closeDropDown = () => {
    this.setState({
      dropDownSelected: false,
    });
  };

  render() {
    const projects = this.state.projects;
    const displayResume = this.displayResume;
    const closeResume = this.closeResume;
    const displayModal = this.displayModal;
    const closeModal = this.closeModal;
    const modalBeenSelected = this.state.modalBeenSelected;
    const resumeBeenSelected = this.state.resumeBeenSelected;
    const handleChildClick = this.handleChildClick;
    const currentImageIndex = this.state.currentImageIndex;
    const previousSlide = this.previousSlide;
    const nextSlide = this.nextSlide;
    const dropDownSelected = this.state.dropDownSelected;
    const openDropDown = this.openDropDown;
    const closeDropDown = this.closeDropDown;
    const images = this.state.images;

    let dropDown;
    if (dropDownSelected) {
      dropDown = (
        <div className='contact-button-div dark'>
          <div className='home-link left' onClick={closeDropDown}>
            <CloseIcon
              fill='#fff'
              width={31}
              className=''
              style={{ marginRight: '0.3rem' }}
            />
          </div>
          <div className='contact-button-sub-div'>
            <button className='home-link' onClick={displayModal}>
              <EmailIcon
                fill='#fff'
                width={14}
                className=''
                style={{ marginRight: '0.5rem' }}
              />
              Contact
            </button>
            <button className='home-link' onClick={displayResume}>
              <ResumeIcon
                fill='#fff'
                width={14}
                className=''
                style={{ marginRight: '0.4rem', marginLeft: '0.1rem' }}
              />
              Resume
            </button>
          </div>
        </div>
      );
    } else {
      dropDown = (
        <div className='contact-button-div'>
          <div className='home-link' onClick={openDropDown}>
            <BarsIcon
              fill='#fff'
              width={27}
              className=''
              style={{ marginTop: '0.15rem', marginLeft: '0.1rem' }}
            />
          </div>
        </div>
      );
    }
    return (
      <Router>
        <div className='app'>
          {dropDown}
          <div>
            <BottomBar />
          </div>
          <Route
            path='/'
            exact
            render={(props) => (
              <Home
                projects={projects}
                resumeBeenSelected={resumeBeenSelected}
                modalBeenSelected={modalBeenSelected}
                handleChildClick={handleChildClick}
                displayModal={displayModal}
                displayResume={displayResume}
                closeResume={closeResume}
                closeModal={closeModal}
                currentImageIndex={currentImageIndex}
                previousSlide={previousSlide}
                nextSlide={nextSlide}
                images={images}
                {...props}
              />
            )}
          />
          <Route
            path='/projects/'
            exact
            render={(props) => <Projects projects={projects} {...props} />}
          />
          <Route path='/GoT' render={(props) => <GoT {...props} />} />
        </div>
      </Router>
    );
  }
}

export default App;
