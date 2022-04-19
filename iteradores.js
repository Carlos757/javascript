/* Iteradores */
const technologies = ["react", "vue", "angular"];

/* For - similar en todos los lenguajes */
for (let index = 0; index < technologies.length; index++) {
    console.log(technologies[index]);
}

/* ForEach - solo itera, no permite crear un nuevo arreglo*/
technologies.forEach((element, index) => console.log(index, element));

/* Map - permite crear un nuevo arreglo */
let res = technologies.map((element) => "- " + element);

console.log(res);