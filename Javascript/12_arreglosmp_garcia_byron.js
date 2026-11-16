let libros = ["Cien años de soledad", "El principito", "1984", "Don Quijote", "Rayuela", "Ficciones"];
console.log("Elemento 0", libros[0]);
console.log("Elemento 2", libros[2]);
console.log("Elemento 5", libros[5]);
console.log("Elemento 4", libros[4]);

console.log("Tamaño del arreglo", libros.length);

console.log("Incluir elementos a un arreglo con push y unshift");
libros.push("Crónica de una muerte anunciada"); // Agrega al final

libros.unshift("el hobbit"); // Agrega al inicio
console.log("Libros", libros);

console.log("Modificar elementos de un arreglo");
libros[0] = "El Hobbit";
console.log("Libros", libros);

console.log("Eliminar un elemento del arreglo");

libros.pop(); // Elimina el último elemento
libros.pop(); // Nota: .pop() siempre elimina el último elemento (no recibe índices)

console.log("Libros", libros);

libros.shift(); // Elimina el primer elemento
console.log("Libros", libros);

libros.splice(1, 1); // Elimina 1 elemento a partir del índice 1
console.log("Libros", libros);