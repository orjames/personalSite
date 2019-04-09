import React, { Component } from 'react';
import Projects from './Projects';
import Skills from './Skills';
import './Home.css';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import InstagramIcon from './icons/InstagramIcon';
import DownIcon from './icons/DownIcon';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenName: '',
    };
    // this.selectName = this.selectName.bind(this);
  }

  // selectName = (e) => {
  //   this.setState({
  //     chosenName: e.target.getAttribute('value'),
  //   });
  //   this.props.searchProjects(e.target.getAttribute('value'));
  // };

  render() {
    return (
      <div className='home'>
        <div className='page-title'>
          <div className='page-title-sub-div'>
            <div className='home-header'>Owen R. James</div>
            <div className='home-sub-header'>Software Engineer</div>
            {/* <img src={OwenPhoto} alt='Owen-Photo' className='home-image' /> */}
            <div className='home-bio'>
              Full-Stack Software Engineer. I have both front-end as well as
              back-end knowledge and am comfortable working on all tiers of app
              development. I earned a BS from Cal Poly and MS from UC Berkeley.
              When not geeking out, I enjoy spending time with dogs and
              exploring the Bay Area. Please, scroll down to see my projects and
              skills!
            </div>
            <div className='home-icon-div'>
              <a href='#' className='home-link'>
                <GithubIcon
                  fill='#fff'
                  width={35}
                  className=''
                  style={{ padding: '0.5rem 0' }}
                />
              </a>
              <a href='#' className='home-link'>
                <LinkedinIcon
                  fill='#fff'
                  width={35}
                  className=''
                  style={{ padding: '0.5rem 1rem' }}
                />
              </a>
              <a href='#' className='home-link'>
                <InstagramIcon
                  fill='#fff'
                  width={35}
                  className=''
                  style={{ padding: '0.5rem 0' }}
                />
              </a>
            </div>
            <div className='down-arrow-div'>
              <DownIcon
                fill='#fff'
                width={40}
                className='bounce'
                style={{ marginRight: '-0.8rem' }}
              />
            </div>
          </div>
        </div>
        {/* <div>
          <Names
            names={this.props.names}
            selectName={this.selectName}
            chosenName={this.state.chosenName}
            {...this.props}
          />
        </div> */}
        <div className='projects-title-div'>projects</div>
        <Projects
          projects={this.props.projects}
          nameBeenSelected={this.props.nameBeenSelected}
          {...this.props}
        />
        <Skills />
      </div>
    );
  }
}

export default Home;
