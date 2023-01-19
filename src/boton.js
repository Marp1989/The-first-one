var botonesEliminar = document.querySelectorAll('.botonEliminar');
var modalEliminar = document.querySelector('#modalEliminar');
var botonCerrar = document.querySelector('#botonCerrar');

// botonEliminar.addEventListener('click', () => {
//     modalEliminar.showModal();
// });

botonesEliminar.forEach((botonEliminar) => {
    botonEliminar.addEventListener('click', () => {
        modalEliminar.showModal();
    });
});

botonCerrar.addEventListener('click', () => {
    modalEliminar.close();
});