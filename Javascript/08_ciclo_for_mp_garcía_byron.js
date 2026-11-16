console.log('Ciclo for:');
for (let i = 1; i <= 5; i++) {
    console.log("Interacción número: " + i);
}

console.log('Cuenta regresiva entrega de libros de la biblioteca');
for (let i = 10; i >= 0; i--) {
    console.log('Faltan ' + i + ' segundos para la apertura de la biblioteca');
}

console.log("Cuenta regresiva apertura de la biblioteca central");
for (let i = 10; i >= 0; i--) {
    if (i == 0) {
        console.log("Apertura de la biblioteca central");
    } else {
        console.log('Faltan ' + i + ' segundos para la apertura de la biblioteca central');
    }
}

console.log("Nivel de libros disponibles");
let energia = 50;
for (let i = 0; i <= 100; i += 10) {
    if (energia >= i) {
        console.log("Nivel de disponibilidad: " + i + "%");
    }
}

const consumoPorviaje = 10;
let totalConsumido = 0;
for (let viaje = 1; viaje <= 5; viaje++) {
    totalConsumido += consumoPorviaje;
    console.log("Préstamo número: " + viaje);
    console.log("Total procesados hasta el momento: " + totalConsumido + " libros");
}
console.log("Total procesados: " + totalConsumido + " libros");

console.log("Promedio de libros prestados");
let totalCristales = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let cristales = dia * 5 + 5;
    totalCristales += cristales;
    console.log("Día " + dia + ": " + cristales + " libros prestados");
}
console.log("Total de libros prestados: " + totalCristales);
console.log("Promedio de libros por día: " + (totalCristales / dias));

console.log("Sección Restringida");
let segura = 0;
let peligrosa = 0;
for (let dimension = 1; dimension <= 10; dimension++) {
    if (dimension % 2 === 0) {
        console.log("Sección " + dimension + " es restringida");
        peligrosa++;
    } else {
        console.log("Sección " + dimension + " es libre");
        segura++;
    }
}
console.log("Total de secciones libres: " + segura);
console.log("Total de secciones restringidas: " + peligrosa);

console.log("-------------------");

console.log("Registro de Préstamos por Sección");
let cristales = [35, 50, 45, 80, 70, 90, 55];
let total = 0;
let viajeExitoso = 0;
for (let i = 0; i < cristales.length; i++) {
    total += cristales[i];
    console.log("Sección " + (i + 1) + ": " + cristales[i] + " libros prestados");
    if (cristales[i] >= 50) {
        viajeExitoso++;
    } else {
        console.log("Sección " + (i + 1) + ": " + cristales[i] + " libros prestados");
    }
}
console.log("Total de libros prestados: " + total);
console.log("Número de secciones exitosas: " + viajeExitoso);

console.log("---------------_");
console.log("Recorrer Bibliotecarios con for.... of");
const personajes = ["Carlos", "Sofía", "Ana", "Luis", "Elena"];
for (let personaje of personajes) {
    console.log("Bibliotecario: " + personaje);
}

console.log("---------------_");
let nave = {
    nombre: "Biblioteca Central",
    combustible: 1000,
    velocidad: 500,
    tripulante: ["Carlos", "Sofía", "Ana"]
}
console.log("Recorrer Datos de la Biblioteca con for.... in");
for (let propiedad in nave) {
    console.log(propiedad + ": " + nave[propiedad]);
    if (propiedad === "tripulante") {
        console.log("Personal de turno");
        for (let tripulante of nave[propiedad]) {
            console.log("Personal: " + tripulante);
        }
    }
}
let misiones = [ 
    { nombre: "Inventario 1", cristales: 50, meta: 100, persoanje: "Carlos" },
    { nombre: "Inventario 2", cristales: 30, meta: 80, persoanje: "Sofía" },
    { nombre: "Inventario 3", cristales: 70, meta: 90, persoanje: "Ana" }
];

let exitosas = 0;
for (let mision of misiones) {
    let porcentaje = (mision.cristales / mision.meta) * 100;
    console.log(mision.nombre + " - " + mision.persoanje + ": " + porcentaje.toFixed(2) + "% de inventario registrado");
    if (porcentaje >= 90) {
        exitosas++;
    } else {
        console.log(mision.nombre + " - " + mision.persoanje + ": No se alcanzó la meta de inventario");
    }
}
console.log("Número de inventarios exitosos: " + exitosas);

console.log("---------------_");
console.log("Uso de break y continue");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Se encontró el libro 5, se detiene el ciclo");
        break;
    }
    console.log("Libro: " + i);
}

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Se encontró el libro 5, se omite esta iteración");
        continue;
    }
    console.log("Libro: " + i);
}