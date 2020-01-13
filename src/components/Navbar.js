import React from 'react';

import './styles/Navbar.css';
import logo from '../images/logo.svg';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="container-fluid">
        <a className="Navbar__brand" href="/">
          <img className="Navbar__brand-logo" src={logo} alt="Logo" />
          <span className="font-weight-light">React</span>
          <span className="font-weight-bold">Conf</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
