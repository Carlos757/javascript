/* Promesas */

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

const findCardById = (id => {
    const car = cars.find((car) => car.id === id);

    return new Promise((resolve, reject) =>
        setTimeout(() => {
            car ?
                resolve(car) :
                reject("No se encontró el id " + id)
        }, 2000)
    )

});


/* findCardById(3)
    .then((car) => console.log(car))
    .catch(e => console.log(e))
    .finally(() => console.log("Se ejecuta si o si")) */

/* Con async await */
const buscarId = async (id) => {
    try {
        const resultCar = await findCardById(id)
        console.log(resultCar);
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Se ejecuta si o si")
    }

}

buscarId(4);

console.log("fin")