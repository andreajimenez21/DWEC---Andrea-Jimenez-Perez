// juego.js - lógica del juego y puntuación

// REQUISITO 2: formatear el nombre con métodos de String
// Ejemplo: "  aNDrEa " -> "Andrea"
function formatearNombre(nombre) {
    nombre = nombre.trim();
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}

// REQUISITO 2: panel del jugador
function cargarPanel() {
    var nombre = sessionStorage.getItem("nombre");
    var fecha = new Date(sessionStorage.getItem("fecha"));
    var edad = calcularEdad(fecha);
    var dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

    document.getElementById("titulo").textContent = "Jugador: " + formatearNombre(nombre);
    document.getElementById("edad").textContent = "Edad: " + edad + " años";

    // Método de Date: getDay() devuelve el día de la semana (0 = domingo)
    document.getElementById("diaNacimiento").textContent = "Naciste un " + dias[fecha.getDay()];
    var panel = document.getElementById("panel");
    if (edad < 18) {
        panel.style.backgroundColor = "#d6e4ff"; // menores: azul claro
    } else {
        panel.style.backgroundColor = "#e8d9ff"; // mayores: lila claro
    }

}

// REQUISITO 6: el script está en el head, así que esperamos a que cargue la página
window.addEventListener("DOMContentLoaded", function () {
    // Si no hay jugador, volvemos al inicio
    if (sessionStorage.getItem("nombre") == null) {
        window.location.href = "index.html";
        return;
    }
    cargarPanel();
});