import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgesList.css';
import Gravatar from './Gravatar';

const BadgeListItem = ({ badge }) => {
  return (
    <div className="BadgesListItem">
      <Gravatar className="BadgesListItem__avatar" email={badge.email} />
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
        {badges.reverse().map(badge => (
          <li key={badge.id}>
            <Link
              className="text-reset text-decoration-none"
              to={`/badges/${badge.id}/edit`}
            >
              <BadgeListItem badge={badge} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BadgesList;
