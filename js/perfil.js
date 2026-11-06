// perfil.js - validación del perfil del jugador

const EDAD_MINIMA = 12;

function entrar() {
  const nombre = document.getElementById("nombre").value.trim();
  const fechaTexto = document.getElementById("fecha").value;
  const mensaje = document.getElementById("mensaje");

  // REQUISITO 1: si el nombre o la fecha están vacíos, acceso denegado
  if (nombre === "" || fechaTexto === "") {
    mensaje.textContent = "Acceso denegado";
    mensaje.className = "error";
    return;
  }

  const fecha = new Date(fechaTexto);
  const hoy = new Date();

  // REQUISITO 1: fecha anterior a hoy y edad mínima
  if (fecha >= hoy || calcularEdad(fecha) < EDAD_MINIMA) {
    mensaje.textContent = "Acceso denegado";
    mensaje.className = "error";
    return;
  }

  // REQUISITO 5: sessionStorage (datos de la partida actual)
  sessionStorage.setItem("nombre", nombre);
  sessionStorage.setItem("fecha", fechaTexto);
  sessionStorage.setItem("puntos", 0);

  // REQUISITO 5: cookie (recuerda el último jugador 7 días)
  document.cookie = "ultimoJugador=" + nombre + "; max-age=604800; path=/";

  // Pasamos a la pantalla del juego
  window.location.href = "juego.html";
}

// REQUISITO 6: el script está en el head, así que esperamos a que cargue la página
document.addEventListener("DOMContentLoaded", function () {
  const ultimo = leerCookie("ultimoJugador");
  if (ultimo !== null) {
    document.getElementById("bienvenida").textContent = "Último jugador: " + ultimo;
  }
  document.getElementById("btnEntrar").addEventListener("click", entrar);
});

