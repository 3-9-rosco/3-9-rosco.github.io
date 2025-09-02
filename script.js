const letras = ["A","B","C","Ç","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const preguntas = {
  "A": { pregunta: "Con la A: .", respuesta: "" },
  "B": { pregunta: "Con la B: .", respuesta: "" },
  "C": { pregunta: "Con la C: .", respuesta: "" },
  "Ç": { pregunta: "Con la Ç: .", respuesta: "" },
  "D": { pregunta: "Con la D: .", respuesta: "" },
  "E": { pregunta: "Con la E: .", respuesta: "" },
  "F": { pregunta: "Con la F: .", respuesta: "" },
  "G": { pregunta: "Con la G: .", respuesta: "" },
  "H": { pregunta: "Con la H: .", respuesta: "" },
  "I": { pregunta: "Con la I: Palabra tabú, soez e irrespetuosa que representa la opinión de un compañero de Adrián acerca de la hermana de Marçal.", respuesta: "impregnable" },
  "J": { pregunta: "Con la J: .", respuesta: "" },
  "K": { pregunta: "Con la K: .", respuesta: "" },
  "L": { pregunta: "Con la L: .", respuesta: "" },
  "M": { pregunta: "Con la M: .", respuesta: "" },
  "N": { pregunta: "Con la N: .", respuesta: "" },
  "Ñ": { pregunta: "Con la Ñ: .", respuesta: "" },
  "O": { pregunta: "Con la O: .", respuesta: "" },
  "P": { pregunta: "Con la P: .", respuesta: "" },
  "Q": { pregunta: "Con la Q: .", respuesta: "" },
  "R": { pregunta: "Con la R: .", respuesta: "" },
  "S": { pregunta: "Con la S: .", respuesta: "" },
  "T": { pregunta: "Con la T: .", respuesta: "" },
  "U": { pregunta: "Con la U: .", respuesta: "" },
  "V": { pregunta: "Con la V: .", respuesta: "" },
  "W": { pregunta: "Con la W: .", respuesta: "" },
  "X": { pregunta: "Con la X: .", respuesta: "" },
  "Y": { pregunta: "Con la Y: .", respuesta: "" },
  "Z": { pregunta: "Con la Z: .", respuesta: "" },
  // ... añade más preguntas aquí
};

let indice = 0;
let aciertos = 0;
let fallos = 0;

const rosco = document.getElementById("rosco");
const preguntaDiv = document.getElementById("pregunta");
const inputRespuesta = document.getElementById("respuesta");

// Dibujar letras en círculo
const radius = 150;
letras.forEach((letra, i) => {
  const angle = (i / letras.length) * 2 * Math.PI;
  const x = radius * Math.cos(angle) + 170;
  const y = radius * Math.sin(angle) + 170;
  const div = document.createElement("div");
  div.className = "letra";
  div.id = "letra-" + letra;
  div.innerText = letra;
  div.style.left = x + "px";
  div.style.top = y + "px";
  rosco.appendChild(div);
});

mostrarPregunta();

function mostrarPregunta() {
  const letra = letras[indice];
  if (preguntas[letra]) {
    preguntaDiv.innerText = preguntas[letra].pregunta;
  } else {
    preguntaDiv.innerText = "Sin pregunta para " + letra;
  }
  inputRespuesta.value = "";
  inputRespuesta.focus();
}

function comprobar() {
  const letra = letras[indice];
  const respuesta = inputRespuesta.value.trim().toLowerCase();
  if (preguntas[letra] && respuesta === preguntas[letra].respuesta) {
    document.getElementById("letra-" + letra).classList.add("correcta");
    aciertos++;
  } else {
    document.getElementById("letra-" + letra).classList.add("incorrecta");
    fallos++;
  }
  siguiente();
}

function pasar() {
  const letra = letras[indice];
  document.getElementById("letra-" + letra).classList.add("pasada");
  siguiente();
}

function siguiente() {
  indice++;
  if (indice >= letras.length) {
    preguntaDiv.innerText = `Juego terminado ✅ Aciertos: ${aciertos}, Fallos: ${fallos}`;
    inputRespuesta.style.display = "none";
  } else {
    mostrarPregunta();
  }
}
