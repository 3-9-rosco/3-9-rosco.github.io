// 🎵 Control de música de fondo
const music = document.getElementById("bg-music");
const toggle = document.getElementById("music-toggle");

// Iniciar sin reproducir para evitar autoplay bloqueado
let playing = false;

toggle.addEventListener("click", () => {
  if (!playing) {
    music.play();
    toggle.innerText = "🔇 Silenciar";
    playing = true;
  } else {
    music.pause();
    toggle.innerText = "🔊 Música";
    playing = false;
  }
});
