/* Selectores del DOM */

/* Retorna unicamente un elemento */
const heading = document.querySelector("#heading");

/* Retorna todos los elementos */
const enlaces = document.querySelectorAll("nav .btn");

/* Cambiar heading */
heading.textContent = "Nuevo heading"

/* Cambiando el value de un input */
const inputUsuario = document.querySelector("#user");
inputUsuario.value = "typed in js"

/* Cambiando el titulo de los enlaces de la nav */
enlaces.forEach(enlace => enlace.textContent += " Modificado en JS")



console.log(heading);
console.log(heading.textContent);
console.log(heading.tagName);
console.log(heading.classList);
console.log(heading.id);

console.log(...enlaces);

