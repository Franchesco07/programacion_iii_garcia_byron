// Inspeccionamos el objeto global del documento en la consola
console.log(document);

// Seleccionamos el h1 principal por su ID y modificamos su texto inicial
const titulo = document.getElementById("titulo");
console.log(titulo);

titulo.textContent = "Gestión de Biblioteca Central";

/*--------------------------*/
// 1. Control de apertura de la sala de lectura (antes: estado del portal)
const estado = document.getElementById("estado");
const botonSala = document.getElementById("botonSala");

botonSala.addEventListener("click", function() {
    console.log("Ejecutando click en abrir sala!");
    estado.textContent = "¡Sala de Lectura Abierta!";
    console.log("Texto cambiado en el elemento estado");
    alert("Proceso de Apertura de Sala Terminado");
});

/*---------------------------*/
// 2. Aviso rápido para el usuario o bibliotecario (antes: saludo a Morty)
const mensaje = document.getElementById("mensaje");
const botonMensaje = document.getElementById("botonMensaje");

botonMensaje.addEventListener("click", function() {
    mensaje.textContent = "Usuario habilitado para solicitar préstamos";
});

/*------------------------------*/
// 3. Contador acumulativo de libros prestados (antes: contador de viajes)
let prestamos = 0;
const contador = document.getElementById("contador");
const nuevoPrestamo = document.getElementById("nuevoPrestamo");

nuevoPrestamo.addEventListener("click", function() {
    prestamos += 1;
    contador.textContent = prestamos;
});