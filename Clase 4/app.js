//Clase 3: Ciclos/Iteraciones
console.log("Hola Mundo");

/*Curso de Coderhouse: 23240
Estudiante: Guillermo Andrés Musso Rodríguez
e-Mail: gamussorodriguez@teco.com.ar
Teléfono: 1130743868
Fecha: 23/10/2021

****Desafío 3 (Tres)****

*/
let numeroA, numeroB, resultado;
numeroA = prompt("Ingrese un número");
while (isNaN(numeroA)) {
    console.log(numeroA);
    console.log("Valor inválido. Debe ingresar un número");
    document.write("Usted ingresó:"+" "+ numeroA + "." + " " + "Debe ingresar un número");
    alert ("Debe ingresar un número");
    numeroA = prompt("Ingrese un número");
}
numeroB = prompt("Ingrese número a sumar al número ingresado anteriormente");
while (isNaN(numeroB)) {
    console.log(numeroB);
    console.log("Valor inválido. Debe ingresar un número");
    document.write("Usted ingresó:"+" "+ numeroB + "." + " " + "Debe ingresar un número");
    alert ("Debe ingresar un número");
    numeroB = prompt("Ingrese número a sumar al número ingresado anteriormente");
}
resultado = Number(numeroA) + Number(numeroB);
console.log(resultado);
console.log("El resultado es " + resultado);
document.write("El resultado de la operación:"+" "+ numeroA + "+" + numeroB + " es " + resultado);
alert ("El resultado de la operación:"+" "+ numeroA + "+" + numeroB + " es " + resultado);
console.log("A continuación se decrementará el resultado " + resultado + " hasta llegar a 0");
document.write("<br>A continuación se decrementará el resultado " + resultado + " hasta llegar a 0:");
let res = resultado;
for (let i = 0; i < res; i++) {
    resultado = resultado-1;
    console.log("\n" + resultado);
    document.write("<br>" + resultado);
}