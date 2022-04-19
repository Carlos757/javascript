/* Objetos */

const car = {
    brand: "Mazda",
    color: "rojo",
    price: 300000,
    avaliable: false,
}
console.log(`El auto de marca ${car.brand}, color ${car.color} está ${car.avaliable ? "disponible" : "agotado"} `);


/* Object literal enhacement - si los atributos del objeto y las variables que vas asignar
 tienen el mismo nombre se pueden crear de la siguiente manera */
const material = "apple";
const keys = 3000;
/* Normal */
const keyboard1 = {
    material: material,
    keys: keys
};
/* Object literal enhacement */
const keyboard2 = {
    material,
    keys
};
console.table(keyboard1);
console.table(keyboard2);

/* Reescribir un valor */
const car2 = {
    brand: "Toyota",
    color: "verde",
    price: 350000,
    avaliable: true,
}
/* Agregando un nuevo atributo */
car2.tires = 4;
car2.extras = "...";
/* Modificando un atributo */
car2.color = "azul";
/* Eliminando un atributo */
console.log(car2);
delete car2.extras
console.log(car2);

/* freeze - Bloquea la posibilidad de modificar en absoluto un objeto */
const car3 = {
    brand: "Toyota",
    color: "verde",
    price: 350000,
    avaliable: true,
}
Object.freeze(car3);
car3.brand = "Ford";
car3.tires = 4;
car3.extras = "...";
delete car3.color;
console.log(car3);

/* seal - Permite solo modificar los atributos que ya tiene el objeto, 
pero no agregar ni eliminar */
const car4 = {
    brand: "Toyota",
    color: "verde",
    price: 350000,
    avaliable: true,
}
Object.seal(car4);
car4.brand = "Ford";
car4.tires = 4;
car4.extras = "...";
delete car4.color;
console.log(car4);


