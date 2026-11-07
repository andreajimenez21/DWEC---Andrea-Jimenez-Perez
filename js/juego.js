
// juego.js - lógica del juego y puntuación

// REQUISITO 2: formatear el nombre con métodos de String
// Ejemplo: "  aNDrEa " -> "Andrea"
function formatearNombre(nombre) {
    nombre = nombre.trim();
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}

// REQUISITO 2: panel del jugador
function cargarPanel() {
    const nombre = sessionStorage.getItem("nombre");
    const fecha = new Date(sessionStorage.getItem("fecha"));
    const edad = calcularEdad(fecha);
    const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

    document.getElementById("titulo").textContent = "Jugador: " + formatearNombre(nombre);
    document.getElementById("edad").textContent = "Edad: " + edad + " años";

    // Método de Date: getDay() devuelve el día de la semana (0 = domingo)
    document.getElementById("diaNacimiento").textContent = "Naciste un " + dias[fecha.getDay()];

    // REQUISITO 2: cambiar el estilo del panel según los datos
    const panel = document.getElementById("panel");
    if (edad < 18) {
        panel.style.backgroundColor = "#a8d8ff"; // menores: azul claro
    } else {
        panel.style.backgroundColor = "#d9b3ff"; // mayores: lila claro
    }
}

// REQUISITO 3: array con los puntos que hay que alcanzar en cada misión
const objetivos = [30, 60, 100];

// REQUISITO 3: array donde guardamos las misiones que ya se han completado
let completadas = [];
let puntos = 0;

// REQUISITO 3: número aleatorio entre min y max (Math.random y Math.floor)
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// REQUISITO 3: mira los objetivos por orden y guarda con push los que se han conseguido
function comprobarMisiones() {
    let i = completadas.length; // posición de la siguiente misión pendiente
    while (i < objetivos.length && puntos >= objetivos[i]) {
        completadas.push(objetivos[i]);
        i++;
    }
}

// Pinta la lista de misiones (las completadas llevan un ✔)
function mostrarMisiones() {
    let texto = "";
    for (let i = 0; i < objetivos.length; i++) {
        if (i < completadas.length) {
            texto = texto + "<li class='hecha'>✔ Llega a " + objetivos[i] + " puntos</li>";
        } else {
            texto = texto + "<li>Llega a " + objetivos[i] + " puntos</li>";
        }
    }
    document.getElementById("listaMisiones").innerHTML = texto;
}

function mostrarPuntos() {
    document.getElementById("puntos").textContent = puntos;
    comprobarMisiones();
    mostrarMisiones();
}

// REQUISITO 3: ataque que suma entre 5 y 20 puntos
function atacar() {
    puntos = puntos + aleatorio(5, 20);
    mostrarPuntos();
}

// REQUISITO 3: Math.round redondea al entero más cercano
function bonificacion() {
    puntos = puntos + Math.round(Math.random() * 14) + 1;
    mostrarPuntos();
}

// REQUISITO 3: Math.ceil redondea hacia arriba y Math.max evita puntos negativos
function trampa() {
    const perdida = Math.ceil(Math.random() * 15);
    puntos = Math.max(0, puntos - perdida);
    mostrarPuntos();
}

// REQUISITO 6: el script está en el head, así que esperamos a que cargue la página
document.addEventListener("DOMContentLoaded", function () {
    // Si no hay jugador, volvemos al inicio
    if (sessionStorage.getItem("nombre") === null) {
        window.location.href = "index.html";
        return;
    }
    cargarPanel();
    mostrarMisiones();

    document.getElementById("btnAtaque").addEventListener("click", atacar);
    document.getElementById("btnBonus").addEventListener("click", bonificacion);
    document.getElementById("btnTrampa").addEventListener("click", trampa);
});