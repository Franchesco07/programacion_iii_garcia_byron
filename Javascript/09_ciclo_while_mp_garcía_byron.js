console.log("Abriendo estantería de la biblioteca.....");
let portal = 1;
while (portal <= 5) {
    console.log("Estante número: " + portal);
    portal++;
}
console.log("todos los estantes abiertos");

console.log("--------------");
console.log("Cuenta regresiva apertura de la biblioteca");
let i = 10;
while (i >= 0) {
    console.log('Faltan ' + i + ' segundos para la apertura de la biblioteca');
    i--;
}

console.log("--------------");
console.log("Recarga de inventario de libros");
let energia = 50;
let recarga = 10;
let totalRecarga = 0;
while (energia < 100) {
    energia += recarga;
    totalRecarga++;
    console.log("Nivel de inventario: " + energia + "%");
}
console.log("Inventario recargado al 100% despues de:" + totalRecarga + " recargas");

console.log("--------------");
console.log("Consumo de ejemplares de la biblioteca");
let combustible = 100;
let consumo = 45;
let viaje = 0;
while (combustible >= consumo) {
    combustible -= consumo;
    viaje++;
    console.log("Préstamo número: " + viaje + " realizado, stock restante: " + combustible + "%");
    if (combustible < 50) {
        console.log("Advertencia: Stock bajo, nivel actual: " + combustible + "%");
    }
}
console.log("No hay suficiente stock para realizar otro préstamo");
console.log("Total de préstamos realizados: " + viaje);

console.log("--------------");
console.log("Activar secciones con Do ....... While");
let energiaPortal = 50;
do {
    console.log("Activando sección restringida, nivel de capacidad: " + energiaPortal + "%");
    energiaPortal -= 15;
} while (energiaPortal > 0);
console.log("Nivel de capacidad insuficiente para activar más secciones");

console.log("--------------");
console.log("Comprar libros nuevos para la biblioteca;");
let ahorro = 580;
let meta = 500;
let ahorroSemanal = 70;
let semanas = 0;
do {
    ahorro += ahorroSemanal;
    semanas++;
    console.log("Semana " + semanas + ": Presupuesto acumulado: " + ahorro + " unidades");
} while (ahorro < meta);
console.log("Meta de presupuesto alcanzada después de " + semanas + " semanas");