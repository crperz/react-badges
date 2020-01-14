import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';

const Badges = () => {
  const [data, setData] = useState([]);

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
    const timeoutId = setTimeout(() => {
      setData([
        {
          id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
          firstName: 'Freda',
          lastName: 'Grady',
          email: 'Leann_Berge@gmail.com',
          jobTitle: 'Legacy Brand Director',
          twitter: 'FredaGrady22221-7573',
          avatarUrl:
            'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon'
        },
        {
          id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
          firstName: 'Major',
          lastName: 'Rodriguez',
          email: 'Ilene66@hotmail.com',
          jobTitle: 'Human Research Architect',
          twitter: 'MajorRodriguez61545',
          avatarUrl:
            'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon'
        },
        {
          id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
          firstName: 'Daphney',
          lastName: 'Torphy',
          email: 'Ron61@hotmail.com',
          jobTitle: 'National Markets Officer',
          twitter: 'DaphneyTorphy96105',
          avatarUrl:
            'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon'
        }
      ]);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

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
