import React from 'react';

import './styles/BadgesList.css';

const BadgeListItem = ({ badge }) => {
  return (
    <div className="BadgesListItem">
      <img
        className="BadgesListItem__avatar"
        src={badge.avatarUrl}
        alt={`${badge.firstName} ${badge.lastName}`}
      />
      <div>
        <strong>
          {badge.firstName} {badge.lastName}
        </strong>
        <br />@{badge.twitter}
        <br />
        {badge.jobTitle}
      </div>
    </div>
  );
};

const BadgesList = ({ badges }) => {
  return (
    <div className="BadgesList">
      <ul className="list-unstyled">
        {badges.map(badge => (
          <li key={badge.id}>
            <BadgeListItem badge={badge} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BadgesList;
