let dimension = 4;
switch (dimension) {
    case 1:
        console.log("Estás en la dimensión C-137.");
        break;
    case 2:
        console.log("Estás en la dimensión C-500.");
        break;
    case 3:
        console.log("Estás en la dimensión C-300.");
        break;
    case 4:
        console.log("Estás en la dimensión Byron García.");
        break;
    default:
        console.log("No reconocemos esta dimensión, ¡ten cuidado!");
}       

let personaje = "Rick";
switch (personaje) {
    case "Rick":
    case "Morty":
        console.log("¡Hola Rick y Morty! ¿Preparado para la locura?");
        break;
    case "Summer":
        console.log("¡Hola Summer! ¿Lista para la acción?");
        break;
    default:
        console.log("No reconocemos a este personaje, ¡ten cuidado!");
}

let energia = 50;
switch (true) {
    case (energia > 0 && energia <= 25):
        console.log("Tienes poca energía para la aventura.");
        break;
    case (energia > 50 && energia <= 75):
        console.log("Tienes suficiente energía para la aventura.");
        break;
    case (energia > 75  && energia <= 100):
        console.log("Tu energía es alta, ¡ten cuidado!");
        break;
    default:
        console.log("No tienes suficiente energía para continuar la aventura.");
}