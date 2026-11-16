let nombre ="Rick"
let edad=70;
let planeta="Tierra C-137"
let energiaÇ=100;
let averiada = false;

let nave ={
    nombre: "Rick",
    edad: 70,
    planeta: "Tierra C-137",
    energia: 100,
    averiada: false,
}

console.log("Agregar una nueva propiedad a la nave de Rick");
nave.modelo= "Nave Espacial X-2000";
console.log("Modelo de la nave: " + nave.modelo);

nave["capacidadPasajeros"] = 5;
console.log("Capacidad de pasajeros: " + nave.capacidadPasajeros);

console.log("Actualizar el nivel de energía de la nave de Rick");
nave.energia = 80;
console.log("Nivel de energía actualizado: " + nave.energia + "%");
nave["averiada"] = true;
console.log("Estado de la nave actualizado: " + (nave.averiada ? "Averiada" : "En buen estado"));

console.log("Eliminar una propiedad de la nave de Rick");
delete nave.capacidadPasajeros;
console.log("Propiedad 'capacidadPasajeros' eliminada. Información actualizada de la nave:");
console.log(nave);

console.log("Recorrer las propiedaes de la nave de Rick");
for (let propiedad in nave) {
    console.log(propiedad + ":" + nave[propiedad]);

}console.log("---------------")
let objetosRick = {
    pistola: 1,
    granada: 2,
    cerveza: 3,
    cristales: 4,
}
let total = 0;

for (let i in objetosRick) {
    total += objetosRick[i];
}
console.log("total de objetos: " + total);