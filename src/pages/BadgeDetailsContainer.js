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
const BadgeDetailsContainer = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [badge, setBadge] = useState(undefined);

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

  if (loading) {
    return <PageLoading />;
  }

  if (error) {
    return <PageError error={error} />;
  }

  return <BadgeDetails badge={badge} />;
};

export default BadgeDetailsContainer;
