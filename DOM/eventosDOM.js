/* Eventos del DOM */

/* Clicks */
const heading = document.querySelector("#heading");
heading.addEventListener("click", () => heading.textContent = "cambió al dar click");

const enlacesNav = document.querySelectorAll("nav a");
enlacesNav.forEach((enlace) => {
    enlace.addEventListener("click", () => {
        enlace.textContent += " nuevo";
        console.log(`diste click en el enlace ${enlace.textContent}`)
    })
})

/* Inputs */
let inputUser = document.querySelector("#user");
inputUser.type = "text"
inputUser.placeholder = "User cambiado"

inputUser.addEventListener("input", (event) => console.log(event.target.value))


/* Muestra el password cada vez que cambia el input */
let inputPassword = document.querySelector("#password");

inputPassword.addEventListener("input", () => {
    inputPassword.type = "text";

    setTimeout(() => {
        inputPassword.type = "password";
    }, 400)
})

/* Submit */
/* const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    inputUser.value === "" || inputPassword.value === "" ?
        window.alert("Llene los campos") :
        console.log("correcto");

}); */

/* Generando codigo HTML en JS */

const formulario = document.querySelector("#formulario");
const fragment = document.createDocumentFragment();
formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    const alertaPrevia = document.querySelector("#alerta");
    if (alertaPrevia) {
        alertaPrevia.remove();
    }

    const alerta = document.createElement("DIV");
    alerta.id = "alerta";
    alerta.classList.add("alerta", "alert");
    alerta.textContent = "Por favor llene los campos";

    if (inputUser.value === "" || inputPassword.value === "") {
        alerta.classList.add("alert-warning");
        alerta.textContent = "Por favor llene los campos";
    } else {
        alerta.classList.add("alert-success");
        alerta.textContent = "Correcto";
    }

    fragment.appendChild(alerta);
    formulario.appendChild(fragment);
    console.log(alerta)
});





