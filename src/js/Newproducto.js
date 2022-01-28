//variables
const Nproducto = document.querySelector('#nuevoProducto');
const ventanModal =document.querySelector('.add-producto');
document.addEventListener('DOMContentLoaded', function () {
    Modal();
})
function Modal() {
    Nproducto.addEventListener('click', function () {
        ventanModal.classList.toggle('visible');
    })
}