
//CONSTRUYO CLASE PARA PEDIR CANTIDAD DE HORAS Y PRECIO//
/*
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
*/

//FUNCION PARA SUMAR MONTO DE LOS PRODUCTOS VENDIDOS//
/*
function vendidos(primerProducto, segundoProducto, tercerProducto){
    return primerProducto + segundoProducto + tercerProducto;
}
console.log(vendidos(1500, 800, 1000));
*/

//CARRITO DE COMPRAS
//ARRAY DE PRODUCTOS
const productos = [ 
{id: 1, articulo: "retrato", precio: 2000},
{id: 2, articulo: "iman", precio: 1300},
{id: 3, articulo: "album", precio: 4500},
];
console.log(productos.some(producto => producto.articulo === "afiche")); //CONSULTO SI ESTÁ INCLUIDO UN AFICHE//



//ARRAY PARA AGREGAR AL CARRITO
const compras = [];
const seleccionados = document.getElementById("seleccionados");
const agregar = (id) => {
    const producto = productos.find((item) => item.id === id)
    compras.push(producto);
    console.log(compras);
};

productos.forEach((item) => {
    const carrito = document.createElement("carrito");
    carrito.innerHTML = `<p>Id: ${item.id}</p>
    <h1>Articulo: ${item.articulo}</h1>
    <h2>Precio: ${item.precio}</h2>
    <button id="buton${item.id}">Agregar producto</button>
    `;
    document.body.append(carrito);
    const buton = document.getElementById(`buton${item.id}`);
    buton.addEventListener("click", () => agregar(item.id));
});

seleccionados.addEventListener("click", () => {
    compras.forEach(item => {
        const carrito = document.createElement("carrito");
        carrito.innerHTML = `<h2>Los productos que seleccionaste son los siguientes:</h2>
        <p>Id: ${item.id}</p>
        <h1>Articulo: ${item.articulo}</h1>
        <h2>Precio: ${item.precio}</h2>
        `;
        carrito.className = "titulo"
        document.body.append(carrito);
        localStorage.setItem("compras", JSON.stringify(compras)); //GUARDO EN STORAGE LOS PRODUCTOS SELECCIONADOS
    })
})

const boton = document.getElementById("boton");
const hora = document.getElementsById("hora");


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
        }});

//FORMULARIO DE PAGINA CONTACTO AUN SIN VINCULAR CON HTML CONTACTO//
/*
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