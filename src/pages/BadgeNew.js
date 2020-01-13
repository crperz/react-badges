import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

const BadgeNew = () => {
  return (
    <div>
      <Navbar />
      <div className="BadgeNew__hero">
        <img className="img-fluid" src={header} alt="Logo" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              avatarUrl="https://www.gravatar.com/avatar/HASH"
              firstName="Cristian"
              jobTitle="Fullstack Developer"
              lastName="Pérez"
              twitter="crperz"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeNew;
