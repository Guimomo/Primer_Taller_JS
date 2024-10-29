//EJERCICIO 9

//Genera un patrón de asteriscos en forma de pirámide.

console.log(`
    PIRÁMIDE DE ASTERISCOS
    ---------------------------`);

function generarPiramide() {
    
    // Pedir número de niveles al usuario
    let niveles = parseInt(prompt("Introduce el número de niveles para la pirámide:"));
    
    // Validar entrada
    if (isNaN(niveles) || niveles <= 0) {

        console.log("Por favor, introduce un número válido mayor que 0");
        return;
    }
    
    // Generar pirámide
    for (let i = 1; i <= niveles; i++) {

        // Calcular espacios y asteriscos
        let espacios = ' '.repeat(niveles - i);
        let asteriscos = '*'.repeat(2 * i - 1);
        
        // Mostrar cada nivel
        console.log(espacios + asteriscos);
    }
}

generarPiramide();
