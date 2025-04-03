import { sumar, restar, multiplicar, dividir } from "./operaciones.js";

console.log("Llamando al modulo de opreaciones.");

let a = prompt("Ingresa el primer número");
let b = prompt("Ingresa el segundo número");

console.log(`Numeros: "${a}" y "${b}"`);
console.log("Suma: " + sumar(a, b));
console.log("Resta: " + restar(a, b));
console.log("Multiplicacion: " + multiplicar(a, b));
console.log("Division: " + dividir(a, b));

document.getElementById("pNumeros").textContent = `"${a}" y "${b}"`;
document.getElementById("pSuma").textContent = sumar(a, b);
document.getElementById("pResta").textContent = restar(a, b);
document.getElementById("pMultiplicacion").textContent = multiplicar(a, b);
document.getElementById("pDivision").textContent = dividir(a, b);

