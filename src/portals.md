# Portals
Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
Un portal es un contenido HTML que está fuera del contenedor (el div id="app") de tu aplicación principal.
Nos resulta especialmente relevante para crear Modales sin complicaciones extremas en el diseño ya que el nodo se encuentra a la misma altura que el de la App.
¿Cómo lo implemementamos?
* Crea el contenedor de tu modal en tu archivo index.html
```html
<div id="modal"> </div>
```
* En el componente donde lo vayas a utilizar importa el ReactDOM ya que a través de su método createPortal() invocaremos el contenedor externo que acabamos de crear
* Crea el Portal al componente a través de ReactDOM.createPortal()
* Pasa por parametro Qué renderizara y donde lo hará