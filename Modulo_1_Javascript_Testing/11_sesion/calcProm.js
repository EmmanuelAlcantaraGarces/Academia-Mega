console.log("Calcular promedio");

document.getElementById("formularioNotas").addEventListener("submit", function(e) {
    e.preventDefault(); //Evita el comportamiento por default del formulario

    const nota1 = document.getElementById("nota1").value.trim();
    const nota2 = document.getElementById("nota2").value.trim();
    const nota3 = document.getElementById("nota3").value.trim();
    const resultado = document.getElementById("resultado");

    console.log(nota1, nota2, nota3);

    try {
        const promedio = calcProm(nota1, nota2, nota3);
        // resultado.textContent = `El promedio de tus notas es ${promedio.toFixed(2)}`;

        if (promedio < 6) {
            resultado.textContent = `No aprobado`;
            resultado.style.color = "red";
        }
        else {
            resultado.textContent =  `El promedio de tus notas es ${promedio}`;
            resultado.style.color = promedio >= 8 ?"green":"orange";
        }
        
        resultado.style.fontWeight = "bold";
    } catch (error) {
        console.log("error: ", error);
        resultado.textContent = error.message;
        resultado.style.color = "red";
        resultado.style.fontWeight = "bold";
    }
})

// Funcion para validar datos
function validaDatos(idNota, nota) {
    console.log("Validando datos ...");

    if (!Number(nota) || (nota <= 0)) {
        throw new Error(`La nota ${idNota} debe ser un número válido.`);
        
    }

    console.log("Datos validados correctamente");
}

function calcProm(n1, n2, n3) {
    console.log("Calculando promedio ...");

    // validaDatos("1", n1);
    // validaDatos("2", n2);
    // validaDatos("3", n3);
    
    if ([n1, n2, n3].some(isNaN)) {
        throw new Error("Todas las notas deben ser numeros validos");
    }
    
    if ([n1, n2, n3].some(n=>(n < 0 || n > 10))) {
        throw new Error("Todas las notas deben estar entre 0 y 10");
    }
    
    if ([n1, n2, n3].some(n=>(n === ""))) {
        throw new Error("Debes ingresar todas las notas");
    }
    
    return (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3;
}
