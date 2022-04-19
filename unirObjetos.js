/* Unir 2 objetos */
const car = {
    brand: "Mazda",
    color: "rojo",
    price: 300000,
    avaliable: false,
}
const product = {
    brand: "Apple",
    price: 1000,
    avaliable: true,
    category: "Computadoras"
}

//const newObject = Object.assign(car, product); //no por que muta los objetos originales

/* Usando spread operator */
const newObject = { car: { ...car }, product: { ...product } }
console.log(newObject);