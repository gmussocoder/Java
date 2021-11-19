//Clase 6: Arrays
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
            alert("El dispositivo con número de serie "+ this.serialNumber + "no fue Onboardeado");
        }
    }
};
let  dispositivosOnboardeados = [];
let estado = true;
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
dispositivosOnboardeadosFiltro = dispositivosOnboardeados.filter(dispositivosOnboardeados => dispositivosOnboardeados.manufacturer.includes(filtro));
for (let i = 0; i < dispositivosOnboardeadosFiltro.length; i++) {
    document.write("<br>Marca: " + dispositivosOnboardeadosFiltro[i].manufacturer + "<br>Modelo: " + dispositivosOnboardeadosFiltro[i].model + "<br>Número de serie: " + dispositivosOnboardeadosFiltro[i].serialNumber + "<br>Usuario: "+dispositivosOnboardeadosFiltro[i].deviceUser + "<br>Contraseña: " + dispositivosOnboardeadosFiltro[i].devicePass + "<br>Token: " + dispositivosOnboardeadosFiltro[i].token);
    console.log(dispositivosOnboardeadosFiltro[i]);
}
console.log("Hola");
//Ordenamiento del Array de Objetos por Orden Alfabético de Fabricante:
dispositivosOnboardeados.sort((a,b) => {
    const manufacturerA = a.manufacturer.toLowerCase();
    const manufacturerB = b.manufacturer.toLowerCase();
    if (manufacturerA < manufacturerB) {
        return -1;
    }
    if (manufacturerA > manufacturerB) {
        return 1;
    }
    return 0;
});
console.log(dispositivosOnboardeados);