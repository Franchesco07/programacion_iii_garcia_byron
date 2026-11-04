console.log("Operadores Aritméticos:");
let a = 10;
let b = 5;
console.log("Suma: a + b =", a + b);
console.log("Resta: a - b =", a - b);
console.log("Multiplicación: a * b =", a * b);
console.log("División: a / b =", a / b);
console.log("Módulo: a % b =", a % b);
console.log("Potencia: a ** b =", a ** b);

console.log("\nOperadores de Comparación:");
console.log("a es igual a b:", a == b);
console.log("a es diferente de b:", a != b);
console.log("a es estrictamente igual a b:", a === b);
console.log("a es estrictamente diferente de b:", a !== b);
console.log("a es mayor que b:", a > b);
console.log("a es menor que b:", a < b);
console.log("a es mayor o igual a b:", a >= b);
console.log("a es menor o igual a b:", a <= b);

console.log("\nOperadores Lógicos:");
let c = true;
let d = false;
console.log("c and d:", c && d);
console.log("c or d:", c || d);
console.log("Not c:", !c);
console.log("Not d:", !d); 

console.log("\nOperadores de Asignación:");
let e = 10;
console.log("Valor inicial de e:", e);
e += 5; // e = e + 5
console.log("Después de e += 5:", e);
e -= 3; // e = e - 3
console.log("Después de e -= 3:", e);
e *= 2; // e = e * 2
console.log("Después de e *= 2:", e);
e /= 4; // e = e / 4
console.log("Después de e /= 4:", e);
e %= 3; // e = e % 3
console.log("Después de e %= 3:", e);   


console.log("\nOperadores de Incremento y Decremento:");
let f = 5;
console.log("Valor inicial de f:", f);
f++; // Incremento
console.log("Después de f++:", f);
f--; // Decremento
console.log("Después de f--:", f);     

console.log("\nOperadores de Concatenación:");
let nombre = "Rick";
let apellido = "Sanchez";
let nombreCompleto = nombre + " " + apellido;
console.log("Nombre completo:", nombreCompleto);

console.log("\nOperadores de Comparación Estricta:");
let g = 10;
let h = "10";
console.log("g es estrictamente igual a h:", g === h);
console.log("g es estrictamente diferente de h:", g !== h);   

console.log("\nOperadores Ternarios:");
let edad = 20;
let esMayorDeEdad = (edad >= 18) ? "Sí, es mayor de edad" : "No, es menor de edad";
console.log("Resultado del operador ternario:", esMayorDeEdad);

console.log("Tabla de Multiplicar del 5:");
console.log(`1 X 5 = ${5*1}`);
console.log(`2 X 5 = ${5*2}`);
console.log(`3 X 5 = ${5*3}`);
console.log(`4 X 5 = ${5*4}`);
console.log(`5 X 5 = ${5*5}`);
console.log(`6 X 5 = ${5*6}`);
console.log(`7 X 5 = ${5*7}`);
console.log(`8 X 5 = ${5*8}`);
console.log(`9 X 5 = ${5*9}`);
console.log(`10 X 5 = ${5*10}`);