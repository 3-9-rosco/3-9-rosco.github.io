const letras = ["A","B","C","Ç","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const preguntas = {
  "A": { pregunta: "Con la A: ADIVINA GENIO.", respuesta: "adrian" },
  "B": { pregunta: "Con la B: Versión del juego de Pokémon favorita de tanto Joel como Adrián.", respuesta: "blanco" },
  "C": { pregunta: "Con la C: Insulto racista dirigido a máquinas impulsadas por IA.", respuesta: "clanker" },
  "Ç": { pregunta: "Con la Ç: Plato típico catalán compuesto por una cebolla alargada servida con salsa romesco.", respuesta: "calçots" },
  "D": { pregunta: "Con la D: Acción típica de Joel donde un aliado trata de asesinar a un enemigo debajo de su torre.", respuesta: "divear" },
  "E": { pregunta: "Con la E: Personaje en REPO que, tras verte, te persigue con dos cuchillas.", respuesta: "espantapajaros" },
  "F": { pregunta: "Con la F: Palabra favorita de Marçal en catalán.", respuesta: "forquilla" },
  "G": { pregunta: "Con la G: Tradición del grupo donde todos nos reunimos en Fin de Año a ver un video recopilatorio de nuestros clips.", respuesta: "gala" },
  "H": { pregunta: "Con la H: Completa la frase: 'Un ........ menos'.", respuesta: "haitiano" },
  "I": { pregunta: "Con la I: Palabra tabú, soez e irrespetuosa que representa la opinión de un compañero de Adrián acerca de la hermana de Marçal.", respuesta: "impregnable" },
  "J": { pregunta: "Con la J: ADIVINA GENIO 2.", respuesta: "joel" },
  "K": { pregunta: "Con la K: Moneda de cambio usada en el Reino.", respuesta: "kakera" },
  "L": { pregunta: "Con la L: Verdadera forma de Joel, fácilmente mostrada cuando juega Warwick.", respuesta: "loba" },
  "M": { pregunta: "Con la M: Pokémon favorito de Adrián basado en una familia feliz.", respuesta: "maushold" },
  "N": { pregunta: "Con la N: Primer main de Adrián en League of Legends.", respuesta: "nunu y willump" },
  "Ñ": { pregunta: "Con la Ñ: De forma coloquial, aparato reproductor masculino.", respuesta: "ñema" },
  "O": { pregunta: "Con la O: Nombre real del artista favorito de Joel.", respuesta: "alejandro" },
  "P": { pregunta: "Con la P: Palabra favorita de Kowalski que, además, forma parte del panel de sonidos del Reino.", respuesta: "porno" },
  "Q": { pregunta: "Con la Q: Como me comía a una gótica...", respuesta: "qlona" },
  "R": { pregunta: "Con la R: Nombre de la waifu favorita de Joel para GOONEAR.", respuesta: "rias" },
  "S": { pregunta: "Con la S: Según Chacón, propietaria del objeto Canción de batalla en League of Legends.", respuesta: "sujaila" },
  "T": { pregunta: "Con la T: Bacteria que traspasan los gitanos tras apuñalarte.", respuesta: "tetano" },
  "U": { pregunta: "Con la U: Primo negro de Alex y Adrián.", respuesta: "uaragano" },
  "V": { pregunta: "Con la V: Nombre del Santo cuyo día Adrián nunca fue a clases durante la ESO debido a que durante esas 24 horas Brazzers era gratuito.", respuesta: "valentin" },
  "W": { pregunta: "Con la W: Según Pacheco Cara Floja, algo genial.", respuesta: "wendingo" },
  "X": { pregunta: "Con la X: Jugador que marcó a Héctor Helio solito.", respuesta: "xavier" },
  "Y": { pregunta: "Con la Y: Citando a Marçal: 'QUE PUTO CÁNCER ME ESTÁN DANDO LAS PLANTAS DE LA...'.", respuesta: "zyra" },
  "Z": { pregunta: "Con la Z: Todas las exes de todos (real).", respuesta: "zorras" },
  // ... que haces viendo esto maricón
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
