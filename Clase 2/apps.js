//Clase 2: Control de Flujo
console.log("Hola Mundo");

/*Curso de Coderhouse: 23240
Estudiante: Guillermo Andrés Musso Rodríguez
e-Mail: gamussorodriguez@teco.com.ar
Teléfono: 1130743868
Fecha: 13/10/2021

****Desafío Uno 2****

*/
let numeroA, numeroB, resultado;
numeroA = prompt("Ingrese un número");
if (isNaN(numeroA)) {
    console.log(numeroA);
    console.log("Valor inválido. Debe ingresar un número");
    document.write("Usted ingresó:"+" "+ numeroA + "." + " " + "Debe ingresar un número");
    alert ("Debe ingresar un número");
}
else {
    numeroB = prompt("Ingrese número a sumar al número ingresado anteriormente"); 
    if (isNaN(numeroB)) {
        console.log(numeroB);
        console.log("Valor inválido. Debe ingresar un número");
        document.write("Usted ingresó:"+" "+ numeroB + "." + " " + "Debe ingresar un número");
        alert ("Debe ingresar un número");
    }
    else {
        resultado = Number(numeroA) + Number(numeroB);
        console.log(resultado);
        console.log("El resultado es " + resultado);
        document.write("El resultado de la operación:"+" "+ numeroA + "+" + numeroB + " es " + resultado);
        alert ("El resultado de la operación:"+" "+ numeroA + "+" + numeroB + " es " + resultado);
    }
}