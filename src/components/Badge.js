import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

const Badge = () => {
  return (
    <div className="Badge">
      <div className="Badge__header">
        <img src={confLogo} alt="Conf Logo" />
      </div>

      <div className="Badge__section-name">
        <img
          className="Badge__avatar"
          src="https://www.gravatar.com/avatar/HASH"
          alt="Avatar"
        />
        <h1>
          Cristian <br /> Pérez
        </h1>
      </div>

      <div className="Badge__section-info">
        <h3>Fullstack Developer</h3>
        <div>@crperz</div>
      </div>

      <div className="Badge__footer">#reactconf</div>
    </div>
  );
};

export default Badge;
