//EJERCICIO 44

//Realice el siguiente algoritmo para convertir pesos a dolores y a euros, utilizando como
//constante el valor de una moneda.

console.log(`CONVERSIÓN DE PESOS A DÓLARES Y EUROS`);

function convertirMoneda(pesos) {

    const valorDolar = 4000; // Cambia el valor según la tasa actual
    const valorEuro = 4500; // Cambia el valor según la tasa actual

    pesos = parseFloat(prompt("Ingresa la cantidad en pesos:"));

    if (isNaN(pesos)) {

        console.log("ERROR: ingresa valores numéricos válidos.");
        return;
    }

    let dolares = pesos / valorDolar;
    let euros = pesos / valorEuro;

    console.log(`$${pesos} son: $${dolares.toFixed(2)} USD y $${euros.toFixed(2)} EUR`);
}

convertirMoneda();

