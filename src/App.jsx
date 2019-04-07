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

const names = [
  'intejump',
  'nextbook',
  'complement',
  'nextbite',
  'personal website',
  'apocalist',
];
const projects = [
  {
    id: 1,
    name: 'intejump',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, voluptatem debitis veniam veritatis, laudantium cupiditate fuga possimus quisquam velit soluta fugiat. Inventore ea officia aspernatur itaque nisi. Minima, laborum corporis?',
    imgUrl: 'https://loremflickr.com/320/240',
    technologiesUsed: [
      <CSS3Icon fill='red' width={40} style={{ background: '' }} />,
      <CSS3Icon fill='orange' width={40} style={{ background: '' }} />,
    ],
    liveLink: '',
    githubLink: '',
  },

  {
    id: 2,
    name: 'nextbook',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, voluptatem debitis veniam veritatis, laudantium cupiditate fuga possimus quisquam velit soluta fugiat. Inventore ea officia aspernatur itaque nisi. Minima, laborum corporis?',
    imgUrl: 'https://loremflickr.com/320/240',
    technologiesUsed: '',
    liveLink: '',
    githubLink: '',
  },
  {
    id: 3,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, voluptatem debitis veniam veritatis, laudantium cupiditate fuga possimus quisquam velit soluta fugiat. Inventore ea officia aspernatur itaque nisi. Minima, laborum corporis?',
    name: 'nextbite',
    imgUrl: 'https://loremflickr.com/320/240',
    technologiesUsed: '',
    liveLink: '',
    githubLink: '',
  },

  {
    id: 4,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, voluptatem debitis veniam veritatis, laudantium cupiditate fuga possimus quisquam velit soluta fugiat. Inventore ea officia aspernatur itaque nisi. Minima, laborum corporis?',
    name: 'complement',
    imgUrl: 'https://loremflickr.com/320/240',
    technologiesUsed: '',
    liveLink: '',
    githubLink: '',
  },

  {
    id: 5,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, voluptatem debitis veniam veritatis, laudantium cupiditate fuga possimus quisquam velit soluta fugiat. Inventore ea officia aspernatur itaque nisi. Minima, laborum corporis?',
    name: 'personal website',
    imgUrl: 'https://loremflickr.com/320/240',
    technologiesUsed: '',
    liveLink: '',
    githubLink: '',
  },

  {
    id: 5,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, voluptatem debitis veniam veritatis, laudantium cupiditate fuga possimus quisquam velit soluta fugiat. Inventore ea officia aspernatur itaque nisi. Minima, laborum corporis?',
    name: 'apocalist',
    imgUrl: 'https://loremflickr.com/320/240',
    technologiesUsed: '',
    liveLink: '',
    githubLink: '',
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: projects,
      names: names,
      displayedProjects: [],
      nameBeenSelected: false,
    };
    // this.searchProjects = this.searchProjects.bind(this);
  }

  // searchProjects = (name) => {
  //   let projects = this.state.projects;
  //   let found = false;
  //   let projectsInName = [];
  //   console.log(name);
  //   for (let i = 0; i < projects.length; i++) {
  //     console.log(projects[i].name.toLowerCase());
  //     console.log(name);
  //     if (projects[i].name.toLowerCase() === name) {
  //       found = true;
  //       console.log('found');
  //       if (found) {
  //         projectsInName.push(projects[i]);
  //         console.log('pushed to projectsInName');
  //       }
  //     }
  //   }
  //   this.setState({
  //     displayedProjects: projectsInName,
  //     nameBeenSelected: true,
  //   });
  // };

  render() {
    const projects = this.state.projects;
    const names = this.state.names;
    const searchProjects = this.searchProjects;
    const displayedProjects = this.state.displayedProjects;
    const nameBeenSelected = this.state.nameBeenSelected;

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
            <a href='#' className='home-link'>
              <ResumeIcon
                fill='#fff'
                width={14}
                className=''
                style={{ marginRight: '0.4rem', marginLeft: '0.1rem' }}
              />
              Resume
            </a>
          </div>
          <div>
            <BottomBar />
          </div>
          <Route
            path='/home'
            exact
            render={(props) => (
              <Home
                projects={projects}
                names={names}
                searchProjects={searchProjects}
                nameBeenSelected={nameBeenSelected}
                displayedProjects={displayedProjects}
                {...props}
              />
            )}
          />
          <Route path='/contact' component={Contact} />
          <Route
            path='/projects/'
            exact
            render={(props) => (
              <Projects
                projects={projects}
                nameBeenSelected={nameBeenSelected}
                displayedProjects={displayedProjects}
                {...props}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
