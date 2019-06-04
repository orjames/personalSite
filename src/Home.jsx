import React, { Component } from 'react';
import Projects from './Projects';
import Skills from './Skills';
import './Home.css';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import InstagramIcon from './icons/InstagramIcon';
import DownIcon from './icons/DownIcon';
import ResumeCloseButton from './ResumeCloseButton';
import ContactModalClose from './ContactModalClose';
import ResumeIcon from './icons/ResumeIcon';
import EmailIcon from './icons/EmailIcon';
import RightIcon from './icons/RightIcon';
import LeftIcon from './icons/LeftIcon';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let resume = null;
    if (this.props.resumeBeenSelected) {
      resume = <ResumeCloseButton closeResume={this.props.closeResume} />;
    } else {
      resume = null;
    }

    let modal = null;
    if (this.props.modalBeenSelected) {
      modal = (
        <div
          className='contact-modal-div'
          onClick={e => this.props.closeModal(e, 'contact-modal-div')}
        >
          <ContactModalClose
            closeModal={this.props.closeModal}
            handleChildClick={this.props.handleChildClick}
          />
        </div>
      );
    } else {
      modal = null;
    }

    return (
      <div className='home'>
        <div>{modal}</div>
        <div className='page-title'>
          <div className='page-title-sub-div'>
            <div className='home-header fadein'>Owen R. James</div>
            <div className='home-sub-header fadein'>Software Engineer</div>
            <div className='home-buttons-header fadein2'>
              <button
                className='home-link'
                onClick={this.props.displayModal}
                style={{ margin: '0 0.5rem' }}
              >
                <EmailIcon
                  fill='#fff'
                  width={14}
                  className=''
                  style={{ marginRight: '0.5rem' }}
                />
                Contact
              </button>
              <button
                className='home-link '
                onClick={this.props.displayResume}
                style={{ margin: '0 0.5rem' }}
              >
                <ResumeIcon
                  fill='#fff'
                  width={14}
                  className=''
                  style={{ marginRight: '0.4rem', marginLeft: '0.1rem' }}
                />
                Resume
              </button>
            </div>
            <div className='home-bio fadein2'>
              Full-Stack Software Engineer. Experience in all tiers of app
              development. I earned a BS from Cal Poly and MS from UC Berkeley
              in Engineering. I'm an avid learner and a problem solver by
              nature. When not geeking out, I enjoy spending time with dogs and
              exploring the Bay Area.
              <br /> Please, scroll down to see my projects and skills!
            </div>
            <div className='home-icon-div fadein2'>
              <a href='https://github.com/orjames' className='home-link'>
                <GithubIcon
                  fill='#fff'
                  width={35}
                  className=''
                  style={{ padding: '0.5rem 0' }}
                />
              </a>
              <a
                href='https://www.linkedin.com/in/owenrjames/'
                className='home-link'
              >
                <LinkedinIcon
                  fill='#fff'
                  width={35}
                  className=''
                  style={{ padding: '0.5rem 1rem' }}
                />
              </a>
              <a
                href='https://www.instagram.com/sfdogsofficial/'
                className='home-link'
              >
                <InstagramIcon
                  fill='#fff'
                  width={35}
                  className=''
                  style={{ padding: '0.5rem 0' }}
                />
              </a>
            </div>
            <div className='home-bio-lower'>
              Take a look at my most recent App <br />
              <RightIcon
                fill='#fff'
                width={10}
                className='left-bounce'
                style={{ marginRight: '0.7rem' }}
              />
              <a
                className='home-link button'
                href='https://nextbite.herokuapp.com/'
              >
                nextbite
              </a>
              <LeftIcon
                fill='#fff'
                width={10}
                className='right-bounce'
                style={{ marginLeft: '0.6rem' }}
              />
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
        <div className='resume-div'>{resume}</div>
        <div className='projects-title-div fadein2'>projects</div>
        <Projects
          projects={this.props.projects}
          currentImageIndex={this.props.currentImageIndex}
          nextSlide={this.props.nextSlide}
          previousSlide={this.props.previousSlide}
          images={this.props.images}
          {...this.props}
        />
        <Skills />
        <div className='GoTNav'>
          <Link to='/GoT'>GoT Pool</Link>
        </div>
      </div>
    );
  }
}

export default Home;
