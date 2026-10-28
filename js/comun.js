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
// REQUISITO 5: leer una cookie por su nombre
function leerCookie(nombre) {
  var lista = document.cookie.split("; ");
  for (var i = 0; i < lista.length; i++) {
    var partes = lista[i].split("=");
    if (partes[0] == nombre) {
      return partes[1];
    }
  }
  return null;
}