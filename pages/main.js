//CALCULAR PRECIO POR HORAS (DOM)

const boton = document.getElementById("boton");
const hora = document.getElementsByName("hora");


//funcion al hacer click
boton.addEventListener("click", hora);

hora.addEventListener("keyup", (e) => {
    if(e.key === "1"){
        calculador.innerHTML = "<h1>El precio por 1 hora es $3000</h1>";
        calculador.className = "titulo"
    }
    else if(e.key === "2"){
        calculador.innerHTML = "<h1>El precio por 2 horas es $6000</h1>";
        calculador.className = "titulo"
    }
    else if(e.key === "3"){
        calculador.innerHTML = "<h1>El precio por 3 horas tiene una promoción al valor de $8200</h1>";
        calculador.className = "titulo"
    }
    else if(e.key === "4"){
        calculador.innerHTML = "<h1>El precio por 4 horas tiene una promoción al valor de $11000</h1>";
        calculador.className = "titulo"
    }
    else if(e.key === "5"){
        calculador.innerHTML = "<h1>El precio por 5 horas tiene una promoción al valor de $14000</h1>";
        calculador.className = "titulo"
    }
    else if(e.key === "6"){
        calculador.innerHTML = "<h1>El precio por 6 horas tiene una promoción al valor de $17300</h1>";
        calculador.className = "titulo"
        }
    else{
        calculador.innerHTML = "<h1>El servicio de sesión fotográfica es de 1 a 6 horas</h1>";
        calculador.className = "titulo"
        }
        });
// MIENTRAS LA MONEDA SEA DOLAR//

/*
let moneda = String;
do{
    moneda = prompt("Indique cual es el tipo de moneda");
}
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

console.log(productos.some(producto => producto.articulo === "afiche")); //CONSULTO SI ESTÁ INCLUIDO UN AFICHE//

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

//FORMULARIO DE PAGINA CONTACTO AUN SIN VINCULAR CON HTML CONTACTO//

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // NO SE RECARGA EL FORMULARIO//
    let inputs = e.target.children;
    alert(inputs[0].value);
    alert(inputs[1].value);
    if(!inputs[0].value.includes("@")){
        inputs[0].value = "";
        alert("El campo debe tener el @");
    }
    });
*/