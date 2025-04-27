//   0. Comentarios y documentación   //

/*
En este js se presentan las funciones y eventos necesarios para incluir contenidos y cambiar las apariencias globales del proyecto

Se utiliza para agregar interactividad y mejorar la experiencia
que tenga el usuario en la web.
*/


// funciones para menú desplegable (hamburguesa) en móvil
// seleccionamos los elementos principales
const btnHeader = document.querySelector('.Header-boton');
const linksHeader = document.querySelector('.Header-secciones');
const iconHeader =btnHeader.querySelector('.material-symbols-outlined');

// evento para abrir y cerrar el menú desplegable
btnHeader.addEventListener('click', () => {
    linksHeader.classList.toggle('isActive');
    document.body.classList.toggle("No-scroll"); // para evitar el scroll cuando esté activo/abierto

    if (linksHeader.classList.contains('isActive')){
        iconHeader.textContent = 'close'; // icono de X
        btnHeader.classList.add('activo'); //se le agrega la clase activo
    } else {
        iconHeader.textContent = 'dehaze'; //icono de hambuguesa
        btnHeader.classList.remove('activo'); // se le saca la clase activo
    }
});

// evento para cerrar el menú al hacer click en un enlace
const links = document.querySelectorAll('.Header-enlace, .Header-secciones a');

links.forEach((link) => {
    link.addEventListener('click', () => {
        linksHeader.classList.remove('isActive');
        document.body.classList.remove('No-scroll');
        iconHeader.textContent = 'dehaze';
    });
});









