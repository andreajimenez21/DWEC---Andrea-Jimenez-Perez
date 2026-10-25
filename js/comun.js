// comun.js - funciones compartidas entre pantallas
// comun.js - funciones compartidas entre pantallas

// Calcula la edad a partir de la fecha de nacimiento
function calcularEdad(fechaNacimiento) {
    var hoy = new Date();
    var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    // Si aun no ha cumplido años este año, restamos 1
    if (hoy.getMonth() < fechaNacimiento.getMonth() ||
        (hoy.getMonth() == fechaNacimiento.getMonth() && hoy.getDate() < fechaNacimiento.getDate())) {
        edad = edad - 1;
    }
    return edad;
}