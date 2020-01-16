import React from 'react';

import Gravatar from './Gravatar';

import './styles/BadgesListItem.css';

const BadgesListItem = ({ badge }) => {
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

export default BadgesListItem;
