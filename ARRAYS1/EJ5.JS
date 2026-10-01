// Ejercicio 5. El día de mejor venta
// Qué practica: Buscar el mayor y el menor de un array, y su posición, sin Math.max ni
// Math.min.
// Enunciado:
// Copia la lectura del ejercicio 4. Mostrar el día con mayor venta, el día con menor venta y la
// diferencia entre ambos.
// Ejemplo de ejecución:
// (Con los mismos datos del ejercicio 4)
// Mejor día: Sábado ($260000)
// Peor día: Martes ($95000)
// Diferencia: $165000
// Funciones sugeridas:
// • buscarPosicionMayor(numeros): retorna el índice del mayor.
// • buscarPosicionMenor(numeros): retorna el índice del menor.
// Pista: ¿Por qué es más útil que la función retorne la posición y no el valor? ¿Con qué
// inicializas "el mayor hasta ahora": con 0 o con el primer elemento? Haz la prueba de escritorio
// con ventas negativas (devoluciones) para decidir.

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let ventas = [];

for (let i = 0; i < dias.length; i++) {
    let venta = parseFloat(prompt(`Ingrese la venta del día ${dias[i]}:`));
    ventas.push(venta);
}

function buscarPosicionMayor(numeros) {
    let posicionMayor = 0;
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > numeros[posicionMayor]) {
            posicionMayor = i;
        }
    }
    return posicionMayor;
}

function buscarPosicionMenor(numeros) {
    let posicionMenor = 0;
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < numeros[posicionMenor]) {
            posicionMenor = i;
        }
    }
    return posicionMenor;
}

let posicionMayor = buscarPosicionMayor(ventas);
let posicionMenor = buscarPosicionMenor(ventas);

let diferencia = ventas[posicionMayor] - ventas[posicionMenor];

console.log(`Mejor día: ${dias[posicionMayor]} ($${ventas[posicionMayor].toFixed(2)})`);
console.log(`Peor día: ${dias[posicionMenor]} ($${ventas[posicionMenor].toFixed(2)})`);
console.log(`Diferencia: $${diferencia.toFixed(2)}`);
