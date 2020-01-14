import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import App from './components/App';

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
);

// Componente: Clase - Plano
// Elemento: Instancia - Objeto - Casa

Ciclo de Vida de un Componente
Cuando React renderiza los componentes decimos que entran en escena, cuando su estado cambia o recibe unos props diferentes se actualizan y cuando cambiamos de página se dice que se desmontan.

Montaje:
Representa el momento donde se inserta el código del componente en el DOM.
Se llaman tres métodos: constructor, render, componentDidMount. <- En ese orden

Actualización:
Ocurre cuando los props o el estado del componente cambian.
Se llaman dos métodos: render, componentDidUpdate.

Desmontaje:
Nos da la oportunidad de hacer limpieza de nuestro componente.
Se llama un método: componentWillUnmount.

*/
const container = document.getElementById('app');

ReactDOM.render(<App />, container);
