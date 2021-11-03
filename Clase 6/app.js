//Clase 6: Array
console.log("Hola Mundo");

/*Curso de Coderhouse: 23240
Estudiante: Guillermo Andrés Musso Rodríguez
e-Mail: gamussorodriguez@teco.com.ar
Teléfono: 1130743868
Fecha: 30/10/2021

****Desafío 6 (Seis)****

*/

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
            alert("El dispositivo con número de serie "+ this.serialNumber + "no fue Onboardead");
        }
    }
};

let fabricante = prompt("Ingrese el fabricante del dispositivo");
let modelo = prompt("Ingrese el modelo del dispositivo");
let numeroDeSerie = prompt("Ingrese el número de serie");
let usuario = prompt("Ingrese el usuario de la cuenta del dispositivo");
let password = prompt("Ingrese el password de la cuenta del dispositivo");
let deviceToken = prompt("Ingrese el token de la cuenta del dispositivo");

const dispositivo = new Device(fabricante,modelo,numeroDeSerie,usuario,password,deviceToken);
dispositivo.onboardDevice();
dispositivo.checkDevice();
document.write("El siguiente dispositivo fue onboardeado:"+"<br>Marca: "+dispositivo.manufacturer+"<br>Modelo: "+dispositivo.model+"<br>Número de serie: "+dispositivo.serialNumber+"<br>Usuario: "+dispositivo.deviceUser+"<br>Contraseña: "+dispositivo.devicePass+"<br>Token: "+dispositivo.token);