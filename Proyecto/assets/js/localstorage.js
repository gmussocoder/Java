/* Uso de constructor y LocalStorage*/
listaProductos = [];
class VerticalProductoSolucion{
  constructor(vertical, producto, solucion){
      this.vertical = vertical;
      this.producto = producto;
      this.solucion = solucion;
  }
  vpsCheck(){
      console.log("vertical: " + this.vertical + " Producto: "+this.producto+" solucion: "+this.solucion);
  }
};

let vertical = "Agro";
let producto = "Monitoreo de Silos";
let solucion = "Optimización de Cosechas"

const vps = new VerticalProductoSolucion(vertical,producto,solucion);


$( document ).ready(function() {
  console.log('El DOM esta listo y guardo productos en localstorage');
  /*Captura de datos escrito en los inputs*/        
  let vertical = "Agro";
  let producto = "Monitoreo de Silos";
  let solucion = "Optimización de Cosechas"
  const vps = new VerticalProductoSolucion(vertical,producto,solucion);
  vps.vpsCheck();
  listaProductos.push(vps);
  vertical = "Utilities";
  producto = "Monitoreo de Consumo de Agua";
  solucion = "Optimización de Servicios Públicos"
  const vps2 = new VerticalProductoSolucion(vertical,producto,solucion);
  vps2.vpsCheck();
  listaProductos.push(vps2);
  /*Guardando los datos en el LocalStorage*/
  localStorage.setItem("Vertical", listaProductos[0].vertical);
  localStorage.setItem("Producto", listaProductos[0].producto);
  localStorage.setItem("Solucion", listaProductos[0].solucion);
  localStorage.setItem("Vertical", listaProductos[1].vertical);
  localStorage.setItem("Producto", listaProductos[1].producto);
  localStorage.setItem("Solucion", listaProductos[1].solucion);
  console.log("Productos guardados en LocalStorage");
});