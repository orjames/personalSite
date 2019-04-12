import React from 'react';
import './CloseButton.css';

const ContactModal = (props) => {
  return (
    <div className='form-div'>
      <div className='modal-title-div'>contact</div>
      <form name='contact' netlify>
        <div className='input-div'>
          <input
            type='text'
            name='name'
            className='input'
            placeholder='name...'
          />
        </div>
        <div className='input-div'>
          <input
            type='email'
            name='email'
            className='input'
            placeholder='email...'
          />
        </div>
        <div className='input-div'>
          <textarea
            type='text'
            name='message'
            className='input'
            placeholder='message...'
          />
        </div>
        <div className='input-div'>
          <button type='submit' className='btn btn-1 btn-1e'>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactModal;
