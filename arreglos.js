/* Arreglos */
const technologies = ["react", "vue", "angular"];


/* Agregar elementos al final del array */
technologies.push("html");
/* Sin modificar el arreglo original con spread operator */
const newTechnologies1 = [...technologies, "html"]
console.log(newTechnologies1);

/* Agregar elementos al inicio del array */
technologies.unshift("php");
/* Sin modificar el arreglo original con spread operator */
const newTechnologies2 = ["php", ...technologies]
console.log(newTechnologies2);


/* Eliminar elementos del array */
technologies.pop(); //Elimina del final
technologies.shift(); //Elimina del inicio
technologies.splice(2, 1); //Elimina de una posición especifica(1er par: apartir de que index; 2do par: cuantos elementos)

/* Eliminar sin modificar el arreglo original */
const technologiesFiltered = technologies.filter((element) => element != "react")
console.log(technologiesFiltered);

/* Remplazar elemento del array */
technologies[0] = "Java";

/* Remplazar elemento del array sin modificar el array */
const technologiesMaped = technologies.map((element) => element === "Java" ? element = "Java Remplazado" : element)
console.log(technologiesMaped);
