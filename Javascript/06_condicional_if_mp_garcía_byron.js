const prompt = require('prompt-sync')();
console.log("Condicional if");

let energia = Number(prompt("Bibliotecario, ¿cuántos libros disponibles hay?"));

if (energia > 0) {
    console.log("Hay libros disponibles para préstamo.");
}

console.log("Condicional if-else");
let combustible = Number(prompt("Bibliotecario, ¿cuántos libros devueltos hay?"));

if (combustible > 0) {
    console.log("Hay libros devueltos para registrar.");
} else {
    console.log("No hay libros devueltos para registrar.");
}

console.log("Condicional if-else varios caminos");
let dimension = prompt("Bibliotecario, ¿en qué sección estás?");
if (dimension === "Ficción") {
    console.log("Estás en la sección correcta.");
} else if (dimension === "Terror") {
    console.log("Estás en la sección equivocada, ¡regresa a Ficción!");
} else {
    console.log("No reconocemos esta sección, ¡ten cuidado!");
}

console.log("Condicional if-else anidado");
let energia2 = Number(prompt("Bibliotecario, ¿cuántos libros disponibles hay?"));
let combustible2 = Number(prompt("Bibliotecario, ¿cuántos libros devueltos hay?"));
if (energia2 > 0) {
    if (combustible2 > 0) {
        console.log("Hay libros disponibles y devoluciones por registrar.");
    } else {
        console.log("Hay libros disponibles, pero no hay devoluciones para registrar.");
    }
}

console.log("Condicional if con operadores lógicos");
let energia3 = Number(prompt("Bibliotecario, ¿cuántos libros disponibles hay?"));
let combustible3 = Number(prompt("Bibliotecario, ¿cuántos libros devueltos hay?"));

if (energia3 > 0 && combustible3 > 0) {
    console.log("Hay libros disponibles y devoluciones por registrar.");
} else {
    console.log("No hay suficientes libros o devoluciones pendientes.");
}   

console.log("Control de préstamos internacionales");
let combustible4 = 400;
let energia4 = 50;
let rick_disponible = "si";
let summer_disponible = "no";
let nave_averiada = "no";

if (combustible4 >= 50 && energia4 >= 50 && rick_disponible === "si" && summer_disponible === "si" && nave_averiada === "no") {
    console.log("Préstamo autorizado");
} else {
    if (combustible4 < 50) {
        console.log("No hay suficiente stock para el préstamo");
    }
}
if (energia4 < 50) {
    console.log("No hay suficiente capacidad para el préstamo");
}
if (rick_disponible === "no") {
    console.log("El bibliotecario principal no está disponible");
}
if (summer_disponible === "no") {
    console.log("El asistente no está disponible");
}
if (nave_averiada === "si") {
    console.log("El sistema está averiado y no puede realizar el préstamo");
}

console.log("Misión inventario");
let cristalesObjetivos = 200;
let critalesRecolectados = 150;
let combustibleInicial = 1000;
let combustibleConsumido = 850;
let mortyHerido = "si";
let naveAveriada = "no";
let bonificacion = 0;
let porcentajeCumplimiento = (critalesRecolectados / cristalesObjetivos) * 100;
let combustibleRestante = combustibleInicial - combustibleConsumido;

console.log("Resultados de la auditoría:");
if (porcentajeCumplimiento > 90) {
    console.log("Auditoría exitosa, 100%");
} else if (porcentajeCumplimiento >= 70 && porcentajeCumplimiento < 90) {
    console.log("Auditoría exitosa, 70%");
} else if (porcentajeCumplimiento >= 50 && porcentajeCumplimiento < 70) {
    console.log("Auditoría exitosa, 50%");
} else {
    console.log("Auditoría fallida");
}

console.log("Evaluación de bonificación por desempeño:");
if (porcentajeCumplimiento > 90 && combustibleRestante >= 200) {
    console.log("Bonificación otorgada por desempeño excelente.");
} else {
    console.log("No se otorga bonificación.");
}

console.log("Regreso seguro a la estantería original");
if (mortyHerido === "si" || naveAveriada === "si") {
    console.log("Regreso a la estantería original con precaución.");
} else if (mortyHerido === "no" && naveAveriada === "no") {
    console.log("Regreso a la estantería original sin problemas.");
}           

console.log("Resumen del inventario");
console.log("Libros Objetivos:", cristalesObjetivos);
console.log("Libros Recolectados:", cristalesRecogidos);
console.log("Porcentaje de Cumplimiento:", porcentajeCumplimiento.toFixed(2) + "%");
console.log("Stock Inicial:", combustibleInicial);
console.log("Stock Consumido:", combustibleGastado);
console.log("Stock Restante:", combustibleRestante);
console.log("Socio con Incidencias:", mortyHerido);
console.log("Sistema Averiado:", naveAveriada);
console.log("Bonificación Otorgada:", bonificacion);