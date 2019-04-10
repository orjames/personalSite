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
          onClick={(e) => this.props.closeModal(e, 'contact-modal-div')}
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
            <div className='home-header'>Owen R. James</div>
            <div className='home-sub-header'>Software Engineer</div>
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
        <div className='resume-div'>{resume}</div>
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
