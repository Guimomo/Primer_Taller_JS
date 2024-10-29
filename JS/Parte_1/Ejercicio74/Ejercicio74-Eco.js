//EJERCICIO 74

//Escribir un programa que muestre el eco de todo lo que el usuario introduzca hasta que el
//usuario escriba “salir” que terminará.

console.log(`
    ECO DE ENTRADA
    ---------------------------`);

function eco() {
    let entrada;
    
    do {

        entrada = prompt("Introduce algo (escribe 'salir' para terminar):");

        if (entrada.toLowerCase() !== 'salir') {

            console.log(entrada);
        }

    } while (entrada.toLowerCase() !== 'salir');
}

// eco();
