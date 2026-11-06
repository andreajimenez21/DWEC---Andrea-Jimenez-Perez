// comun.js - funciones compartidas entre pantallas

// Calcula la edad a partir de la fecha de nacimiento
function calcularEdad(fechaNacimiento) {
  const hoy = new Date();
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

  // Si aún no ha cumplido años este año, restamos 1
  if (hoy.getMonth() < fechaNacimiento.getMonth() ||
    (hoy.getMonth() === fechaNacimiento.getMonth() && hoy.getDate() < fechaNacimiento.getDate())) {
    edad = edad - 1;
  }
  return edad;
}

// REQUISITO 5: leer una cookie por su nombre (métodos de String: indexOf y slice)
function leerCookie(nombre) {
  const texto = document.cookie;
  const buscado = nombre + "=";

  let inicio = texto.indexOf(buscado);
  if (inicio === -1) {
    return null; // la cookie no existe
  }

  inicio = inicio + buscado.length;
  let fin = texto.indexOf(";", inicio);
  if (fin === -1) {
    fin = texto.length; // era la última cookie
  }
  return texto.slice(inicio, fin);
}