import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './ResumeCloseButton.css';
import Resume from './Resume';

const ResumeCloseButton = (props) => {
  return (
    <div className='fadein'>
      <div onClick={() => props.closeResume()} className='delete'>
        <FontAwesomeIcon icon={faTimesCircle} size='2x' />
      </div>
      <div>
        <Resume />
        <span className='resume-close-link'>close</span>
      </div>
    </div>
  );
};

export default ResumeCloseButton;
