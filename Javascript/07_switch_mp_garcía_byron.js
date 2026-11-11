let dimension = 4;
switch (dimension) {
    case 1:
        console.log("Estás en la sección de Ficción.");
        break;
    case 2:
        console.log("Estás en la sección de Terror.");
        break;
    case 3:
        console.log("Estás en la sección de Ciencia.");
        break;
    case 4:
        console.log("Estás en la sección de Historia.");
        break;
    default:
        console.log("No reconocemos esta sección, ¡ten cuidado!");
}       

let personaje = "Bibliotecario";
switch (personaje) {
    case "Bibliotecario":
    case "Asistente":
        console.log("¡Hola personal de la biblioteca! ¿Preparados para organizar?");
        break;
    case "Lector":
        console.log("¡Hola lector! ¿Listo para buscar un libro?");
        break;
    default:
        console.log("No reconocemos a este usuario, ¡ten cuidado!");
}

let energia = 50;
switch (true) {
    case (energia > 0 && energia <= 25):
        console.log("Tienes pocos libros disponibles.");
        break;
    case (energia > 25 && energia <= 50):
        console.log("Tienes una cantidad moderada de libros.");
        break;
    case (energia > 50 && energia <= 75):
        console.log("Tienes suficientes libros en el inventario.");
        break;
    case (energia > 75  && energia <= 100):
        console.log("El inventario es alto, ¡ten cuidado!");
        break;
    default:
        console.log("No hay suficientes libros para continuar el préstamo.");
}

console.log("Calculadora de Biblioteca");
let numero1 = 10;
let numero2 = 5;
let operacion = "multiplicacion";
let resultado;
switch (operacion) {
    case "suma":
        resultado = numero1 + numero2;
        console.log("Resultado de la suma:", resultado);
        break;
    case "resta":
        resultado = numero1 - numero2;
        console.log("Resultado de la resta:", resultado);
        break;
    case "multiplicacion":
        resultado = numero1 * numero2;
        console.log("Resultado de la multiplicación:", resultado);
        break;
    case "division":
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            console.log("Resultado de la división:", resultado);
        } else {
            console.log("Error: No se puede dividir entre cero.");
        }
        break;
    default:
        console.log("Operación no reconocida.");
}   

if (resultado !== undefined) {
    console.log("El resultado de la operación es:", resultado);
}