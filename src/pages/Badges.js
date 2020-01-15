import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import PageLoading from '../pages/PageLoading';
import PageError from '../pages/PageError';

import api from '../api';

const Badges = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /*
  // componentDidMount - componentDidUpdate
  useEffect is a React hook where you can apply side effects, for example, getting data from server.

  The first argument is a callback that will be fired after browser layout and paint. Therefore it does not block the painting process of the browser.

  The second argument is an array of values (usually props).
  - If any of the value in the array changes, the callback will be fired after every render.
  - When it's not present, the callback will always be fired after every render.
  - When it's an empty list, the callback will only be fired once, similar to componentDidMount.

  // componentWillUnmount
  When you return a function in the callback passed to useEffect, the returned function will be called before the component is removed from the UI.
  */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.badges.list();
        setLoading(false);
        setData(data);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (loading) return <PageLoading />;

  if (error) return <PageError error={error} />;

  return (
    <Fragment>
      <div className="Badges">
        <div className="Badges__hero">
          <div className="Badges__container">
            <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo" />
          </div>
        </div>
      </div>

      <div className="Badges__container">
        <div className="Badges__buttons">
          <Link to="/badges/new" className="btn btn-primary">
            New Badge
          </Link>
        </div>

        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList badges={data} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Badges;
