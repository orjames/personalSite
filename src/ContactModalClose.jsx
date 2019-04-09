import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './CloseButton.css';
import ContactModal from './ContactModal';

const ContactModalClose = (props) => {
  return (
    <div className='fadein'>
      <div onClick={() => props.closeResume()} className='delete'>
        <FontAwesomeIcon icon={faTimesCircle} size='2x' />
      </div>
      <div>
        <ContactModal />
        <span className='resume-close-link'>close</span>
      </div>
    </div>
  );
};

export default ContactModalClose;
