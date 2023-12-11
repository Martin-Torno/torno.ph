
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
let moneda = prompt("Ingrese tipo de moneda (usd)");
while(moneda != "usd") {
        alert("Solo se admiten dolares");
    }

