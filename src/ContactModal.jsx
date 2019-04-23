import React, { Component } from 'react';
import './CloseButton.css';
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class ContactModal extends Component {
  constructor(props) {
    super(props);

    this.state = { name: '', email: '', message: '' };
  }

  handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <div className='form-div'>
        <div className='modal-title-div'>contact</div>
        <form
          name='contact'
          data-netlify='true'
          data-netlify-honeypot='bot-field'
          onSubmit={this.handleSubmit}
        >
          <input type='hidden' name='form-name' value='contact' />
          <div className='input-div'>
            <input
              type='text'
              name='name'
              className='input'
              placeholder='name...'
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div className='input-div'>
            <input
              type='email'
              name='email'
              className='input'
              placeholder='email...'
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className='input-div'>
            <textarea
              name='message'
              className='input'
              placeholder='message...'
              value={message}
              onChange={this.handleChange}
            />
          </div>
          <div className='input-div'>
            <button type='submit' className='btn btn-1 btn-1e'>
              send
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactModal;

// const encode = (data) => {
//   return Object.keys(data)
//       .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//       .join("&");
// }

// class ContactForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: "", email: "", message: "" };
//   }

//   /* Here’s the juicy bit for posting the form submission */

//   render() {
//     const { name, email, message } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <p>
//           <label>
//             Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
//           </label>
//         </p>
//         <p>
//           <label>
//             Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
//           </label>
//         </p>
//         <p>
//           <label>
//             Message: <textarea name="message" value={message} onChange={this.handleChange} />
//           </label>
//         </p>
//         <p>
//           <button type="submit">Send</button>
//         </p>
//       </form>
//     );
//   }
// }
