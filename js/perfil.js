

// perfil.js - validación del perfil del jugador

var EDAD_MINIMA = 12;

function entrar() {
  var nombre = document.getElementById("nombre").value.trim();
  var fechaTexto = document.getElementById("fecha").value;
  var mensaje = document.getElementById("mensaje");

  // REQUISITO 1: si el nombre o la fecha estan vacios, acceso denegado
  if (nombre == "" || fechaTexto == "") {
    mensaje.textContent = "Acceso denegado";
    mensaje.className = "error";
    return;
  }

  var fecha = new Date(fechaTexto);
  var hoy = new Date();

  // REQUISITO 1: fecha anterior a hoy y edad minima
  if (fecha >= hoy || calcularEdad(fecha) < EDAD_MINIMA) {
    mensaje.textContent = "Acceso denegado";
    mensaje.className = "error";
    return;
  }

  // REQUISITO 5: sessionStorage (datos de la partida actual)
  sessionStorage.setItem("nombre", nombre);
  sessionStorage.setItem("fecha", fechaTexto);
  sessionStorage.setItem("puntos", 0);

  // REQUISITO 5: cookie (recuerda el ultimo jugador 7 dias)
  document.cookie = "ultimoJugador=" + nombre + "; max-age=604800; path=/";

  // Pasamos a la pantalla del juego
  window.location.href = "juego.html";
}

// REQUISITO 6: el script esta en el head, asi que esperamos a que cargue la pagina
window.addEventListener("DOMContentLoaded", function () {
  var ultimo = leerCookie("ultimoJugador");
  if (ultimo != null) {
    document.getElementById("bienvenida").textContent = "Último jugador: " + ultimo;
  }
  document.getElementById("btnEntrar").addEventListener("click", entrar);
});