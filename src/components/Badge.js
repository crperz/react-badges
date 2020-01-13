import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

const Badge = ({ avatarUrl, firstName, jobTitle, lastName, twitter }) => {
  return (
    <div className="Badge">
      <div className="Badge__header">
        <img src={confLogo} alt="Conf Logo" />
      </div>

      <div className="Badge__section-name">
        <img className="Badge__avatar" src={avatarUrl} alt="Avatar" />
        <h1>
          {firstName} <br /> {lastName}
        </h1>
      </div>

      <div className="Badge__section-info">
        <h3>{jobTitle}</h3>
        <div>@{twitter}</div>
      </div>

      <div className="Badge__footer">#reactconf</div>
    </div>
  );
};

export default Badge;
