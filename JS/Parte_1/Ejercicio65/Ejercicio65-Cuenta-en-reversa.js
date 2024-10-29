//EJERCICIO 65

//Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
//la cuenta atrás desde ese número hasta cero separados por comas.

console.log(`

    CONTEO en REVERSA
    ---------------------------`);

function reversa(params) {

    // Pedir al usuario un número entero positivo
let numero = parseInt(prompt("Introduce un número entero positivo:"));


// Verificar que el número es positivo
if (numero > 0) {
    let cuentaAtras = [];

    // Generar la cuenta atrás
    for (let i = numero; i >= 0; i--) { // '--' determinara el conteo en reversa
        cuentaAtras.push(i);
    }

    // Mostrar la cuenta atrás separados por comas
    console.log(cuentaAtras.join(", "));


} else {

    console.log("Por favor, introduce un número entero positivo.");
}
    
}

reversa();
