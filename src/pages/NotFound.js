import React from 'react';

import './styles/NotFound.css';
import notFoundImage from '../images/img404.svg';

const NotFound = () => {
  return (
    <div className="NotFound">
      <img className="img-fluid mb-2" src={notFoundImage} alt="Not Found" />
      <h1>404 Not Found</h1>
    </div>
  );
};

export default NotFound;
