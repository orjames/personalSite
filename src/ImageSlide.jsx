import React from 'react';

const ImageSlide = ({ url }) => {
  const styles = {
    backgroundImage: require(`./images/${url}`),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className='image-slide' style={styles}>
      {' '}
      <img
        src={require(`./images/${url}`)}
        alt='project'
        className='project-image'
        width='280px'
      />
    </div>
  );
};

export default ImageSlide;
