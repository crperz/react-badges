import React, { Fragment } from 'react';

const BadgeForm = ({ error, formValues, onChange, onSubmit }) => {
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            className="form-control"
            id="firstName"
            name="firstName"
            onChange={onChange}
            type="text"
            value={formValues.firstName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            className="form-control"
            id="lastName"
            name="lastName"
            onChange={onChange}
            type="text"
            value={formValues.lastName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            id="email"
            name="email"
            onChange={onChange}
            type="text"
            value={formValues.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            className="form-control"
            id="jobTitle"
            name="jobTitle"
            onChange={onChange}
            type="text"
            value={formValues.jobTitle}
          />
        </div>
        <div className="form-group">
          <label htmlFor="twitter">Twitter</label>
          <input
            className="form-control"
            id="twitter"
            name="twitter"
            onChange={onChange}
            type="text"
            value={formValues.twitter}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>

        {error && (
          <div className="alert alert-danger my-3" role="alert">
            {error.message}
          </div>
        )}
      </form>
    </Fragment>
  );
};

export default BadgeForm;
