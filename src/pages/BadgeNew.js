import React, { useState } from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';

const BadgeNew = () => {
  const initialState = {
    email: '',
    firstName: '',
    jobTitle: '',
    lastName: '',
    twitter: ''
  };
  const [form, setForm] = useState(initialState);

  const handleChange = event => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <div className="BadgeNew__hero">
        <img className="img-fluid" src={header} alt="Logo" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              avatarUrl="https://www.gravatar.com/avatar/HASH"
              email={form.email}
              firstName={form.firstName}
              jobTitle={form.jobTitle}
              lastName={form.lastName}
              twitter={form.twitter}
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
    </div>
  );
};

export default BadgeNew;
