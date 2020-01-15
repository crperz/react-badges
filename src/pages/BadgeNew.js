import React, { useState, Fragment } from 'react';

import './styles/BadgeNew.css';
import header from '../images/platziconf-logo.svg';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';
import api from '../api';

const BadgeNew = () => {
  const initialState = {
    email: '',
    firstName: '',
    jobTitle: '',
    lastName: '',
    twitter: ''
  };
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleChange = event => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await api.badges.create(form);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <div className="BadgeNew__hero">
        <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              email={form.email || 'EMAIL'}
              firstName={form.firstName || 'FIRST_NAME'}
              jobTitle={form.jobTitle || 'JOB_TITLE'}
              lastName={form.lastName || 'LAST_NAME'}
              twitter={form.twitter || 'TWITTER'}
            />
          </div>
          <div className="col-6">
            <BadgeForm
              onChange={handleChange}
              onSubmit={handleSubmit}
              formValues={form}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BadgeNew;
