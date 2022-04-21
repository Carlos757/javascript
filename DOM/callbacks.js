/* Callbacks - es una funcion que se pasa a otra función como argumento
y luego se invoca dentro de la función externa para completar su acción */

const cars = [
    {
        id: 1,
        marca: "Toyota",
        color: "rojo"
    },
    {
        id: 2,
        marca: "Mazda",
        color: "azul"
    },
    {
        id: 3,
        marca: "Ford",
        color: "verde"
    }
]

const findCardById = ((id, callback) => {
    const car = cars.find((car) => car.id === id);

    callback(car);
})

findCardById(4, (car) => console.log(car));