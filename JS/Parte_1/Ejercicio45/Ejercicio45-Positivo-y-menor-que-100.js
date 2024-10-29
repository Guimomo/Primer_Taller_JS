//EJERCICIO 45

//Determinar si un número es positivo y menor que 100.



console.log(`
    VERIFICACIÓN DE NÚMERO POSITIVO Y MENOR QUE 100
    -------------------------------------------------`);


function verificarNumero(numero) {

    numero = parseFloat(prompt("Ingresa un número:"));

    if (numero > 0 && numero < 100) {

        console.log("El número es positivo y menor que 100");
        
    } else {

        console.log("El número no cumple las condiciones");
    }
}

verificarNumero();
