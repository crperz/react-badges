import React from 'react';

import './styles/PageLoading.css';
import Loader from '../components/Loader';

const PageLoading = () => {
  return (
    <div className="PageLoading">
      <Loader />
    </div>
  );
};

export default PageLoading;
