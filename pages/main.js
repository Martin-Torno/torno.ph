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
        carrito.innerHTML = `<h2>Seleccionaste:</h2>
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
//CONDICION CON OPERADOR TERNARIO CON LIBRERIA SWEETALERT
        horasIngresadas >= 1 && horasIngresadas <= 6
            ? (() => {
                const precio = calcularPrecio(horasIngresadas);
                calculador.innerHTML = `<h1>El precio por ${horasIngresadas} horas es $${precio}</h1>`;
                calculador.className = "titulo";
            })()
            : (() => {
                Swal.fire({
                    icon: "error",
                    title: "¡ERROR!",
                    text: "El servicio de sesión de fotos es de 1 a 6 horas",
                    });
            })();
        });
        // calcular precio segun cantidad de horas
        function calcularPrecio(horas) {
            const precios = [3000, 6000, 8200, 11000, 14000, 17300];
            return precios[horas - 1];
        }
//PROMESAS CON FETCH
fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())
.then((response) => {
  response.forEach((contenido) => {
    li = document.createElement("li");
    li.innerHTML = ` <h2>${contenido.title}</h2>
                    <p>${contenido.body}</p>
                    `;
                    api.append(li);
  });
  });

