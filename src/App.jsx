import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';
import BottomBar from './BottomBar';
//Components we put into our render
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CSS3Icon from './icons/CSS3Icon';
import ResumeIcon from './icons/ResumeIcon';
import EmailIcon from './icons/EmailIcon';
import HTMLIcon from './icons/HTMLIcon';
import JSIcon from './icons/JSIcon';

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
      'Intejump is a static html, css, and javascript based app. The game uses logic to create a board of combinations to either single or double jump to the next slot. The cumulative score is shown, and the goal is to reach the next block by landing on the right slots to sum to the next safe block.',
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
      "Nextbook is a full-stack app using Postgres (PSQL), Express, Node.js, and EJS. It reccommends users their next book - based on a users selected genres, and books that they've read and rated in the app. The app uses 20 full crud routes, and two foreign API's.",
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
    id: 3,
    description:
      'Nextbite is a full-stack app using the MERN stack (MongoDB with Mongoose, Express, React, and Node.js). The app allows users to browse thier feed for photos of food from local restaurants for what looks good for their next bite. Restaurants pay to post deals and photos.',
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
      "Complement is a full-stack MERN app (MongoDB with Mongoose, Express, React, and Node.js). It uses full CRUD routes, and three foreign API's. The app allows the user to upload a photo, then it analyzes the photo to pick out the predominant colors, and displays complementary colors. The app can help pick out accents for interior design, website design, or outfit choices.",
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
    description: 'Portfolio showcasing projects completed, ',
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
    id: 5,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, voluptatem debitis veniam veritatis, laudantium cupiditate fuga possimus quisquam velit soluta fugiat. Inventore ea officia aspernatur itaque nisi. Minima, laborum corporis?',
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
            <Link to='/resume/' className='home-link'>
              <ResumeIcon
                fill='#fff'
                width={14}
                className=''
                style={{ marginRight: '0.4rem', marginLeft: '0.1rem' }}
              />
              Resume
            </Link>
          </div>
          <div>
            <BottomBar />
          </div>
          <Route
            path='/'
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
          <Route
            path='/resume/'
            exact
            render={(props) => (
              <Resume
                // projects={projects}
                // nameBeenSelected={nameBeenSelected}
                // displayedProjects={displayedProjects}
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
