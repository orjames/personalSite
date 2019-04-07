import React from 'react';

const CSS3Icon = ({
  style = {},
  fill = '#fff',
  width = '100%',
  className = '',
  viewBox = '0 0 512 512',
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    className={`svg-icon ${className || ''}`}
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
  >
    <path
      fill={fill}
      d='M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z'
    />
  </svg>
);

export default CSS3Icon;
