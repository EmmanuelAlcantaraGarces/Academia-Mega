function expect(actual) {
    return {
        toBe(expected) {
            if (actual === expected) {
                console.log(`Pasó: ${actual} === ${expected}`);
            }
            else {
                console.log(`Falló: se esperaba ${expected}, pero se obtuvo ${actual}`);
            }
        },
        toEqual(expected) {
            const passed = JSON.stringify(actual) === JSON.stringify(expected);
            if (passed) {
                console.log("Pasó: objetos iguales");
            }
            else {
                console.log("Pasó: objetos diferentes");
            }
        }
    }
}

function sumar(a, b) {
    return a + b;
}


expect(sumar(2, 3)).toBe(5);
expect(sumar(10, 0)).toBe(0);

expect(sumar(2, 3)).toEqual("5");
expect(sumar(10, 0)).toEqual(10);
expect(sumar(2, 3) + "").toEqual("5");

function validarUsuario(usuario) {
    return usuario.nombre && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usuario.correo);
}

const usuarioValido = {nombre: "Emmanuel", correo: "emmanuel.alcantara@megacable.com.mx"}
const usuarioInvalido = {nombre: "Ana", correo: "ana@gmail"}
const usuarioValido2 = {nombre: "Emmanuel", correo: "emmanuel.alcantara@megacable.com.mx"}

expect(usuarioValido).toEqual("true");
expect(usuarioInvalido).toEqual(false);
expect(usuarioValido).toEqual(usuarioValido2);

