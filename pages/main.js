
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

//CALCULADOR DE PRECIOS POR HORA
        const boton = document.getElementById("boton");
        const hora = document.getElementById("hora");
        const calculador = document.getElementById("calculador");
        
        boton.addEventListener("click", () => {
            const horasIngresadas = parseInt(hora.value);
        
            if (horasIngresadas >= 1 && horasIngresadas <= 6) {
                // calcular segun hora ingresada
                const precio = calcularPrecio(horasIngresadas);
                calculador.innerHTML = `<h1>El precio por ${horasIngresadas} horas es $${precio}</h1>`;
                calculador.className = "titulo";
            } else {
                calculador.innerHTML = "<h1>El servicio de sesión fotográfica es de 1 a 6 horas</h1>";
                calculador.className = "titulo";
            }
        });
        
        
        // calcular precio segun cantidad de horas
        function calcularPrecio(horas) {
            const precios = [3000, 6000, 8200, 11000, 14000, 17300];
            return precios[horas - 1];
        }

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