const boton = document.getElementById("evaluar");

// Evento al hacer click en el botón
boton.addEventListener("click", function () {
    let nombre = document.getElementById("nombre").value.trim();
    let notaInput = document.getElementById("nota").value.trim();
    let nota = Number(notaInput);

    // Validación de formato
    if (!nombre) {
        alert("Por favor, introduce tu nombre.");
        return;
    }

    if (isNaN(nota) || nota < 0 || nota > 10) {
        alert("La nota debe estar entre 0 y 10.");
        return;
    }

    // Determinar calificación
    let resultado = "";
    if (nota < 5) {
        resultado = "SUSPENSO";
    } else if (nota < 6) {
        resultado = "APROBADO";
    } else if (nota < 7) {
        resultado = "BIEN";
    } else if (nota < 9) {
        resultado = "NOTABLE";
    } else {
        resultado = "SOBRESALIENTE";
    }

    // Cambiar el texto del h2 usando getElementsByTagName
    document.getElementsByTagName("h2")[0].textContent = nombre;

    // Añadir la nota al párrafo con getElementById y innerHTML
    document.getElementById("notaFinal").innerHTML = `<strong>Nota: ${nota}</strong>`;

    // Mostrar resultado con querySelector y textContent
    document.querySelector(".mensaje").textContent = `Resultado de la evaluación: ${resultado}`;
});

