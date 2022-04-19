/* Variables */

/* var - se pueden reasignar y pueden iniciar sin ningun valor*/
/* tiene un scope global */
var price;
price = 300;

/* let - muy parecido a var pero con la diferencia de que su scope es local en relación
al bloque en que se declaró */
let age;
age = 20;

/* const - son variables que una vez declaradas no se pueden re asignar y deben ser
inicializadas, ojo, algunas estructuras se pueden manipular utilizando const */
const name = "carlos";
const numbers = [0, 1, 2, 3, 4];

numbers.push(5);
console.log(numbers);

/* En este caso si se desea utilizar 'result' fuera del bloque if marcará que no existe
ya que esta esta definida dentro, mientras que result2 si podra ya que se declara de 
manera global */
if (age > 10) {
    let result = `no`
    var result2 = `yes`
}
//console.log(result);  error 
//console.log(result2); funciona 


