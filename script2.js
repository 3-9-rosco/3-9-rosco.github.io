const letras = ["A","B","C","Ç","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const preguntas = {
  "A": { pregunta: "Con la A: ADIVINA GENIO.", respuesta: "adrian" },
  "B": { pregunta: "Con la B: Donde vivimos casi todos.", respuesta: "barcelona" },
  "C": { pregunta: "Con la C: Según Chacón, objeto en League of Legends compuesto de mercurio que otorga daño físico, crítico y robo de vida.", respuesta: "cimitirra" },
  "Ç": { pregunta: "Con la Ç: Primera palabra en catalán que Joel jamás aprendió.", respuesta: "calçotet" },
  "D": { pregunta: "Con la D: Personaje de animación que comparte cumpleaños con Adrián y Joel (3 de septiembre del 2112) cuya apariencia emula a un felino azul y sin orejas.", respuesta: "" },
  "E": { pregunta: "Con la E: Princesa de Nintendo que protagoniza Super Mario Galaxy.", respuesta: "eeee rosalinda" },
  "F": { pregunta: "Con la F: Coño pero el que hizo esta mierda pero que por favor, pero que por favor se haya MUERTO. DELANTE DE SU MAMÁ. EN AÑO NUEVO. Y QUIÉN COÑO ES...", respuesta: "fede" },
  "G": { pregunta: "Con la G: Campeón portador de las mejores tetas del LoL.", respuesta: "gragas" },
  "H": { pregunta: "Con la H: Completa la frase: 'AMERICA YA! ...'.", respuesta: "hallo" },
  "I": { pregunta: "Con la I: Trabaja en el Alcampo un promedio de demasiadas horas.", respuesta: "ivan" },
  "J": { pregunta: "Con la J: ADIVINA GENIO 2.", respuesta: "joel" },
  "K": { pregunta: "Con la K: Programa preferido por los editores de la Gala para crear los clips editados.", respuesta: "kdenlive" },
  "L": { pregunta: "Con la L: Completa la frase: 'Tengo 20 litros de .... de cerdo'.", respuesta: "lefa" },
  "M": { pregunta: "Con la M: Género del cual Joel NO se siente atraido.", respuesta: "mujer" },
  "N": { pregunta: "Con la N: Describe a Obama con una palabra.", respuesta: "nigger" },
  "Ñ": { pregunta: "Con la Ñ: Durante el dia opuesto, aquello que a Joel más le gusta mamar.", respuesta: "coño" },
  "O": { pregunta: "Con la O: Personaje de Pol en la campaña de D&D.", respuesta: "orodeth" },
  "P": { pregunta: "Con la P: Desayuno, comida, merienda y cena de Manu.", respuesta: "porro" },
  "Q": { pregunta: "Con la Q: Lo q sale d la poya.", respuesta: "qm" },
  "R": { pregunta: "Con la R: Abreviatura de la Red Nacional de Ferrocarriles Españoles cuyo uso nunca se debe usar debido a que los motes son para los amigos, y estos no son mis amigos.", respuesta: "renfe" },
  "S": { pregunta: "Con la S: 'Oh, es el top enemigo, el mio tiene PUTO...'.", respuesta: "sida" },
  "T": { pregunta: "Con la T: El coche más poderoso que ha existido.", respuesta: "terrenator" },
  "U": { pregunta: "Con la U: MANKIND IS DEAD. BLOOD IS FUEL. HELL IS FULL.", respuesta: "ultrakill" },
  "V": { pregunta: "Con la V: Comunidad autónoma donde Adriana reside.", respuesta: "valencia" },
  "W": { pregunta: "Con la W: Pokemon de tipo agua introducido en la septima generación conocido por formar bancos con otros de su especie para defenderse de depredadores.", respuesta: "wishiwashi" },
  "X": { pregunta: "Con la X: Miedo a las tetas.", respuesta: "xenofobia" },
  "Y": { pregunta: "Contiene la Y: Ciberespacio de la série que comparte cumpleaños con Adrián y Joel (3 de septiembre del 2003) cuya trama se basa en cinco amigos derrotano a un virus digital.", respuesta: "lyoko" },
  "Z": { pregunta: "Con la Z: La zarza donde crecen las moras.", respuesta: "zarzamora" },
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
  img.src = "joelserio.png"; // asegúrate de que joelserio.png esté en la misma carpeta
  img.className = "uncanny-img";

  overlay.appendChild(img);
  document.body.appendChild(overlay);

  // Reproducir sonido
  const audio = new Audio("uncanny.mp3");
  audio.play();

  // Mantenerlo visible 3 segundos
  setTimeout(() => {
    overlay.remove();
  }, 3000);
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