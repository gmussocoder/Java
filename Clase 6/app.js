//Clase 6: Arrays
console.log("Hola Mundo");
/*Curso de Coderhouse: 23240
Estudiante: Guillermo Andrés Musso Rodríguez
e-Mail: gamussorodriguez@teco.com.ar
Teléfono: 1130743868 
Fecha: 18/11/2021

**** Desafío 6 (Seis): "Primer Entrega del Proyecto Final" ****

*/
/****************************************************************
*************************** Clases ******************************
****************************************************************/
class Device{
    constructor(manufacturer, model, serialNumber, deviceUser, devicePass, token){
        this.manufacturer = manufacturer;
        this.model = model;
        this.serialNumber = serialNumber;
        this.deviceUser = deviceUser;
        this.devicePass = devicePass;
        this.token = token;
    }
    onboardDevice(){
        alert("El dispositivo número de serie " + this.serialNumber + " será onboardeado.");
    }
    checkDevice(){
        let check = prompt("Los datos del dispositivo ingresado son: "+
                "\n\r"+"Fabricante: " + this.manufacturer +
                "\n\r"+"Modelo: " + this.model +
                "\n\r"+"serialNumber: " + this.serialNumber +
                "\n\r"+"Usuario: " + this.deviceUser +
                "\n\r"+"Contraseña: " + this.devicePass +
                "\n\r"+"Token: " + this.token +
                "\n\r"+"Ingrese 1 si es correcto o 0 si es incorrecto."
                );
        if (check == 1) {
            alert("Dispositivo Onbordeado Correctamente");
        }
        else {
            alert("El dispositivo con número de serie "+ this.serialNumber + "no fue Onboardeado");
        }
    }
};

/****************************************************************
***********    Función para ordenar por Orden       *************
***********    Alfabético de Fabricante:            *************
****************************************************************/
function ordenarArray(Array){
    Array.sort((a,b) => {
        const atributoA = a.manufacturer.toLowerCase();
        const atributoB = b.manufacturer.toLowerCase();
        if (atributoA < atributoB) {
            return -1;
        }
        if (atributoA > atributoB) {
            return 1;
        }
        return 0;
    });
    return Array;
}
/****************************************************************
********    Función Muestra Dispositivos por Fabricante     *****
*****************************************************************
****************************************************************/
function devicesByManufacturer(Array,filtro){
    ArrayFiltered = Array.filter(Array => Array.manufacturer.includes(filtro));
    for (let i = 0; i < ArrayFiltered.length; i++) {
        document.write("<br>Marca: " + ArrayFiltered[i].manufacturer + "<br>Modelo: " + ArrayFiltered[i].model + "<br>Número de serie: " + ArrayFiltered[i].serialNumber + "<br>Usuario: "+ ArrayFiltered[i].deviceUser + "<br>Contraseña: " + ArrayFiltered[i].devicePass + "<br>Token: " + ArrayFiltered[i].token);
        console.log(ArrayFiltered[i]);
    }
}

/************************************************************************************/
/************************************************************************************/
/*                                     MAIN                                         */
/************************************************************************************/
/************************************************************************************/

let  dispositivosOnboardeados = [];
let estado = true;

/**************************/
/****  Menú Principal  ****/
/**************************/
while (estado) {
    let fabricante = prompt("Ingrese el fabricante del dispositivo");
    let modelo = prompt("Ingrese el modelo del dispositivo");
    let numeroDeSerie = prompt("Ingrese el número de serie");
    let usuario = prompt("Ingrese el usuario de la cuenta del dispositivo");
    let password = prompt("Ingrese el password de la cuenta del dispositivo");
    let deviceToken = prompt("Ingrese el token de la cuenta del dispositivo");
    const dispositivo = new Device(fabricante,modelo,numeroDeSerie,usuario,password,deviceToken);
    dispositivo.onboardDevice();
    dispositivo.checkDevice();
    dispositivosOnboardeados.push(dispositivo);
    estado = Boolean(Number(prompt("Ingrese 1 para continuar onboardeando mas y 0 para salir")));
}
document.write("Los siguientes dispositivos fueron onboardeados:");
for (let i = 0; i < dispositivosOnboardeados.length; i++) {
    document.write("<br>Marca: " + dispositivosOnboardeados[i].manufacturer + "<br>Modelo: " + dispositivosOnboardeados[i].model + "<br>Número de serie: " + dispositivosOnboardeados[i].serialNumber + "<br>Usuario: "+dispositivosOnboardeados[i].deviceUser + "<br>Contraseña: " + dispositivosOnboardeados[i].devicePass + "<br>Token: " + dispositivosOnboardeados[i].token);
    console.log(dispositivosOnboardeados[i]);
}
let filtro = prompt("El nombre de Fabricante para desplegar por Fabricante");
devicesByManufacturer(dispositivosOnboardeados,filtro);
console.log(dispositivosOnboardeados);
console.log("Ordeno Array de Objetos por Orden Alfabético");
console.log(ordenarArray(dispositivosOnboardeados));