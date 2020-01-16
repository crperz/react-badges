import React from 'react';

import Loader from '../components/Loader';

import './styles/PageLoading.css';

const PageLoading = () => {
  return (
    <div className="PageLoading">
      <Loader />
    </div>
  );
};

export default PageLoading;
