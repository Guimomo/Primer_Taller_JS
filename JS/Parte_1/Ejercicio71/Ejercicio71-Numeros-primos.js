//EJERCICIO 71

//Escribir un programa que pida al usuario un número entero y muestre por pantalla si es un número primo o no.

console.log(`
    VERIFICAR NÚMERO PRIMO
    ---------------------------`);

function verificarPrimo() {

    let numero = parseInt(prompt("Introduce un número entero:"));
    
    if (numero <= 1) {
        console.log("El número no es primo");
        return;
    }
    
    let esPrimo = true;

    for (let i = 2; i <= Math.sqrt(numero); i++) {

        if (numero % i === 0) {

            esPrimo = false;
            break;
        }
    }
    
    console.log(esPrimo ? "El número es primo" : "El número no es primo");
}

verificarPrimo();
