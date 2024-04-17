import React from 'react';
import appLogo from '../assets/images/graphQl.png'
import './components.css'

const Rotating = () => {
  return (
    <div className="loading-container">
    <div className="loading-text">
    Contacting Server
        <span className="loading-dots">...</span>
         </div>
    <div
      className="loading-image"
      style={{
        width: '100px', 
        height: '100px',
        background: `url(${appLogo}) center center no-repeat`,
        backgroundSize: 'contain',
        animation: 'rotateAndScale 1s linear infinite', 
      }}
    ></div>
  </div>
  );
}

export default Rotating;
