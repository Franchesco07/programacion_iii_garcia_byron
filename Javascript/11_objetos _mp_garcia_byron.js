// Variables individuales
let titulo = "Cien años de soledad";
let anioPublicacion = 1967;
let editorial = "Sudamericana";
let copiasDisponibles = 10;
let prestado = false;

// 1. Creación de un objeto
let libro = {
    titulo: "Cien años de soledad",
    anioPublicacion: 1967,
    editorial: "Sudamericana",
    copiasDisponibles: 10,
    prestado: false
};

// 2. Agregar nuevas propiedades (notación de punto y de corchetes)
console.log("Agregar una nueva propiedad al libro de la biblioteca");
libro.genero = "Realismo mágico";
console.log("Género del libro: " + libro.genero);

libro["numeroPaginas"] = 471;
console.log("Número de páginas: " + libro.numeroPaginas);

// 3. Actualizar propiedades existentes
console.log("Actualizar las copias disponibles del libro");
libro.copiasDisponibles = 8;
console.log("Copias disponibles actualizadas: " + libro.copiasDisponibles);

libro["prestado"] = true;
console.log("Estado del libro actualizado: " + (libro.prestado ? "Con ejemplares prestados" : "Todos en sala"));

// 4. Eliminar una propiedad
console.log("Eliminar una propiedad del libro");
delete libro.numeroPaginas;
console.log("Propiedad 'numeroPaginas' eliminada. Información actualizada del libro:");
console.log(libro);

// 5. Recorrer las propiedades del objeto con for...in
console.log("Recorrer las propiedades del libro");
for (let propiedad in libro) {
    console.log(propiedad + ": " + libro[propiedad]);
}

console.log("---------------");

// 6. Sumar los valores de las propiedades de un objeto (Inventario por categoría)
let inventarioBiblioteca = {
    novelas: 15,
    cienciaFiccion: 8,
    historia: 12,
    enciclopedias: 5
};

let totalLibros = 0;

for (let categoria in inventarioBiblioteca) {
    totalLibros += inventarioBiblioteca[categoria];
}
console.log("Total de libros en inventario: " + totalLibros);