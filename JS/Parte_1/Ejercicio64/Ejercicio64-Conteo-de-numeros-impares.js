//EJERCICIO 64

//Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
//todos los números impares desde 1 hasta ese número separados por coma.


console.log(`

    CONTEO DE NÚMEROS IMPARES
    ---------------------------`);

function mostrarImpares() {

    const numero = parseInt(prompt("Ingrese un número entero positivo:"));

    if (isNaN(numero) || numero <= 0 ) {

        console.log("ERROR: Se deben ingresar valores númericos positivos válidos.");
        return;
    }

    else if (numero > 0) {
        let impares = [];

        // Encontrar los números impares
        for (let i = 1; i <= numero; i++) {
            if (i % 2 !== 0) {
                impares.push(i);
            }
        }
    
        // Mostrar los números impares separados por comas
        console.log(impares.join(", "));

    }
    
}

mostrarImpares();
