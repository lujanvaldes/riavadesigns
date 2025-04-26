//función acordeón
document.addEventListener('DOMContentLoaded', function () {
    // para seleccionar todos los botones del acordeón y añadir el evento al hacer clic en cada uno
    const botones = document.querySelectorAll('.Acordeon-boton');

    botones.forEach((boton) => {
        boton.addEventListener('click', () => {
            const bloqueActual = boton.parentElement;
            const contenidoActual = bloqueActual.querySelector('.Acordeon-content');
            const iconoActual = boton.querySelector('.Acordeon-icon');


            //1° cerrar todos los contenedores
            document.querySelectorAll('.Acordeon-content').forEach((contenido) => {
                contenido.classList.remove('isOpen');
            });

            //2° cerrar todos los iconos
            document.querySelectorAll('.Acordeon-icon').forEach((icono) => {
                icono.textContent = 'add';
            });

            // 3° abrir el acordeón solo si no estaba abierto
            if (!contenidoActual.classList.contains('isOpen')) {
                contenidoActual.classList.add('isOpen');
                iconoActual.textContent = 'close';
            } else {
                contenidoActual.classList.remove('isOpen');
                iconoActual.textContent = 'add';
            }
        });
    });
});

