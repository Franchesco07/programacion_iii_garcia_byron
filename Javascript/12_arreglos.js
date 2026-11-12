let personajes = ["Rick", "Morty","Summer","Jerry" ,"Byron", "Garcia"]
console.log("Elemento 0", personajes[0]);
console.log("Elemento 2", personajes[2]);
console.log("Elemento 5", personajes[5]);
console.log("Elemento 4", personajes[4]);

console.log("Tamaño del arreglo", personajes.length);

console.log("Incluir elementos a un arreglo con Push");
personajes.push("Rezabala");

personajes.unshift("FRANCHESc");
console.log("Personajes", personajes);

console.log("modificar elementos a un arreglo");
personajes[0]="Franchesco"
console.log("Personajes", personajes);

console.log("ELiminar un elemento del arreglo");

personajes.pop() /*Elimina último elemento*/
console.log("Personajes", personajes);


personajes.shift(); /*Elimina segundo elemento*/
console.log("Personajes", personajes);


personajes.splice(1,1); /*Elimina un rango*/
console.log("Personajes", personajes);


