const mensaje = document.getElementById("mensaje");
const saludo = document.getElementById("saludo");
const ficha = document.getElementById("ficha");

mensaje.textContent = "Mensaje desde otro Universo";


saludo.innerHTML = "<strong>Hello con innerHTML</strong>";


ficha.innerHTML = `
  <h2>Rick Sanchez</h2>
  <p>Dimensión: C-137</p>
  <p>Especie: Humano</p>
  <p>Estado: Vivo</p>
`;


const nombre = document.getElementById("nombre");
const saludar = document.getElementById("saludar");
const registrar = document.getElementById("registrar");


registrar.addEventListener("click", function () {

  const valorNombre = nombre.value.trim();
  console.log("Ejecutando click", valorNombre);


  if (valorNombre === "") {
    saludar.textContent = "Por favor, escribe un nombre válido.";
    return;
  }

  saludar.textContent = `Hola ${valorNombre}`;
  nombre.value = ""; 
  nombre.focus();    
});