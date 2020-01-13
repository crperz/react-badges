import React from 'react';

import confLogo from '../images/badge-header.svg';

const Badge = () => {
  return (
    <div>
      <div>
        <img src={confLogo} alt="Conf Logo" />
      </div>

      <div>
        <img src="https://www.gravatar.com/avatar/HASH" alt="Avatar" />
        <h1>
          Cristian <br /> Pérez
        </h1>
      </div>

      <div>
        <p>Fullstack Developer</p>
        <p>@crperz</p>
      </div>

      <div>#reactconf</div>
    </div>
  );
};

export default Badge;
