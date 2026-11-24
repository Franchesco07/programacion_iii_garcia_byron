
const portadaLibro = document.getElementById("portadaLibro");
const cambiarLibro = document.getElementById("cambiarLibro");
const verCategoria = document.getElementById("verCategoria");
const categoria = document.getElementById("categoria");


cambiarLibro.addEventListener("click", function () {
    if (portadaLibro.getAttribute("title") === "Don Quijote de la Mancha") {
        portadaLibro.setAttribute("src", "cien_anos_soledad.jpeg");
        portadaLibro.setAttribute("title", "Cien años de soledad");
        portadaLibro.dataset.categoria = "Realismo Mágico";
    } else {
        portadaLibro.setAttribute("src", "don_quijote.jpeg");
        portadaLibro.setAttribute("title", "Don Quijote de la Mancha");
        portadaLibro.dataset.categoria = "Clásico";
    }
});

verCategoria.addEventListener("click", function () {
    categoria.textContent = "Categoría: " + portadaLibro.dataset.categoria;
});

const estadoPrestamo = document.getElementById("estadoPrestamo");
const cambiarEstado = document.getElementById("cambiarEstado");

cambiarEstado.addEventListener("click", function () {
    if (estadoPrestamo.textContent === "Estado: Disponible") {
        estadoPrestamo.style.backgroundColor = "red";
        estadoPrestamo.style.color = "white";
        estadoPrestamo.textContent = "Estado: Prestado";
    } else {
        estadoPrestamo.style.backgroundColor = "green";
        estadoPrestamo.style.color = "white";
        estadoPrestamo.textContent = "Estado: Disponible";
    }
});