import React from 'react';
import './CloseButton.css';
import ContactModal from './ContactModal';
import OwenPhoto from './images/Owen-City.jpg';
import XIcon from './icons/XIcon';

const ContactModalClose = (props) => {
  return (
    <div
      className='fadein modal-inner-div'
      onClick={(e) => {
        props.handleChildClick(e);
      }}
    >
      <div className='modal-inner-inner-div'>
        <div onClick={() => props.closeModal()} className='delete'>
          <XIcon width={35} fill={'white'} />
        </div>
        <img src={OwenPhoto} alt='Owen R.' className='modal-image' />
        <ContactModal closeModal={props.closeModal} />
      </div>
    </div>
  );
};

export default ContactModalClose;
