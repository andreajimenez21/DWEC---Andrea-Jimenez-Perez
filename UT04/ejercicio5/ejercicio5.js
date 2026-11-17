// El párrafo donde se muestra la salida
// Emplearemos algún <br> aunque no se recomienda si se emplea CSS
let output = document.getElementById("output");

let texto = "rojo,verde,azul,amarillo";

// Convertir a array
let colores = texto.split(",");

// Comprobar si es un array
if (Array.isArray(colores)) {
    output.innerHTML += `Array válido: ${colores}`;

    // Mostramos los colores en mayúsculas
    output.innerHTML += `<br><br>Mostramos cada color en mayúsculas del array: ${colores}`;
    colores.forEach(item => output.innerHTML += `<br>Color: ${item.toUpperCase()}`);

    // Nuevo array incluyendo longitud
    let coloresInfo = colores.map(item => `${item} (${item.length})`);
    output.innerHTML += `<br><br>Array con longitud: ${coloresInfo}`;

    // Ordenar e invertir
    colores.sort();
    output.innerHTML += `<br><br>Array inicial ordenado: ${colores}`;
    colores.reverse();
    output.innerHTML += `<br><br>Array inicial invertido: ${colores}`;
    console.log(colores);

    // Calcular total de letras
    let totalLetras = colores.reduce((acum, color) => acum + color.length, 0);
    output.innerHTML += `<br><br>Total de letras: ${totalLetras}`;

    // Conversión a cadena 
    let cadenaFinal = colores.join(" | ");
    output.innerHTML += `<br><br>Cadena final con |: ${cadenaFinal}`;

    
} else {
    output.innerHTML += "El texto no es un array";
}
