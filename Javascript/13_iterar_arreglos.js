let cristales = [30, 50, 70, 40];
let posicion = 2;
let nuevaEnergia = 160;

if (posicion >= 0 && posicion < cristales.length) {
    cristales[posicion] = nuevaEnergia;
} else {
    console.log("posición no válida");
}

console.log(cristales); 


let personajes = [
    { id: 1, nombre: "Rick", energia: 99, edad: 70},
    { id: 2, nombre: "Morty", energia: 80, edad: 13},
    { id: 3, nombre: "Byron", energia: 100, edad: 28},
]

console.log(personajes);
for (let personaje of personajes) {
    console.log("10:", personaje.id);
    console.log("nombre:", personaje.nombre);
    console.log("energia:", personaje["energia"]);
    console.log("edad:", personaje.edad);
}

console.log ("-----------");
console.log("Rick organiza sus misiones");
misiones = [
    {
        piloto: "Rick",
        cristales: [30,50,60],
    },
    {
        piloto: "Morty",
        cristales: [20,30,30],
    },
    {
        piloto: "Summer",
        cristales: [90,80,70],
    }
];
for (let mision of misiones) {
    totalCristales =0;
    console.log("piloto",mision.piloto);
    for (let cristal of mision.cristales) {
        console.log("Cristales Recolectados: ", cristal);
        totalCristales += cristal;
    }
    console.log("Total Cristales Recolectados por:", mision.piloto, "son:", totalCristales);

}

let cristalesOriginales = [30, 50, 70, 40];
let cristalesDobles = cristalesOriginales.map(elemento=>{
    return elemento *2;
});
console.log(cristalesDobles);
let validos = cristalesOriginales.filter(cristal=>cristal>=50);
let resultado = cristalesOriginales.reduce((acumulador,elemento)=>{
    return acumulador+elemento;
});


