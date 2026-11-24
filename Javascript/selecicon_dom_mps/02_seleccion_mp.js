
const librosDisponibles = document.getElementById("libros-disponibles");
const seccion = document.getElementById("seccion");
const prestamo = document.getElementById("prestamo");

librosDisponibles.textContent = "Libros disponibles: 45";
seccion.textContent = "Sección: Literatura Latinoamericana";
prestamo.textContent = "Préstamo Activado";


const autor = document.querySelector(".autor");
autor.textContent = "Gabriel García Márquez (Destacado del mes)";

const h2Catalogo = document.querySelector("h2");
h2Catalogo.textContent = "Proceso de Inventario";

const sucursal = document.querySelector("#sucursal");
sucursal.textContent = "Sucursal Centro - Quito";


const estadoLibro = document.querySelector("#libro-destacado .estado");
estadoLibro.textContent = "Reservado para lectura en sala";


const generos = document.querySelectorAll(".genero");
console.log(generos);
console.log(generos.length);


console.log(generos[0].textContent);
console.log(generos[1].textContent);
console.log(generos[2].textContent);
console.log(generos[3].textContent);
console.log(generos[4].textContent);
console.log(generos[5].textContent);


console.log("Recorrer a través de for");
for (let i = 0; i < generos.length; i++) {
    console.log(generos[i].textContent);
}

console.log("Con forEach");
generos.forEach(function (genero) {
    console.log(genero.textContent);
});

console.log("Con for of");
for (let genero of generos) {
    console.log(genero.textContent);
}