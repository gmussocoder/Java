//Clase 10: Segunda Entrega de Proyecto
console.log("Hola Mundo");
/*Curso de Coderhouse: 23240
Estudiante: Guillermo Andrés Musso Rodríguez
e-Mail: gamussorodriguez@teco.com.ar
Teléfono: 1130743868 
Fecha: 10/12/2021

**** Desafío 10 (Diez): "Segunda Entrega de Proyecto" ****

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
    onboardDevice(arrayDevices,dispositivo){
        if (dispositivo.checkDevice()){
            let btnToDelete= document.getElementById("onboardBtn");
            btnToDelete.remove();
            arrayDevices.push(dispositivo);
        }
        else {
            arrayDevices.pop();
        }
    }
    checkDevice(){
        return true;
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
    deleteList = document.getElementById("listOfDevicesByManufacturer");
    if (deleteList!=null) {
        deleteList.remove();
    };
    let divDevicesfilteredByManufacturer = document.createElement("div");
    divDevicesfilteredByManufacturer.setAttribute("id","listOfDevicesByManufacturer");
    for (let i = 0; i < ArrayFiltered.length; i++) {
        divDevicesfilteredByManufacturer.innerHTML = `<br>Marca: ${ArrayFiltered[i].manufacturer} <br>Modelo: ${ArrayFiltered[i].model} <br>Número de serie: ${ArrayFiltered[i].serialNumber} <br>Usuario: ${ArrayFiltered[i].deviceUser} <br>Contraseña: ${ArrayFiltered[i].devicePass} <br>Token: ${ArrayFiltered[i].token}`;
        document.getElementById("searchDevicesByManufacturer").appendChild(divDevicesfilteredByManufacturer);
        console.log(ArrayFiltered[i]);
    }
}
/****************************************************************
********    Función que Carga el Formulario de Dispositivos *****
********                    a Onbordear                     *****
*****************************************************************
****************************************************************/
function newDeviceToOnboard(event){
    event.preventDefault();
    let formulario = event.target;
    let fabricante = formulario.children[1].value;
    console.log(fabricante);
    let modelo = formulario.children[4].value;
    let numeroDeSerie = formulario.children[7].value;
    let usuario = formulario.children[10].value;
    let password = formulario.children[13].value;
    let deviceToken = formulario.children[16].value;
    const dispositivo = new Device(fabricante,modelo,numeroDeSerie,usuario,password,deviceToken);
    dispositivo.onboardDevice(dispositivosOnboardeados,dispositivo);
    if (dispositivo.checkDevice()){
        dispositivosOnboardeados.push(dispositivo);
    }
    else {
        dispositivosOnboardeados.pop();
    }
    console.log(dispositivosOnboardeados);


    document.getElementById("deviceToOnboardForm").reset();
    dispositivosOnboardeados = JSON.stringify(dispositivosOnboardeados);
    console.log(dispositivosOnboardeados);
}

/************************************************************************************
********    Función que Detecta el evento de click en "Consultar Dispositivo    *****
********                             por Fabricante"                            *****
*************************************************************************************
************************************************************************************/
function submitSearchDeviceByManufacturer(event){
    event.preventDefault();
    //Elimino el Formulario Creado:
    let deviceToOnboardFormNode= document.getElementById("deviceToOnboardForm");
    deviceToOnboardFormNode.remove();
    //Creo el formuario para Consultar Dispositivos Onbordeados por Fabricante:
    let divDeviceToOnboardedByManufacturer = document.createElement("form");
    divDeviceToOnboardedByManufacturer.setAttribute("id","searchDevicesByManufacturer");
    divDeviceToOnboardedByManufacturer.innerHTML = `<label>Fabricante</label>
                                                    <input id="btn" required/><br>
                                                    <input type="submit" value="Consultar">`;
    document.getElementById("devicesToOnboard").appendChild(divDeviceToOnboardedByManufacturer);
    let submitSearchDeviceByManufacturerFormNode = document.getElementById("searchDevicesByManufacturer");
    submitSearchDeviceByManufacturerFormNode.addEventListener("submit", consultar);
}
function consultar(event){
    event.preventDefault();
    let formulario2 = event.target;
    console.log(formulario2.children[1].value);
    devicesByManufacturer(dispositivosOnboardeados, formulario2.children[1].value);
}
/************************************************************************************
********    Función que Detecta el evento de click en "Onbordear dispositivo"   *****
*************************************************************************************
************************************************************************************/
function submitNewDeviceToOnboard(event){
    event.preventDefault();
    //Elimino el Formulario Creado:
    let devicesByManufacturerNode = document.getElementById("searchDevicesByManufacturer");
    if (devicesByManufacturerNode!=null) {
        devicesByManufacturerNode.remove();
    };
    let deviceToOnboardFormNode= document.getElementById("deviceToOnboardForm");
    if (deviceToOnboardFormNode!=null) {
        deviceToOnboardFormNode.remove();
    };
    //Creo el formuario para Onbordear dispositivos:
    let divDeviceToOnboardForm = document.createElement("form");
    divDeviceToOnboardForm.setAttribute("id","deviceToOnboardForm");
    divDeviceToOnboardForm.innerHTML = `<label>Fabricante</label>
                                        <input required/><br>
                                        <label>Modelo</label>
                                        <input required/><br>
                                        <label>Número de Serie</label>
                                        <input required/><br>
                                        <label>Usuario</label>
                                        <input required/><br>
                                        <label>Contraseña</label>
                                        <input required/><br>
                                        <label>Token</label>
                                        <input required/><br>
                                        <input id="onboardBtn" type="submit" value="Onbordear Dispositivo">`;
    document.getElementById("devicesToOnboard").appendChild(divDeviceToOnboardForm);
    let submitDeviceByManufacturerFormNode = document.getElementById("deviceToOnboardForm");
    submitDeviceByManufacturerFormNode.addEventListener("submit", newDeviceToOnboard);
}

/************************************************************************************/
/************************************************************************************/
/*                                     MAIN                                         */
/************************************************************************************/
/************************************************************************************/
let  dispositivosOnboardeados = [];


let estado = true;

//Escucho la Opción de "Onbordear Dispositivos"
let submitDeviceToOnboardNode = document.getElementById("onboardButton");
submitDeviceToOnboardNode.addEventListener("click", submitNewDeviceToOnboard);
//Escucho la opción de "Consultar Dispsoitvos por Fabricante":
let submitDeviceByManufacturerNode = document.getElementById("searchButton");
submitDeviceByManufacturerNode.addEventListener("click", submitSearchDeviceByManufacturer);