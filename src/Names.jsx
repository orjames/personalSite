import React from 'react';
import './Names.css';

const Names = (props) => {
  const names = props.names.map((name, index) => {
    if (props.chosenName === name) {
      return (
        <div>
          <span
            key={index}
            className='name-nav-item chosen'
            value={name}
            onClick={props.selectName}
          >
            {name}
          </span>
        </div>
      );
    } else {
      return (
        <div>
          <span
            key={index}
            className='name-nav-item'
            value={name}
            onClick={props.selectName}
          >
            {name}
          </span>
        </div>
      );
    }
  });
  return <div className='names-div'>{names}</div>;
};

export default Names;
