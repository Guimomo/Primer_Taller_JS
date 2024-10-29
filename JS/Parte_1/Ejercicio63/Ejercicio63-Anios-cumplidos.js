//EJERCICIO 63

//. Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los
//años que ha cumplido (desde 1 hasta su edad).


console.log(`
    MOSTRAR AÑOS CUMPLIDOS
    ----------------------`);

function mostrarAniosCumplidos() {

    // Solicitar información al usuario
    const edad = parseInt(prompt("Ingrese su edad:"));

    // Verificar si el valor ingresado es válido
    if (isNaN(edad) || edad <= 0) {
        console.log("ERROR: Por favor, ingrese una edad válida.");
        return;
    }

    
    // Mostrar años cumplidos
    console.log(`\nAños cumplidos:`);
    for (let i = 1; i <= edad; i++) {
        console.log(`${i} ${i === 1 ? 'año' : 'años'}`);
    }
}

mostrarAniosCumplidos();
