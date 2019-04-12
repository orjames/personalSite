import React from 'react';

const ImageSlide = ({ url }) => {
  return (
    <div className='image-slide'>
      {' '}
      <img
        src={require(`./images/${url}`)}
        alt='project'
        className='project-image'
        width='280px'
        style={{ borderRadius: '0.3rem' }}
      />
    </div>
  );
};

export default ImageSlide;
