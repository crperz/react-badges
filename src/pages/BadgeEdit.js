import React, { useState, useEffect, Fragment } from 'react';

import api from '../api';
import PageLoading from './PageLoading';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

import './styles/BadgeEdit.css';
import header from '../images/platziconf-logo.svg';

const BadgeEdit = ({ history, match }) => {
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

  useEffect(() => {
    setError(null);
    setLoading(true);

    const fetchBadge = async () => {
      try {
        const data = await api.badges.read(match.params.id);
        setForm(data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchBadge();
  }, [match]);

  const handleChange = event => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await api.badges.update(match.params.id, form);
      setLoading(false);

      history.push('/badges');
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  if (loading) return <PageLoading />;

  return (
    <Fragment>
      <div className="BadgeEdit__hero">
        <img className="BadgeEdit__hero-image img-fluid" src={header} alt="Logo" />
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
            <h1>Edit Attendant</h1>
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

export default BadgeEdit;
