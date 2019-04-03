import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <div className="App">
        <h1>How to Contact Us for Pain</h1>
        <ul>
          <li>666-666-6666</li>
          <li>PainJames@gmail.com</li>
          <li>WhatsApp: broken<span role='img' aria-label='emoji' aria-labelledby='orj'>😒</span></li>
          <li>Address: 1 styx River</li>
        </ul>
      </div>
    );
  }
}

export default Contact