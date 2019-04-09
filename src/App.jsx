import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import BottomBar from './BottomBar';
//Components we put into our render
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CSS3Icon from './icons/CSS3Icon';
import ResumeIcon from './icons/ResumeIcon';
import EmailIcon from './icons/EmailIcon';
import HTMLIcon from './icons/HTMLIcon';
import JSIcon from './icons/JSIcon';
import Resume from './Resume';

const projects = [
  {
    id: 1,
    name: 'intejump',
    description:
      'Intejump, a portmanteau of integer and jump, is a static html, css, and javascript based app. The game uses logic to create a board of combinations to either single or double jump to the next slot. The cumulative score is shown, and the goal is to reach the next block by landing on the right slots to sum to the next safe block.',
    imgUrl: 'intejump.jpg',
    technologiesUsed: [
      <HTMLIcon fill='white' width={40} style={{ background: '' }} />,
      <CSS3Icon fill='white' width={40} style={{ background: '' }} />,
      <JSIcon fill='white' width={40} style={{ background: '' }} />,
    ],
    liveLink: '',
    githubLink: '',
  },

  {
    id: 2,
    name: 'nextbook',
    description:
      "Me: 'I want a practical experience using SQL.' Also me: 'What book should I read next?' Enter Nextbook. Nextbook is a full-stack app using Postgres (PSQL), Express, Node.js, and EJS. It reccommends users their next book - based on a users selected genres, and books that they've read and rated in the app. The app uses 20 full crud routes, and two foreign API's.",
    imgUrl: 'intejump.jpg',
    technologiesUsed: [
      <HTMLIcon fill='white' width={40} style={{ background: '' }} />,
      <CSS3Icon fill='white' width={40} style={{ background: '' }} />,
      <JSIcon fill='white' width={40} style={{ background: '' }} />,
    ],
    liveLink: 'https://orjames.github.io/gameproject/',
    githubLink: 'https://github.com/orjames/gameproject',
  },
  {
    id: 3,
    description:
      "Have you ever been in a situation where you know you want to get dinner but have no idea where you want to go? Your friend offers up a weak 'I'm good with anything.' Hunger and indecisiveness end here. Nextbite is a full-stack app using the MERN stack (MongoDB with Mongoose, Express, React, and Node.js). The app allows users to browse their feed for photos of food from local restaurants for what looks good for their next bite. Think Instagram for local eateries.",
    name: 'nextbite',
    imgUrl: 'intejump.jpg',
    technologiesUsed: [
      <HTMLIcon fill='white' width={40} style={{ background: '' }} />,
      <CSS3Icon fill='white' width={40} style={{ background: '' }} />,
      <JSIcon fill='white' width={40} style={{ background: '' }} />,
    ],
    liveLink: '',
    githubLink: '',
  },

  {
    id: 4,
    description:
      "Color complements which lead to many compliments. Complement is a full-stack MERN app (MongoDB with Mongoose, Express, React, and Node.js). It uses full CRUD routes, and three foreign API's. The app allows the user to upload a photo, then it analyzes the photo to pick out the predominant colors, and displays complementary colors. The app can help pick out accents for interior design, website design, or outfit choices.",
    name: 'complement',
    imgUrl: 'intejump.jpg',
    technologiesUsed: [
      <HTMLIcon fill='white' width={40} style={{ background: '' }} />,
      <CSS3Icon fill='white' width={40} style={{ background: '' }} />,
      <JSIcon fill='white' width={40} style={{ background: '' }} />,
    ],
    liveLink: '',
    githubLink: '',
  },

  {
    id: 5,
    description:
      'Portfolio showcasing projects completed, skills, a resume, and technologies familiar with. Built in React.',
    name: 'personal website',
    imgUrl: 'intejump.jpg',
    technologiesUsed: [
      <HTMLIcon fill='white' width={40} style={{ background: '' }} />,
      <CSS3Icon fill='white' width={40} style={{ background: '' }} />,
      <JSIcon fill='white' width={40} style={{ background: '' }} />,
    ],
    liveLink: '',
    githubLink: '',
  },

  {
    id: 6,
    description:
      'A themed hackathon project set in the dystopian future where the robot apocalypse happened. How will people obtain goods and services once the apocalypse has happened? You guess it! Apocalist. Craigslist for the nightmarish future.',
    name: 'apocalist',
    imgUrl: 'intejump.jpg',
    technologiesUsed: [
      <HTMLIcon fill='white' width={40} style={{ background: '' }} />,
      <CSS3Icon fill='white' width={40} style={{ background: '' }} />,
      <JSIcon fill='white' width={40} style={{ background: '' }} />,
    ],
    liveLink: '',
    githubLink: '',
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeBeenSelected: false,
      projects: projects,
    };
    this.displayResume = this.displayResume.bind(this);
    this.closeResume = this.closeResume.bind(this);
  }

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

  render() {
    const projects = this.state.projects;
    const displayResume = this.displayResume;
    const closeResume = this.closeResume;
    const resumeBeenSelected = this.state.resumeBeenSelected;

    return (
      <Router>
        <div className='app'>
          <div className='contact-button-div'>
            <a href='#' className='home-link'>
              <EmailIcon
                fill='#fff'
                width={14}
                className=''
                style={{ marginRight: '0.5rem' }}
              />
              Contact
            </a>
            {/* <Link to='/resume/' className='home-link' onClick={displayResume}> */}
            <a className='home-link' onClick={displayResume}>
              <ResumeIcon
                fill='#fff'
                width={14}
                className=''
                style={{ marginRight: '0.4rem', marginLeft: '0.1rem' }}
              />
              Resume
            </a>
            {/* </Link> */}
          </div>
          <div>
            <BottomBar />
          </div>
          <div>
            {/* <Route
              path='/resume/'
              exact
              render={(props) => (
                <Resume closeResume={closeResume} {...props} />
              )}
            /> */}
          </div>
          <Route
            path='/'
            exact
            render={(props) => (
              <Home
                projects={projects}
                resumeBeenSelected={resumeBeenSelected}
                {...props}
              />
            )}
          />
          <Route path='/contact' component={Contact} />
          <Route
            path='/projects/'
            exact
            render={(props) => <Projects projects={projects} {...props} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
