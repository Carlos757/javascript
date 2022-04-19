/* Condicionales */

const amountAvaliable = 300;
const amountToRetire = 350;

if (amountAvaliable >= amountToRetire) {
    console.log('Se puede retirar');
} else {
    console.log('No se puede retirar');
}

/* Comparación y operador estricto */
/* 
    == (comparación pero no es estricto)
    === (comparación estricta - revosa valor y tipo de dato)
*/
const n1 = 10;
const n2 = "10";
if (n1 == n2) {
    console.log("Son iguales, pero no es estricto");
}
if (n1 === n2) {
    console.log("Son iguales en valor y tipo de dato");
}

/* Condicional ternario */
const autentificado = true;
autentificado ? console.log("autentificado") : console.log("no autentificado");

/* Doble ternario */
autentificado ?
    amountAvaliable > amountToRetire ?
        console.log("autentificado") :
        console.log("autentificado pero no tienes saldo suficiente") :
    console.log("no autentificado");

