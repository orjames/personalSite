import React, { Component } from 'react';
import Projects from './Projects';
import Names from './Names';
import Skills from './Skills';
import './Home.css';
import OwenPhoto from './images/Owen-City.jpg';
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
              Full-Stack Software Engineer. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Pariatur voluptate similique
              voluptatum perferendis, consequatur incidunt. Incidunt, nisi eius
              vero tenetur cumque quae, harum quo veritatis blanditiis dolorum,
              quos quasi praesentium?
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
