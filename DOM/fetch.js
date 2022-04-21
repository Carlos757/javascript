/* Fetch API */
const url = "https://jsonplaceholder.typicode.com/users";

let users;

/* Fetch */
const cargaUsuarios = () => {
    fetch(url)
        .then(response => response.json())
        .then(result => {
            users = result
            console.log("usuarios cargados")
        })
        .catch((e) => console.log(e))
        .finally(() => console.log(users));
}

/* Asyn await */
const cargaUsuariosAsync = async () => {
    try {
        const response = await fetch(url)
        const result = await response.json()
        users = result
        console.log("usuarios cargados")
    } catch (error) {
        console.log(error)
    } finally {
        console.log(users)
    }

}

cargaUsuarios()
/* cargaUsuariosAsync() */

/* cargaUsuarios.forEach(usuario => {
    function suma(a, b) { return a + b }
    console.log(usuario);
}); */


