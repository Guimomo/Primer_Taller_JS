//EJERCICIO 26

//Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit.

console.log(`CONVERSIÓN DE GRADOS CENTÍGRADOS A FAHRENHEIT`);

let gradosC, gradosF;


function convertirAGradosFahrenheit() {


    gradosC = parseFloat(prompt("Ingresa los grados centígrados (°C):"));


    if (isNaN(gradosC)) {
        console.log("Por favor, ingresa un valor numérico válido.");
        return;
    }


    // Calcular grados Fahrenheit
    gradosF = (gradosC * 9 / 5) + 32;
    

    // Mostrar el resultado
    console.log(`${gradosC} °C es igual a ${gradosF.toFixed(2)} °F`);
}

// Llamar a la función
convertirAGradosFahrenheit();
