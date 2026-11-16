let copiasPorEstante = [30, 50, 70, 40];
let posicion = 2;
let nuevasCopias = 160;

if (posicion >= 0 && posicion < copiasPorEstante.length) {
    copiasPorEstante[posicion] = nuevasCopias;
} else {
    console.log("Posición no válida");
}

console.log(copiasPorEstante);

let libros = [
    { id: 1, titulo: "Cien años de soledad", copias: 99, anioPublicacion: 1967 },
    { id: 2, titulo: "El principito", copias: 80, anioPublicacion: 1943 },
    { id: 3, titulo: "1984", copias: 100, anioPublicacion: 1949 },
];

console.log(libros);
for (let libro of libros) {
    console.log("ID:", libro.id);
    console.log("Título:", libro.titulo);
    console.log("Copias:", libro["copias"]);
    console.log("Año de publicación:", libro.anioPublicacion);
}

console.log("-----------");

console.log("Control de préstamos por encargado");
let turnosPrestamos = [
    {
        encargado: "Ana",
        prestamosDiarios: [30, 50, 60],
    },
    {
        encargado: "Carlos",
        prestamosDiarios: [20, 30, 30],
    },
    {
        encargado: "Elena",
        prestamosDiarios: [90, 80, 70],
    }
];

for (let turno of turnosPrestamos) {
    let totalPrestamos = 0;
    console.log("Encargado:", turno.encargado);
    for (let prestamo of turno.prestamosDiarios) {
        console.log("Préstamos registrados:", prestamo);
        totalPrestamos += prestamo;
    }
    console.log("Total de préstamos registrados por:", turno.encargado, "son:", totalPrestamos);
}

console.log("-----------");

let copiasOriginales = [30, 50, 70, 40];

let copiasProyectadas = copiasOriginales.map(elemento => {
    return elemento * 2;
});
console.log(copiasProyectadas);

let estantesAbastecidos = copiasOriginales.filter(copia => copia >= 50);
console.log(estantesAbastecidos);

let totalGeneral = copiasOriginales.reduce((acumulador, elemento) => {
    return acumulador + elemento;
});
console.log("Total general:", totalGeneral);