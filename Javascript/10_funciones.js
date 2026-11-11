console.log("Rick y Morty: funciones en JAvaScript")

function abrirPortal() {
    console.log("Portal abierto: Vamos a otra dimension.")
}

abrirPortal();

console.log("----------")

function pilotoNave(nombre) {
    console.log("El piloto " + nombre + "esta a bordo de la nave.")
}

pilotoNave("Rick")
pilotoNave("Morty")
console.log("----------")

function recargaPistola(energiaActual, recarga) {
    let energiaTotal = energiaActual + recarga;
    if (energiaTotal > 100) {
        energiaTotal = 100;
    }
    console.log("Pistola de portales recargada. Nivel de energía: " + energiaTotal + "%");
    return energiaTotal;
}

let energiaPistola = 50;
energiaPistola = recargaPistola(energiaPistola, 30);
energiaPistota = recargaPistola(energiaPistola, 40);

console.log("----------")
console.log("Calcular descuentos intedimensionales");
function calcularDescuento(precio, descuento) {
    let precioFinal = precio-(precio*(descuento/100));
    return precioFinal;
}
let precioOriginal = 100;
let porcentajeDescuento = 20;
let precioCOndescuento = calcularDescuento(precioOriginal, porcentajeDescuento);
console.log("Precio Original " + precioOriginal + " Precio con descuento: " + precioCOndescuento);



console.log("--------------------------");

function calculeTotal(cristal) {
    let cristalesTotal = 0;

    for (let i = 0; i < cristal.length; i++) {
        cristalesTotal += cristal[i];
    }
    return cristalesTotal;
}

let cristal = [10, 20, 30, 40]; 
let cristalesRecolectados = calculeTotal(cristal);
console.log("Total: " + cristalesRecolectados);

console.log("--------------------------");

function misionesExitosas(misiones) {
    let misionesExitosas = 0;
    for (let i = 0; i < misiones.length; i++) {
        let totalMision = calculeTotal(misiones[i]);
        if (totalMision > 50) {
            misionesExitosas++;
        }
    }
    return misionesExitosas;
}
let listadoMisiones = [
    [10, 20, 15],       // Total: 45 (No exitosa)
    [30, 25, 10],       // Total: 65 (Exitosa)
    [50, 10],           // Total: 60 (Exitosa)
    [5, 5, 5]           // Total: 15 (No exitosa)
];

let totalExitosas = misionesExitosas(listadoMisiones);

console.log("Cantidad de misiones exitosas: " + totalExitosas);