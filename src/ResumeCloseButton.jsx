import React from 'react';
import './CloseButton.css';
import Resume from './Resume';
import XIcon from './icons/XIcon';

const ResumeCloseButton = (props) => {
  return (
    <div className='fadein'>
      <div onClick={() => props.closeResume()} className='delete'>
        <XIcon width={35} />
      </div>
      <div>
        <Resume />
        <span className='resume-close-link'>close</span>
      </div>
    </div>
  );
};

export default ResumeCloseButton;
