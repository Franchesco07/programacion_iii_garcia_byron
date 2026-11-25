
let libros = [
    {
        id: 1,
        libro: "Cien años de soledad",
        autor: "Gabriel García M.",
        año: "1967",
    },
    {
        id: 2,
        libro: "1984",
        autor: "George Orwell",
        año: "1940",
    },
    {
        id: 3,
        libro: "El nombre del viento",
        autor: "Patrick Rothfuss",
        año: "2007",
    }
]

const formulario = document.getElementById("formulario");
const libro = document.getElementById("libro");
const autor = document.getElementById("autor");
const año = document.getElementById("año");
const guardar = document.getElementById("guardar");
const cancelar = document.getElementById("cancelar");
const cantidad = document.getElementById("cantidad");
const contenedor = document.getElementById("contenedor");

function mostrarLibros() {
    contenedor.replaceChildren();
    libros.forEach(function(libro){

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");
        const titulo = document.createElement("h3");
        titulo.textContent = libro.libro;
        const autor = document.createElement("p");
        autor.textContent="Autor: "+ libro.autor;
        const año = document.createElement("p");
        año.textContent = "Año: "+ libro.año;

        const acciones = document.createElement("div");
        tarjeta.classList.add("acciones");

        const botonEditar = document.createElement("button")
        botonEditar.textContent="Editar";
        botonEditar.addEventListener("click", function(){
            editarLibro(libro.id)
        });
        botonEditar.classList.add("editar");

        const botonELiminar = document.createElement("button");
        botonELiminar.textContent = "Eliminar";
        botonELiminar.classList.add("eliminar");
        botonELiminar.addEventListener("click", function(){
            eliminarLibro(libro.id)
        });

        acciones.append(botonELiminar, botonEditar);
        tarjeta.append(titulo, autor, año, acciones);
        contenedor.appendChild(tarjeta);
    });
}

function eliminarLibro(id) {
    const libro = libros.find(function(l) {
        return l.id == id
    })
    const confirmar = confirm ("¿Eliminar a: "+ personajes.libro + "?");
    if (!confirmar) {
        return
    }
    libros = libros.filter ( function (libro){
        return libro.id!==id;
    })
    mostrarLibros();
}

idEditando = null;
function editarLibro(id) {
    const libros = libro.find(function(l){
        return l.id == id
    })
    libro.value == libro.libro;
    autor.value == libro.autor;
    año.value == libro.año;
    idEditando = id;
    guardar.textContent = "Editar";
    cancelar.hidden = false;
    libro.focus()
}

mostrarLibros();

siguienteID = 4;
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    const libroLibro = libro.value.trim();
    const autorLibro = autor.value;
    const añoLibro = año.value;
    if(idEditando === null) {
        const nuevoLibro = {
            id: siguienteID,
            libro: libroLibro,
            autor : autorLibro,
            año : añoLibro,
        }
    siguienteID++;
    libros.push(nuevoLibro);
    mostrarLibros();
    }
    else {
        const libro = libros.find(function(l) {
            return l.id == idEditando
        });
        libro.libro = libroLibro;
        libro.autor = autorLibro;
        libro.año = añoLibro;
    }
    mostrarLibros();
    limpiarFormulario();

});

function limpiarFormulario () {
    formulario.reset();
    idEditando = null;
    guardar.textContent("Agregar");
    cancelar.hidden = true;
}

cancelar.addEventListener("Click", function(){
    limpiarFormulario()
});
