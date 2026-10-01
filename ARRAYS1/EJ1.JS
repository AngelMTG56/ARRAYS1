// Ejercicio 1. Lista del mercado
// Qué practica: Array vacío, push, recorrido y la diferencia entre el índice y la posición que ve el
// usuario.
// Enunciado:
// Pedir cuántos productos se van a comprar, leer el nombre de cada uno y guardarlos en un
// array. Al final mostrar la lista numerada desde 1 y el total de productos.

let productos = [];

let cantidad = parseInt(prompt("¿Cuántos productos vas a comprar?"));

for (let i = 0; i < cantidad; i++) {
    let producto = prompt(`Ingrese el nombre del producto ${i + 1}:`);
    productos.push(producto);
}

console.log("Lista de productos:");
for (let i = 0; i < productos.length; i++) {
    console.log(`${i + 1}. ${productos[i]}`);
}
console.log(`Total de productos: ${productos.length}`);