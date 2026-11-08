# DWEC - Andrea Jiménez Pérez

Repositorio para la asignatura Desarrollo web en entorno cliente.

## Práctica de la Unidad 3: Aventura de misiones

Juego sencillo hecho con HTML, CSS y JavaScript, sin librerías.
El jugador crea su perfil y pulsa botones para sumar o restar puntos
al azar, con el objetivo de completar tres misiones.

## Cómo se juega

1. En `index.html` se escribe el nombre y la fecha de nacimiento.
   Si falta algún dato, la fecha es futura o la edad es menor de 12 años,
   sale "Acceso denegado" y no se puede continuar.
2. En `juego.html` aparece el panel del jugador con su nombre, su edad
   y el día de la semana en que nació. El color del panel cambia según
   la edad (azul si es menor de 18, lila si no).
3. El jugador empieza con 0 puntos y decide cuándo pulsar cada botón:
   - **Atacar:** suma entre 5 y 20 puntos.
   - **Bonificación:** suma entre 1 y 15 puntos.
   - **Trampa:** resta hasta 15 puntos (nunca baja de 0).
4. Hay tres misiones: llegar a 30, 60 y 100 puntos. Al conseguirlas se
   marcan en verde con un ✔ y se quedan marcadas aunque después se
   pierdan puntos.
5. El botón **Ayuda** abre una ventana nueva con el nombre, los puntos,
   las misiones completadas y una pista al azar.

## Requisitos del enunciado y dónde están

| Requisito | Archivo | Qué se usa |
|---|---|---|
| 1. Perfil del jugador | `js/perfil.js` | Validación de nombre y fecha, edad mínima |
| 2. Panel personalizado | `js/juego.js` | `trim`, `charAt`, `toUpperCase`, `slice` (String), `getDay` (Date), estilo según la edad |
| 3. Puntuación | `js/juego.js` | `Math.random`, `Math.floor`, `Math.round`, `Math.ceil`, `Math.max`, arrays `objetivos`, `completadas` y `pistas` |
| 4. Ventana adicional | `js/juego.js` | `window.open` y `document.write` |
| 5. Almacenamiento | `js/perfil.js`, `js/juego.js` | Cookie (último jugador), `sessionStorage` (partida), `localStorage` (récord) |
| 6. Carga del script | todos los HTML | Script en el `head` y evento `DOMContentLoaded` |

## Almacenamiento del navegador

- **Cookie `ultimoJugador`:** recuerda el último nombre durante 7 días.
- **sessionStorage:** guarda nombre, fecha y puntos de la partida actual.
- **localStorage:** guarda el récord, que se conserva al cerrar el navegador.

## Estructura del proyecto

- `index.html`: pantalla de perfil
- `juego.html`: pantalla del juego
- `css/estilos.css`: estilos
- `js/comun.js`: funciones compartidas (`calcularEdad`, `leerCookie`)
- `js/perfil.js`: lógica del perfil
- `js/juego.js`: lógica del juego

## Cómo ejecutarlo

Abrir `index.html` con la extensión Live Server de VS Code. Con doble clic
las cookies no funcionan.