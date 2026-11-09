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


console.log("Condicional if-else anidado");
let energia2 = Number(prompt("Rick, ¿cuánta energía tienes?"));
let combustible2 = Number(prompt("Rick, ¿cuánto combustible tienes?"));
if (energia2 > 0) {
    if (combustible2  > 0) {
        console.log("Tienes energía y combustible para continuar la aventura.");
    } else {
        console.log("Tienes energía, pero no suficiente combustible para continuar la aventura.");
    }
}

console.log("Condicional if con operadores lógicos");
let energia3 = Number(prompt("Rick, ¿cuánta energía tienes?"));
let combustible3 = Number(prompt("Rick, ¿cuánto combustible tienes?"));

if (energia3 > 0 && combustible3 > 0) {
    console.log("Tienes energía y combustible para continuar la aventura.");
} else {
    console.log("No tienes suficiente energía o combustible para continuar la aventura.");
}   

console.log("Control de viajes internacionales");
let combustible4=400;
let energia4=50;
let rick_disponible="si";
let summer_disponible="no";
let nave_averiada="no";

if (combustible4 >= 50 && energia4 >= 50 && rick_disponible === "si" && summer_disponible === "si" && nave_averiada === "no") {
    console.log("Viaje autorizado");

} else {
    if (combustible4 < 50) {
        console.log("No hay suficiente combustible para el viaje");
    }
}
if (energia4<50) {
    console.log("No hay suficiente energía para el viaje");
}
if (rick_disponible==="no") {
    console.log("Rick no está disponible para el viaje");
}
if (summer_disponible==="no") {
    console.log("Summer no está disponible para el viaje");
}
if (nave_averiada==="si") {
    console.log("La nave está averiada y no puede realizar el viaje");
}


console.log("Mision interdimensional");
let cristalesObjetivos=200;
let critalesRecolectados=150;
let combustibleInicial=1000;
let combustibleConsumido=850;
let mortyHerido="si";
let naveAveriada="no";
let bonificacion=0;
let porcentajeCumplimiento=(critalesRecolectados/cristalesObjetivos)*100;
let combustibleRestante=combustibleInicial-combustibleConsumido;
console.log("Resultados de la misión:");
if (porcentajeCumplimiento> 90) {
    console.log("Misión exitosa, 100%");
} else if (porcentajeCumplimiento>=70 && porcentajeCumplimiento<90) {
    console.log("Misión exitosa, 70%");
} else if (porcentajeCumplimiento>=50 && porcentajeCumplimiento<70) {
    console.log("Misión exitosa, 50%");
} else {
    console.log("Misión fallida");
}

console.log("Evaluacion de bonificación poir desempeño:");
if (porcentajeCumplimiento>90 && combustibleRestante >=200) {
    console.log("Bonificación otorgada por desempeño excelente.");
} else {
    console.log("No se otorga bonificación.");
}

console.log("Regreso seguro a la dimension original");
if (mortyHerido==="si" || naveAveriada==="si") {
    console.log("Regreso a la dimensión original con precaución.");
} else if (mortyHerido==="no" && naveAveriada==="no") {
    console.log("Regreso a la dimensión original sin problemas.");
}           

console.log("Resumen de la misión");
console.log("Cristales Objetivos:", cristalesObjetivos);
console.log("Cristales Recolectados:", cristalesRecogidos);
console.log("Porcentaje de Cumplimiento:", porcentajeCumplimiento.toFixed(2) + "%");
console.log("Combustible Inicial:", combustibleInicial);
console.log("Combustible Consumido:", combustibleGastado);
console.log("Combustible Restante:", combustibleRestante);
console.log("Morty Herido:", mortyHerido);
console.log("Nave Averiada:", naveAveriada);
console.log("Bonificación Otorgada:", bonificacion);



