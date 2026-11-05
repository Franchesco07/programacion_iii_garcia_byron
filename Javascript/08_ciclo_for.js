console.log('Ciclo for:');
for (let i = 1; i <= 5; i++) {
    console.log("Interacción número: " + i);
}


console.log('Cuenta regresesiva despegue de la nave de Morty');
for (let i = 10; i >= 0; i--) {
    console.log('Faltan ' +i + ' segundos para el despegue de la nave de Morty');
}

console.log("cuenta regresiva despegue de la nave de Rick");
for (let i = 10; i >= 0; i--) {
    if (i == 0) {
        console.log("Despegue de la nave de Rick");
    } else {
        console.log('Faltan ' +i + ' segundos para el despegue de la nave de Rick');
    }
}

console.log("nivel de energía de Rick");
let energia = 50;
for (let i = 0; i <= 100; i += 10) {
    if (energia >= i) {
        console.log("Nivel de energía: " + i + "%");
    }
}

const consumoPorviaje = 10;
let totalConsumido = 0;
for (let viaje =1; viaje <= 5; viaje++) {
    totalConsumido += consumoPorviaje;
    console.log("Viaje número: " + viaje);
    console.log("Total consumido hasta el momento: " + totalConsumido + " unidades de energía");
}
console.log("Total consumido: " + totalConsumido + " unidades");

console.log("Promedio de cristales");
let totalCristales = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let cristales = dia *5+5;
    totalCristales += cristales;
    console.log("Día " + dia + ": " + cristales + " cristales recolectados");
}
console.log("Total de cristales recolectados: " + totalCristales);
console.log("Promedio de cristales por día: " + (totalCristales / dias));

console.log("Dimension Peligrosa");
let segura = 0;
let peligrosa = 0;
for (let dimension = 1; dimension <= 10; dimension++) {
    if (dimension % 2 === 0) {
        console.log("Dimensión " + dimension + " es peligrosa");
        peligrosa++;
    } else {
        console.log("Dimensión " + dimension + " es segura");
        segura++;

    }
}
console.log("Total de dimensiones seguras: " + segura);
console.log("Total de dimensiones peligrosas: " + peligrosa);

console.log ("-------------------");

console.log("Recolección de Cristales en Dimensiones");
let cristales = [35, 50, 45, 80, 70, 90, 55];
let total = 0;
let viajeExitoso  = 0;
for (let i = 0; i < cristales.length; i++) {
    total += cristales[i];
    console.log("Viaje" + (i + 1) + ": " + cristales[i] + " cristales recolectados");
    if (cristales[i] >= 50) {
        viajeExitoso++;
    }else {
        console.log("Viaje" + (i + 1) + ": " + cristales[i] + " cristales recolectados");
    }
}
console.log("Total de cristales recolectados: " + total);
console.log("Número de viajes exitosos: " + viajeExitoso);

console.log("---------------_");
console.log("Recorrer Personajes con for.... of");
const personajes = ["Rick", "Morty", "Summer", "Beth", "Jerry"];
for (let personaje of personajes) {
    console.log("Personaje: " + personaje);
}

console.log("---------------_");
let nave = {
    nombre: "Nave de Rick",
    combustible: 1000,
    velocidad: 500,
    tripulante: ["Rick", "Morty", "Summer"]
}
console.log("Recorrer Personajes con for.... in");
for (let propiedad in nave) {
    console.log(propiedad + ": " + nave[propiedad]);
    if (propiedad === "tripulante") {
        console.log("Tripulante de la nave");
        for (let tripulante of nave[propiedad]) {
            console.log("Tripulante: " + tripulante);
        }
    }
}