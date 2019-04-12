import React from 'react';
import './CloseButton.css';
import Resume from './Resume';
import XIcon from './icons/XIcon';

const ResumeCloseButton = (props) => {
  return (
    <div className='fadein resume-inner-div'>
      <div onClick={() => props.closeResume()} className='delete-resume'>
        <XIcon
          width={35}
          onClick={() => props.closeResume()}
          className='delete-resume'
          fill={'gray'}
        />
      </div>
      <Resume />
      <div style={{ marginBottom: '1rem', marginTop: '0.2rem' }}>
        <span
          className='resume-close-link home-link'
          onClick={() => props.closeResume()}
        >
          close
        </span>
      </div>
    </div>
  );
};

export default ResumeCloseButton;
