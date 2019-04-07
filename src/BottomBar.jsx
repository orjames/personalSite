import React from 'react';
import './BottomBar.css';
import CoffeeIcon from './icons/CoffeeIcon';
import ReactIcon from './icons/ReactIcon';

const BottomBar = (props) => {
  return (
    <div className='BottomBarDiv'>
      <span>
        Developed with{' '}
        <ReactIcon
          fill='#fff'
          width={15}
          className=''
          style={{ background: '' }}
        />{' '}
        and{' '}
        <CoffeeIcon
          fill='#fff'
          width={15}
          className=''
          style={{ background: '' }}
        />{' '}
        by Owen R. James (engineer, not designer)
      </span>
    </div>
  );
};

export default BottomBar;
