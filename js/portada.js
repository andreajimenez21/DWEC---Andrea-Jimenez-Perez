// Botón para empezar el juego
const btnEmpezar = document.getElementById("btnEmpezar");

btnEmpezar.addEventListener("click", () => {
    // Borramos el progreso de partidas anteriores
    sessionStorage.clear();
    // Pasamos a la primera sala
    window.location.href = "sala1.html";
});