/* Array Methods */
const technologies = ["react", "vue", "angular"];
const numbers = [2, 3, 5, 6, 10];

/* Map */
let technologiesMaped = technologies.map((element, index) => index + 1 + ": " + element);
console.log(technologiesMaped);

/* Filter */
let technologiesFiltered = technologies.filter((element) => element !== "react");
console.log(technologiesFiltered);

/* Reduce - acumula el total */
let numbersReduced = numbers.reduce((total, element) => element % 2 === 0 ? total + element : total, 0);
console.log(numbersReduced);

/* includes - comprueba si un elemento existe en el array */
const resultInclude = technologies.includes("react");
console.log(resultInclude);

/* some - comprueba si almenos un elemento cumple con la condición */
const resultSome = numbers.some((element) => element > 10);
console.log(resultSome);

/* find - devuelve el primer elemento que cumple con la condición */
const resultFind = numbers.find(element => element > 2);
console.log(resultFind);

/* every - devuelve true o false si todos los elementos cumplen con la condición */
const resultEvery = numbers.every(element => element > 2);
console.log(resultEvery);