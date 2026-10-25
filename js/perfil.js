// perfil.js - validación del perfil del jugador
// perfil.js - validación del perfil del jugador

var EDAD_MINIMA = 12;

function entrar() {
    var nombre = document.getElementById("nombre").value.trim();
    var fechaTexto = document.getElementById("fecha").value;
    var mensaje = document.getElementById("mensaje");

    // Si el nombre o la fecha estan vacios, acceso denegado
    if (nombre == "" || fechaTexto == "") {
        mensaje.textContent = "Acceso denegado";
        mensaje.className = "error";
        return;
    }

    var fecha = new Date(fechaTexto);
    var hoy = new Date();

    // La fecha tiene que ser anterior a hoy y cumplir la edad minima
    if (fecha >= hoy || calcularEdad(fecha) < EDAD_MINIMA) {
        mensaje.textContent = "Acceso denegado";
        mensaje.className = "error";
        return;
    }

    // De momento solo mostramos un mensaje, luego pasara a la pantalla del juego
    mensaje.textContent = "Acceso permitido";
    mensaje.className = "ok";
}

// El script esta en el head, asi que esperamos a que cargue la pagina
window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btnEntrar").addEventListener("click", entrar);
});