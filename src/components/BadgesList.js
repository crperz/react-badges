import React, { useState, useMemo } from 'react';
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

// Custom Hooks
// It must begin with the keyword 'use'
const useSearchBadges = badges => {
  const [query, setQuery] = useState('');
  const [filteredBadges, setFilteredBadges] = useState(badges);

  /*
  Returns a memoized value.

  Pass a “create” function and an array of dependencies. useMemo will only recompute the memoized value
  when one of the dependencies has changed. This optimization helps to avoid expensive calculations on
  every render.

  If no array is provided, a new value will be computed on every render.
  */
  useMemo(() => {
    const filtered = badges.filter(badge =>
      `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredBadges(filtered);
  }, [badges, query]);

  return { filteredBadges, query, setQuery };
};

const BadgesList = ({ badges }) => {
  const { filteredBadges, query, setQuery } = useSearchBadges(badges);

  const handleChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div className="BadgesList">
      <div className="form-group">
        <label htmlFor="filter">Filter Badges</label>
        <input
          className="form-control"
          id="filter"
          onChange={handleChange}
          type="text"
          value={query}
        />
      </div>

      <ul className="list-unstyled">
        {filteredBadges.reverse().map(badge => (
          <li key={badge.id}>
            <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
              <BadgeListItem badge={badge} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BadgesList;
