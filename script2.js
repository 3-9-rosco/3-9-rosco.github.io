const letras = ["A","B","C","Ç","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const preguntas = {
  "A": { pregunta: "Con la A: ADIVINA GENIO.", respuesta: "adrian" },
  "B": { pregunta: "Con la B: .", respuesta: "" },
  "C": { pregunta: "Con la C: .", respuesta: "" },
  "Ç": { pregunta: "Con la Ç: .", respuesta: "" },
  "D": { pregunta: "Con la D: .", respuesta: "" },
  "E": { pregunta: "Con la E: .", respuesta: "" },
  "F": { pregunta: "Con la F: .", respuesta: "" },
  "G": { pregunta: "Con la G: .", respuesta: "" },
  "H": { pregunta: "Con la H: .", respuesta: "" },
  "I": { pregunta: "Con la I: .", respuesta: "" },
  "J": { pregunta: "Con la J: ADIVINA GENIO 2.", respuesta: "joel" },
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
};

let indice = 0;
let aciertos = 0;
let fallos = 0;

const rosco = document.getElementById("rosco");
const preguntaDiv = document.getElementById("pregunta");

// Dibujar letras en círculo adaptado
const radius = 40; // porcentaje del rosco
letras.forEach((letra, i) => {
  const angle = (i / letras.length) * 2 * Math.PI;
  const x = 45 + radius * Math.cos(angle); // porcentaje
  const y = 45 + radius * Math.sin(angle); // porcentaje
  const div = document.createElement("div");
  div.className = "letra";
  div.id = "letra-" + letra;
  div.innerText = letra;
  div.style.left = x + "%";
  div.style.top = y + "%";
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
}

// 🔊 Reproducir sonidos locales
function playSound(file) {
  const audio = new Audio(file);
  audio.play();
}

// 🔹 Pop-up animado normal
function mostrarPopup(tipo, texto) {
  const popup = document.createElement("div");
  popup.className = `popup ${tipo}`;
  popup.innerText = texto;
  document.body.appendChild(popup);

  void popup.offsetWidth; // forzar reflow
  popup.classList.add("fade");

  setTimeout(() => popup.remove(), 1000);
}

// 🔹 Pop-up especial para la E (Fallo)
function mostrarUncanny() {
  const overlay = document.createElement("div");
  overlay.className = "overlay-uncanny";

  const img = document.createElement("img");
  img.src = "joelserio.png"; // asegúrate de tener esta ruta
  img.className = "uncanny-img";

  overlay.appendChild(img);
  document.body.appendChild(overlay);

  playSound("uncanny.mp3");

  setTimeout(() => overlay.remove(), 1000);
}

function marcar(tipo) {
  const letra = letras[indice];
  const letraDiv = document.getElementById("letra-" + letra);

  if (tipo === "acierto") {
    letraDiv.classList.add("correcta");
    aciertos++;
    mostrarPopup("acierto", "¡Correcto!");
    playSound("acierto.mp3");
  } else if (tipo === "fallo") {
    letraDiv.classList.add("incorrecta");
    fallos++;

    if (letra === "E") {
      // Easter Egg Goku Prowler
      mostrarUncanny();
    } else {
      mostrarPopup("fallo", "¡Incorrecto!");
      playSound("fallo.mp3");
    }

  } else if (tipo === "pasapalabra") {
    letraDiv.classList.add("pasada");
    mostrarPopup("pasapalabra", "¡Pasapalabra!");
    playSound("pasapalabra.mp3");
  }

  siguiente();
}

function siguiente() {
  indice++;
  if (indice >= letras.length) {
    preguntaDiv.innerText = `Juego terminado ✅ Aciertos: ${aciertos}, Fallos: ${fallos}`;
    document.getElementById("controles").style.display = "none";
  } else {
    mostrarPregunta();
  }
}