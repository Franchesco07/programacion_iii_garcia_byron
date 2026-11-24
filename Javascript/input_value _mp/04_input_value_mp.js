const estantes = document.getElementById("estantes");
const librosPorEstante = document.getElementById("librosPorEstante");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

calcular.addEventListener("click", function() {
    if (estantes.value.trim() === "" || librosPorEstante.value.trim() === "") {
        resultado.textContent = "Completa ambos campos";
        return;
    }

    const cantidadEstantes = Number(estantes.value);
    const librosNumber = Number(librosPorEstante.value);

    if (!Number.isFinite(cantidadEstantes) || !Number.isFinite(librosNumber)) {
        resultado.textContent = "Ingrese valores válidos";
        return;
    }

    const total = cantidadEstantes * librosNumber;
    resultado.textContent = "Total de libros: " + total;
});