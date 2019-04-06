import React from 'react';
import './Contact.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Contact = (props) => {
  return (
    <div className='contact-div'>
      <Link to='/home'>
        <div className='pageTitle'>
          <h1 className='ApocalistHeader'>Home</h1>
        </div>
      </Link>

      <div className=''>
        <br />
        <form>
          <label className='' htmlFor=''>
            Name:{' '}
          </label>
          <input className='' type='text' name='' id='' placeholder='' />
          <br />
          <label className='' htmlFor=''>
            Item:{' '}
          </label>
          <input className='' type='text' name='' id='' placeholder='' />
          <br />
          <button className='' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
