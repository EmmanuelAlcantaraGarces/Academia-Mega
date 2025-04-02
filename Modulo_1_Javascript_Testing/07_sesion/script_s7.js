console.log("Clase 7");

function obtenerUsuario(id) {
    try {
        if (typeof id !== "number")
            throw "El ID debe ser numerico";
        
        const usuarios = {1: "Diana", 2: "Emmanuel", 3: "Papa", 4: "Mama"};

        if (!usuarios[id])
            throw "Usuario no encontrado";
        
        // console.log(usuarios);

        return `Usuario encontrado: ${usuarios[id]}`

    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

console.log(obtenerUsuario(4));
console.log(obtenerUsuario(3));
console.log(obtenerUsuario(1));
console.log(obtenerUsuario(2));
console.log(obtenerUsuario());
console.log(obtenerUsuario(-2));
console.log(obtenerUsuario("a"));    
