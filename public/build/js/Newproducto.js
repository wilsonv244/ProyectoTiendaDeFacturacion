const Nproducto=document.querySelector("#nuevoProducto"),ventanModal=document.querySelector(".add-producto");function Modal(){Nproducto.addEventListener("click",(function(){ventanModal.classList.toggle("visible")}))}document.addEventListener("DOMContentLoaded",(function(){Modal()}));