// Definición del objeto alumno
let alumno = {
    edad: 18,
    admin: false,
    stats: {
        posts: 0,
        followers: 0
    }
};

// La función que muestra un objeto en el párrafo de la página
function mostrarObjeto(obj) {
    // Recorrer todas las propiedades del objeto
    // La etiqueta <br> no se recomienda pero se hace para añadir saltos de línea y ahorrar código
    for (let key in obj) {
        // Si la propiedad es un objeto (como stats)
        if (typeof obj[key] == "object") {
            output.innerHTML += `<br>Propiedad "${key}" es un objeto con los siguientes valores:`;
            for (let subKey in obj[key]) {
                output.innerHTML += `<br>${subKey}: ${obj[key][subKey]}`;
            }
        } else {
            // Si no es un objeto, mostrar su valor directamente
            output.innerHTML += `<br>${key}: ${obj[key]}`;
        }
    }
}

// ---------------------------
// PRUEBAS DEL OBJETO
// ---------------------------

// Incrementar número de posts y followers
alumno.stats.posts += 2;
alumno.stats.followers += 3;

// Cambiamos la propiedad "admin"
alumno.admin = true;

let output = document.getElementById("output");
output.innerHTML += `Propiedad admin (después del cambio): ${alumno.admin}`; // true

// Quitar propiedad admin
delete alumno.admin;

// Mostramos el objeto por pantalla
// Las etiquetas <br> y <b> deberían reemplazarse con CSS pero en este caso se ahorra código
output.innerHTML += "<br><br><b>Recorriendo el objeto alumno después de eliminar admin:</b>";
mostrarObjeto(alumno);
