console.log("Abriendo portal de la nave.....");
let portal = 1;
while (portal <= 5) {
    console.log("Portal número: " + portal);
    portal++;
}
console.log("todos los portales abiertos");

console.log("--------------");
console.log("Cuenta regresiva despegue de la nave de Morty");
let i = 10;
while (i >= 0) {
    console.log('Faltan ' + i + ' segundos para el despegue de la nave de Morty');
    i--;
}

console.log("--------------");
console.log("Recarga la pistola de portales de Rick");
let energia = 50;
let recarga = 10;
let totalRecarga = 0;
while (energia < 100) {
    energia += recarga;
    totalRecarga ++;
    console.log("Nivel de energía: " + energia + "%");
}
console.log("Pistola de portales recargada al 100% despues de:" + totalRecarga + "% de recarga");

console.log("--------------");
console.log("Consumo de Combustible de la nave de Rick");
let combustible = 100;
let consumo = 45;
let viaje = 0;
while (combustible >= consumo ) {
    combustible -= consumo;
    viaje++;
    console.log("Viaje número: " + viaje + " realizado, consumo de combustible: " + combustible + "%");
    if(combustible < 50) {
        console.log("Advertencia: Combustible bajo, nivel actual: " + combustible + "%");
    }
}
console.log("No hay suficiente combustible para realizar otro viaje");
console.log("total de viajes realizados: " + viaje);

console.log("--------------");
console.log("Activar portales de dimensiones peligrosas con Do ....... While");
let energiaPortal = 50;
do {
    console.log("Activando portal de dimensión peligrosa, nivel de energía: " + energiaPortal + "%");
    energiaPortal -= 15;
}
while (energiaPortal > 0);
console.log("Nivel de energía insuficiente para activar más portales");

console.log("--------------");
console.log("Comprar una pistola de portales para Rick;");
let ahorro = 580;
let meta = 500;
let ahorroSemanal = 70;
let semanas = 0;
do {
    ahorro += ahorroSemanal;
    semanas++;
    console.log("Semana " + semanas + ": Ahorro acumulado: " + ahorro + " unidades");
}
while (ahorro < meta);
console.log("Meta alcanzada después de " + semanas + " semanas");