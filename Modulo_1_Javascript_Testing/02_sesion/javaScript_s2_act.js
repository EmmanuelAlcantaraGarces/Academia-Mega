let num1 = prompt("Ingresa un numero:");
num1 = Number(num1);

console.log("Numero: " + num1);

if (num1 < 0) {
    console.log("El numero es negativo");
}
else if (num1 > 0) {
    console.log("El numero es positivo");
}
else {
    console.log("El numero es cero");
}

if (num1 % 2 === 0) {
    console.log("El numero es par.");
}
else {
    console.log("El numero es impar.");
}

let suma = 0;
let fact = 1;

if (num1 > 0) {
    console.log("Proceso.");
    
    for (let i = 1; i <= num1; i++) {
        suma = suma + i;
    }

    let cont = 1;
    while (cont <= num1) {
        fact = fact * cont;
        cont++;
    }
}

console.log(`La sumatoria del numero es: ${suma}`);
console.log(`El factorial del numero es: ${fact}`);

let contrasena = "123abc";
let intentos = 0;
let correcto = false;

while ((intentos < 3) && !correcto) {
    let userContrasenia = prompt("Ingresa la contrasenia");

    intentos ++;

    if (contrasena == userContrasenia) {
        correcto = true;
    }
}

if (correcto) {
    console.log("Bienvenido al sistema");
}
else {
    console.log("Intentos agotados. Solicitar la restauracion de la contrasenia");
}