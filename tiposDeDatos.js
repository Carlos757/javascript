/* Tipos de datos */

/* 6 tipos de datos primitivos(undefined, boolean, number, string, bigInt, symbol) */

/* Undefined - al crear una variable sin inicializar esta se crea de tipo undefined */
let number;
console.log(typeof number);
number = 30;
console.log(typeof number);

/* Boolean */
const discount = true;
console.log(typeof discount);

/* Number - todos son tratados como numbers, ya sean decimales, negativos, enteros, etc*/
const number1 = 30;
const number2 = 50.23;
const number3 = -30;
console.log(typeof number1, typeof number2, typeof number3);

/* String */
const name = "Carlos";
const lastName = "Ríos"
const age = "20"
console.log(typeof name, typeof lastName, typeof age);

/* BigInt */
const bigNumber = BigInt(312222222222222231233333333333333333333312311111111)
console.log(typeof bigNumber);

/* Symbol - siempre serán unicos */
const symbol1 = Symbol(10);
const symbol2 = Symbol(10);
console.log(symbol1 === symbol2);
console.log(symbol1.valueOf());

/* Null */
/* null es un tipo primitivo especial de typeof object */
const person = null;
console.log(typeof person);

/* Object */
const car = {
    brand: "Mazda",
    color: "rojo",
    price: 300000,
    avaliable: false,
}
console.table(car);

/* Function */
function sum(n1, n2) {
    return n1 + n2;
}
const sumArrow = (n1, n2) => n1 + n2;

console.log(sumArrow(2, 3));
console.log(sum(2, 3));
console.log(typeof sum);
console.log(typeof sumArrow);




