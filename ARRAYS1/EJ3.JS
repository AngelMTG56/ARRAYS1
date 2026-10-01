// Ejercicio 3. Primero, último y del medio
// Qué practica: length, último índice y cálculo de índices.
// Enunciado:
// Leer N números (N lo da el usuario y debe ser al menos 1). Mostrar el primero, el último y el del
// medio. Si N es par hay dos del medio: mostrar ambos.

let numeros = [];

let cantidadNumeros = parseInt(prompt("¿Cuántos números vas a ingresar? (al menos 1)"));
while (cantidadNumeros < 1) {
    alert("Debes ingresar al menos 1 número.");
    cantidadNumeros = parseInt(prompt("¿Cuántos números vas a ingresar? (al menos 1)"));
}

for (let i = 0; i < cantidadNumeros; i++) {
    let numero = parseFloat(prompt(`Ingrese el numero ${i + 1}:`));
    numeros.push(numero);
}

console.log(`Primer número: ${numeros[0]}`);
console.log(`Último número: ${numeros[numeros.length - 1]}`);

if (numeros.length % 2 === 1) {
    let indiceMedio = Math.floor(numeros.length / 2);
    console.log(`Número del medio: ${numeros[indiceMedio]}`);
}


