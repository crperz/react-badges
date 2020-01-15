import React, { useState, useEffect } from 'react';

import api from '../api';
import PageError from './PageError';
import PageLoading from './PageLoading';
import BadgeDetails from './BadgeDetails';

/*
En la programación es bueno separar las tareas en diferentes funciones y en React sucede lo mismo.
Cuando un componente hace demasiado, probablemente es mejor dividirlo en dos.
Esta técnica de componentes presentacionales y componentes container es común, útil y hace parte de las buenas prácticas.
*/
const BadgeDetailsContainer = ({ history, match }) => {
  const [badge, setBadge] = useState(undefined);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    const fetchBadge = async () => {
      setLoading(true);
      setError(null);

      try {
        const badge = await api.badges.read(match.params.id);
        setBadge(badge);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchBadge();
  }, [match]);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleDeleteBadge = async () => {
    setLoading(true);
    setError(null);

    try {
      await api.badges.remove(match.params.id);

      history.push('/badges');
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  if (loading) {
    return <PageLoading />;
  }

  if (error) {
    return <PageError error={error} />;
  }

  return (
    <BadgeDetails
      badge={badge}
      isOpenModal={isOpenModal}
      onCloseModal={handleCloseModal}
      onDeleteBadge={handleDeleteBadge}
      onOpenModal={handleOpenModal}
    />
  );
};

export default BadgeDetailsContainer;
