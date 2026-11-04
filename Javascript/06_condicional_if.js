const prompt = require('prompt-sync')();
console.log("Condicional if");

let energia = Number(prompt("Rick, ¿cuánta energía tienes?"));

if (energia > 0) {
    console.log("Tienes energía para continuar la aventura.");
}

console.log("Condicional if-else");
let combustible = Number(prompt("Rick, ¿cuánto combustible tienes?"));

if (combustible > 0) {
    console.log("Tienes combustible para continuar la aventura.");
} else {
    console.log("No tienes suficiente combustible para continuar la aventura.");
}

console.log("Condicional if-else varios caminos");
let dimension = prompt("Rick, ¿en qué dimensión estás?");
if (dimension === "C-137") {
    console.log("Estás en la dimensión correcta.");
} else if (dimension === "C-500") {
    console.log("Estás en la dimensión equivocada, ¡regresa a C-137!");
} else {
    console.log("No reconocemos esta dimensión, ¡ten cuidado!");
}