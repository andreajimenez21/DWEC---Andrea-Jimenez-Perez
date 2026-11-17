// El párrafo donde se muestra la salida
// Emplearemos algún <br> aunque no se recomienda si se emplea CSS
let output = document.getElementById("output");

// Array inicial
let frutas = ["manzana", "pera", "plátano"];
output.innerHTML += `Array original: ${frutas}`; 

// Reemplaza el segundo elemento
frutas.splice(1, 1, "sandía"); 
output.innerHTML += `<br>Tras reemplazar el segundo elemento por "sandía": ${frutas}`; 

// Copia con posiciones 1 y 2
let copia = frutas.slice(1, 3);
output.innerHTML += `<br>Nuevo array con posiciones 1 y 2: ${copia}`; 

// Concatenamos elementos
let nuevas = frutas.concat(["uvas", "mango"]);
output.innerHTML += `<br>Nuevo array tras concatenar "uvas" y "mango": ${nuevas}`; 

// Búsquedas
output.innerHTML += "<br><br>Alguna búsqueda en el array original"; 
output.innerHTML += "<br>Índice de 'sandía': " + frutas.indexOf("sandía");
output.innerHTML += "<br>¿Contiene 'pera'? " + frutas.includes("pera");
output.innerHTML += "<br>Primera fruta con más de 5 letras: " + frutas.find(item => item.length > 5);
output.innerHTML += "<br>Frutas que empiezan con 'm': " + frutas.filter(item => item.startsWith("m"));
output.innerHTML += "<br>Índice de fruta con 'a': " + frutas.findIndex(item => item.includes("a"));