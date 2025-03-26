// Closure (Encapsulamiento)

console.log("Closure");

function contador() {
    let cuenta = 0;
    return function () {
        cuenta ++;
        return cuenta;
    }
}

const incrementar = contador();

console.log(incrementar());
console.log(incrementar());
console.log(incrementar());

// Funcion que devuelve otra funcion que multiplica
function multiplicador(factor) {
    return function(numero) {
        return numero * factor;
    }
}

const duplicar = multiplicador(2);
const triplicar = multiplicador(3);

console.log("duplicar: " + duplicar(5));
console.log("triplicar: " + triplicar(5));