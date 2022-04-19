/* Destructuring */

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
const technologies = ["react", "vue", "angular"];

const { brand, color, price, avaliable } = car;
console.log(brand, color, price, avaliable);

/* Destructuring con 2 o más objetos*/
const { brand: productBrand, price: productPrice, avaliable: productAvaliable, category } = product;
console.log(productBrand, productPrice, productAvaliable, category);


/* Destructuring de arreglos */
const [, , var3] = technologies;
console.log(var3);