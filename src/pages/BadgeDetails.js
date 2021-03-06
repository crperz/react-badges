import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

import './styles/BadgeDetails.css';
import confLogo from '../images/platziconf-logo.svg';

const BadgeDetails = ({
  badge,
  isOpenModal,
  onCloseModal,
  onDeleteBadge,
  onOpenModal
}) => {
  return (
    <Fragment>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo Conf" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle}
            />
          </div>
          <div className="col">
            <div className="BadgeDetails__actions">
              <h2>Actions:</h2>
              <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>
                Edit
              </Link>
              <button onClick={onOpenModal} className="btn btn-danger">
                Delete
              </button>
              <DeleteBadgeModal
                isOpen={isOpenModal}
                onClose={onCloseModal}
                onDeleteBadge={onDeleteBadge}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BadgeDetails;
