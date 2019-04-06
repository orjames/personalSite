import React, { Component } from 'react';
import Projects from './Projects';
import Names from './Names';
import Skills from './Skills';
import './Home.css';

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
          <h1 className='home-header'>
            Owen R. James
            <br />
            <span className='home-sub-header'>Software Engineer</span>
          </h1>
        </div>
        <div>
          <Names
            names={this.props.names}
            selectName={this.selectName}
            chosenName={this.state.chosenName}
            {...this.props}
          />
        </div>
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
