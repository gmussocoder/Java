//Esto es una prueba de enlace a mi index.html
console.log("Hola Mundo");

//declaro mi primer variable

//tipos de datos:
//tipo string:
/*
var 
let
const
*/
//sintaxis: declaración nonbre = Asignación de Valor Valor ;
//ejemplos:
var nombreVariable = "carolina"; //dato tipo string. Una cadena se escribe entre comillas
//var no se está utilizando más
//también se puede declarar y no inicializar el nombre; ejemplo:
var variableInicializada;
//y luego
variableInicializada = "carolina";

console.log(variableInicializada);

let nombreVariable2 ="Lemes"; //"let" reemplaza a var y no ocupa espacio hasta que no se inicaliza. es mejor que var. Ejemplo:

let variableInicializada2;
variableInicializada2 = "Lemes";

const nombreVariable3 = "Argentina"; //con const hay que inicializar si o sí y es una variable que no cambia en el tiempo.

//variables de tipo número:
let numero = 12;
console.log(numero);

//variables de tipo booleano:

let tengoHambre = true;
console.log(tengoHambre);

//ingresar y egresar datos:
//prompt("Ingresa tu nombre");
let pregunta = prompt("Ingresá Tu Nombre");
console.log(pregunta);

//Valores de Salida:
document.write(pregunta); //"document" permite manipular el HTML es el DOM

let respuesta = alert("ueted respondió: " + pregunta);

alert("Hola este es un mensaje de Alerta"); //hasta que no se acepta no me permite continuar manipulando el body de mi sitio.

confirm("Esto es confirmar; acepta?"); //La diferencia es que me permite cancelar o confirmar. Hasta que no haga click no me deja seguir en el sitio.


//otro ejemplo:

let variableNombre, variableApellido, edad;
variableNombre = prompt("Cuál es tu nombre?");
variableApellido = prompt("Cuál es tu apellido?");
edad = prompt("Cuál es tu edad?");

document.write("Hola tu nombre es:"+" "+ variableNombre + " " + "tu apellido es"+ " " + variableApellido + " " + "Tu edad es" + " " + edad);

/*para validar tipo de dato ingresado se usa:
parseInt
parseFloat
Number
*/




//variables
//objeto
//arrays
//métodos
//propiedades
//funciones
//clases