console.log("Control de Biblioteca: funciones en JavaScript");

// 1. Función sin parámetros
function abrirBiblioteca() {
    console.log("Biblioteca abierta: Bienvenidos a la sala de lectura.");
}

abrirBiblioteca();

console.log("----------");

// 2. Función con un parámetro
function registrarLector(nombre) {
    console.log("El lector " + nombre + " ha ingresado a la biblioteca.");
}

registrarLector("Ana");
registrarLector("Carlos");

console.log("----------");

// 3. Función con múltiples parámetros, condicional y retorno (Límite máximo de préstamos)
function prestarLibros(librosActuales, nuevosPrestamos) {
    let totalLibros = librosActuales + nuevosPrestamos;
    if (totalLibros > 10) {
        totalLibros = 10; // Límite máximo permitido por lector
    }
    console.log("Préstamo actualizado. Libros en posesión del lector: " + totalLibros);
    return totalLibros;
}

let librosPrestados = 5;
librosPrestados = prestarLibros(librosPrestados, 3);
librosPrestados = prestarLibros(librosPrestados, 4);

console.log("----------");

// 4. Función con operaciones matemáticas y retorno (Descuento en multas por retraso)
console.log("Calcular descuentos en multas de biblioteca");
function calcularMultaConDescuento(multa, descuento) {
    let multaFinal = multa - (multa * (descuento / 100));
    return multaFinal;
}

let multaOriginal = 100;
let porcentajeDescuento = 20;
let multaConDescuento = calcularMultaConDescuento(multaOriginal, porcentajeDescuento);
console.log("Multa Original: $" + multaOriginal + " | Multa con descuento: $" + multaConDescuento);

console.log("--------------------------");

// 5. Función que recorre un arreglo (Total de páginas o libros leídos en la semana)
function calcularTotalLibros(prestamosDiarios) {
    let total = 0;

    for (let i = 0; i < prestamosDiarios.length; i++) {
        total += prestamosDiarios[i];
    }
    return total;
}

let librosSemana = [10, 20, 30, 40]; 
let totalLibrosPrestados = calcularTotalLibros(librosSemana);
console.log("Total de libros prestados en el periodo: " + totalLibrosPrestados);

console.log("--------------------------");

// 6. Función que reutiliza otra función y evalúa arreglos anidados (Semanas con alta demanda)
function semanasAltaDemanda(registroMensual) {
    let semanasExitosas = 0;
    for (let i = 0; i < registroMensual.length; i++) {
        let totalSemana = calcularTotalLibros(registroMensual[i]);
        if (totalSemana > 50) {
            semanasExitosas++;
        }
    }
    return semanasExitosas;
}

let historialMensual = [[10, 20, 15], [30, 25, 10], [50, 10], [5, 5, 5]];

let totalSemanasDestacadas = semanasAltaDemanda(historialMensual);

console.log("Cantidad de semanas con alta demanda (>50 préstamos): " + totalSemanasDestacadas);

console.log("---------------------");