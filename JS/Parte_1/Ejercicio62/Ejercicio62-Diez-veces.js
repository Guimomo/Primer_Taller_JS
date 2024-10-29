//EJERCICIO 62

//Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces.


console.log(`
    REPETIR UNA PALABRA 10 VECES
    ----------------------------`);

function repetirPalabra() {

    // Solicitar información al usuario
    const palabra = prompt("Ingrese una palabra:");


    // Verificar si se ingresó una palabra
    if (!palabra) {
        console.log("ERROR: Por favor, ingrese una palabra válida.");
        return;
    }


    // Repetir la palabra 10 veces
    console.log(`\nRepetición de la palabra "${palabra}":`);

    for (let i = 1; i <= 10; i++) {
        
        console.log(`${i}. ${palabra}`);
    }
}

repetirPalabra();
