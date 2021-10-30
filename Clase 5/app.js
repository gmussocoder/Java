//Clase 4: Programación avanzada con Funciones
console.log("Hola Mundo");

/*Curso de Coderhouse: 23240
Estudiante: Guillermo Andrés Musso Rodríguez
e-Mail: gamussorodriguez@teco.com.ar
Teléfono: 1130743868
Fecha: 27/10/2021

****Desafío 4 (Cuatro)****

*/

const mensajeFlecha = (valor3) => alert(valor3);
mensajeFlecha("¡Le damos la Bienvenida! Haga click en Aceptar para Continuar");

function precioActual(costo,markUp,impuesto) {
    let precioDeVenta = (costo + impuesto)*(1+(markUp/100));
    return precioDeVenta;
}
//la variable "tiempo" es la cantidad de meses
function actualizarPrecio(precio,inflacion,tiempo) {
    tiempo = tiempo || 3;
    let precioActualizado = (precio)*(1+inflacion*tiempo/100);
    return precioActualizado;
}

let costoIngresado = prompt("Ingrese el costo sin impuestos");
while (isNaN(costoIngresado)) {
    console.log(costoIngresado);
    console.log("Valor inválido. Debe ingresar un número");
    document.write("<br>Usted ingresó:"+" "+ costoIngresado + "." + " " + "Debe ingresar un número");
    alert ("Debe ingresar un número");
    costoIngresado = prompt("Ingrese un número");
}
let impuestoIngresado = prompt("Ingrese el impuesto");
while (isNaN(impuestoIngresado)) {
    console.log(impuestoIngresado);
    console.log("Valor inválido. Debe ingresar un número");
    document.write("<br>Usted ingresó:"+" "+ impuestoIngresado + "." + " " + "Debe ingresar un número");
    alert ("Debe ingresar un número");
    impuestoIngresado = prompt("Ingrese un número");
}
let markUpIngresado = prompt("Ingrese el MarkUp deseado");
while (isNaN(markUpIngresado)) {
    console.log(markUpIngresado);
    console.log("Valor inválido. Debe ingresar un número");
    document.write("<br>Usted ingresó:"+" "+ markUpIngresado + "." + " " + "Debe ingresar un número");
    alert ("Debe ingresar un número");
    markUpIngresado = prompt("Ingrese un número");
}
let precioHoy = precioActual(Number(costoIngresado),Number(markUpIngresado),Number(impuestoIngresado));
console.log(precioActual);
document.write("<br>El precio actual de venta es:"+" "+ precioHoy);
alert (precioHoy);
let inflacion = prompt("ingrese el valor en % de inflacion mensual");
while (isNaN(inflacion)) {
    console.log(inflacion);
    console.log("Valor inválido. Debe ingresar un número");
    document.write("Usted ingresó:"+" "+ inflacion + "." + " " + "Debe ingresar un número");
    alert ("Debe ingresar un número");
    inflacion = prompt("Ingrese un número");
}
let mensual = prompt("ingrese la cantidad de meses a proyectar");
while (isNaN(mensual)) {
    console.log(mensual);
    console.log("Valor inválido. Debe ingresar un número");
    document.write("<br>Usted ingresó:"+" "+ mensual + "." + " " + "Debe ingresar un número");
    alert ("Debe ingresar un número");
    mensual = prompt("Ingrese un número");
}
let precioActualizado = actualizarPrecio(precioHoy,inflacion,mensual);
console.log(precioActualizado);
document.write("<br>El preion Actualizado en"+" "+ mensual + " meses " + "será de " + precioActualizado);