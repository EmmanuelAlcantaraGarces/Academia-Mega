export function sumar(a, b) {
    
    if (!isValidNums(a, b))
        return "Un operando no es válido para la suma";

    return Number(a) + Number(b);
}

export function restar(a, b) {
    
    if (!isValidNums(a, b))
        return "Un operando no es válido para la resta";

    return Number(a) - Number(b);
}

export function multiplicar(a, b) {
    
    if (!isValidNums(a, b))
        return "Un operando no es válido para la multiplicación";

    return Number(a) * Number(b);
}

export function dividir(a, b) {
    
    if (!isValidNums(a, b))
        return "Un operando no es válido para la división";

    if(b == 0)
        return "Divisor no válido";

    return Number(a) / Number(b);
}

function isValidNums(a, b) {

    if ((a === "") || (b === "")) {
        console.log("Numeros blancos");
        return false;
    }

    return !(isNaN(a) || isNaN(b));
    
}