console.log(document);

const titulo = document.getElementById("titulo");
console.log(titulo)

titulo.textContent ="Laboratorio Interdimensional";

/*--------------------------*/
const estado = document.getElementById("estado");
const botonPortal = document.getElementById("botonPortal");

botonPortal.addEventListener("click", function() {

    console.log("Ejecuntando click!")
    estado.textContent ="Potal! Activado";
    console.log("Texto cambiado en el elemento estado");
    alert("Proceso de Activación del Portal Terminado");
    
});

/*---------------------------*/

const mensaje = document.getElementById("mensaje");
const botonMensaje = document.getElementById("botonMensaje");

botonMensaje.addEventListener("click", function(){
    mensaje.textContent="Morty Listo para la aventura"
});

/*------------------------------*/

let viajes=0;
const contador = document.getElementById("contador");
const nuevoViaje = document.getElementById("nuevoViaje");
nuevoViaje.addEventListener("click", function() {
    viajes+=1;
    contador.textContent=viajes;
});

