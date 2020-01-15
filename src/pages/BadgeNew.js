import React, { useState, Fragment } from 'react';

import './styles/BadgeNew.css';
import header from '../images/platziconf-logo.svg';
import PageLoading from './PageLoading';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';
import api from '../api';

const BadgeNew = ({ history }) => {
  const initialState = {
    email: '',
    firstName: '',
    jobTitle: '',
    lastName: '',
    twitter: ''
  };
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = event => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await api.badges.create(form);
      setLoading(false);
      // (match, location, history react-router props)
      history.push('/badges');
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  if (loading) return <PageLoading />;

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
              error={error}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BadgeNew;
