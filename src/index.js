import React from 'react';
import ReactDOM from 'react-dom';

import Badge from './components/Badge';

/*
// JSX
const jsx = (
  <div>
    <h1>I'm Cristian</h1>
    <p>I'm fullstack developer</p>
  </div>
);

// JS
const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "I'm Cristian"),
  React.createElement("p", {}, "I'm fullstack developer")
); */

// Componente: Clase - Plano
// Elemento: Instancia - Objeto - Casa

const container = document.getElementById('app');

ReactDOM.render(<Badge />, container);
