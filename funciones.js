/* Funciones */

/* Function declaration - permite llamar la funcion antes o despues de la declaración */
console.log(sum(3, 4));
console.log(sum(3));

function sum(n1 = 0, n2 = 0) {
    return n1 + n2;
}

console.log(sum());

/* Function expression - solo se puede llamar despues de su declaración*/
const sumFunctionExpression = function sum(n1 = 0, n2 = 0) {
    return n1 + n2;
}
console.log(sumFunctionExpression(3, 3));


/* Arrow Function */
const sumArrow = (n1 = 0, n2 = 0) => n1 + n2;
console.log(sum());

