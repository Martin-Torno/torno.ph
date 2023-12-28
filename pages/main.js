
//SALUDO E IDENTIFICADOR DE NOMBRE//
alert("Bienvenido a Torno PH");
let nombre = prompt("Ingresa tu nombre");
alert(`¡Hola ${nombre}! hace click en aceptar y escribí cuántas horas de sesión fográfica necesitás`);

//DECLARACIÓN DE VARIABLES PRECIOS POR HORA//
let horas = parseInt(prompt("Cantidad de horas(solo número)"));
let precio;

//SIMULADOR CALCULA PRECIO SEGÚN CANTIDAD DE HORAS//
if(horas === 1){
    alert(`El precio por ${horas} H es de ${precio = 3000}`);
}
if(horas === 2){
    alert(`El precio por ${horas} H es de ${precio = 6000}`);
}
if(horas === 3){
    alert(`El precio por ${horas} H tiene una promoción al valor de ${precio = 8200}`);
}
if(horas === 4){
    alert(`El precio por ${horas} H tiene una promoción al valor de ${precio = 11000}`);
}
if(horas === 5){
    alert(`El precio por ${horas} H tiene una promoción al valor de ${precio = 11200}`);
}
if(horas === 6){
        alert(`El precio por ${horas} H tiene una promoción al valor de ${precio = 17300}`);
    }
else{
        alert("El servicio de fotografía es de 1 a 6 horas");
    }

// MIENTRAS LA MONEDA SEA DOLAR//
let moneda = prompt("Ingrese tipo de moneda");
while(moneda != "peso") {
        alert("Solo se admiten pesos");
    }

//CONSTRUYO CLASE PARA PEDIR CANTIDAD DE HORAS Y PRECIO//
class Sesion{
  constructor(horas, precio){
    this.horas = horas;
    this.precio = precio;
  }
}
const sesion = [];
//ITERO HASTA 6 HORAS Y LE PONGO PRECIO A LAS SESIONES DESDE 1 HORA A 6 HORAS//

for (let index = 1; index <= 6; index++) {
    let horas = prompt("Ingrese cuantas horas");
    let precio = Number(prompt("Ingrese el precio"));

    let sesionPorHora = new Sesion(horas, precio);
    sesion.push(sesionPorHora);
  
}

console.log(sesion);


// ARRAYS Y OBJETOS DE PRODUCTOS PARA VENDER//

const productos = [{id: 1, articulo: "almanaque", precio: 1500},
{id: 2, articulo: "iman", precio: 800},
{id: 3, articulo: "retrato", precio: 1000}]

console.log(almanaque.includes('afiche')); //CONSULTO SI ESTÁ INCLUIDO UN AFICHE//

for (const producto of productos){
    console.log(producto.id);
    console.log(producto.articulo);
    console.log(producto.precio);
}

//FUNCION PARA SUMAR MONTO DE LOS PRODUCTOS VENDIDOS//

function vendidos(primerProducto, segundoProducto, tercerProducto){
    return primerProducto + segundoProducto + tercerProducto;
}
console.log(vendidos(1500, 800, 1000));