//EJERCICIO 73

//Escribir un programa en el que se pregunte al usuario por una frase y una letra, y muestre
//por pantalla el número de veces que aparece la letra en la frase.

console.log(`
    CONTAR LETRA EN FRASE
    ---------------------------`);

function contarLetra() {

    let frase = prompt("Introduce una frase:");
    let letra = prompt("Introduce la letra a buscar:");
    
    let contador = 0;

    for (let caracter of frase) {

        if (caracter.toLowerCase() === letra.toLowerCase()) {

            contador++;
        }
    }
    
    console.log(`La letra '${letra}' aparece ${contador} veces en la frase.`);
}

contarLetra();
