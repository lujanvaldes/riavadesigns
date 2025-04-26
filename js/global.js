//   0. Comentarios y documentación   //

/*
En este js se presentan las funciones y eventos necesarios para incluir contenidos y cambiar las apariencias globales del proyecto

Se utiliza para agregar interactividad y mejorar la experiencia
que tenga el usuario en la web.
*/


// funciones para menú desplegable en móvil y tablet

document.addEventListener('DOMContentLoaded', function(){
    // selecciona el boton del menú y el contenedor hecho del menú
    const botonMenu = document.querySelector('.Header-boton');
    const menuSecciones =document.querySelector('.Header-secciones');

    // vereficamos que ambos elementos existan antes de agregar los eventos
    if(botonMenu && menuSecciones) {
        botonMenu.addEventListener('click', function(){
            // toggle para abrir y cerrar el menú
            menuSecciones.classList.toggle('activo');
        });
    }
});







