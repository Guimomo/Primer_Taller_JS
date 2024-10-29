//EJERCICIO 3

//Escribir un programa que pida al usuario dos números y muestre por pantalla su división, si
//el divisor es cero el programa debe mostrar un error, se debe manejar mediante
//excepciones y el mensaje debe ser personalizado.

function dividirNumeros(dividendo, divisor) { //se crea una función que dividira los numeros y estos presenten error en caso de introducir 0

    if (divisor === 0) {
        throw new Error("Error: No se puede dividir entre cero.");
    }

    return dividendo / divisor;
}


function main() { //Se crea lafunción que se imprimira en la consola

    const numero1 = parseFloat(prompt("Introduce el primer número (dividendo):"));

    const numero2 = parseFloat(prompt("Introduce el segundo número (divisor):"));

    try {

        const resultado = dividirNumeros(numero1, numero2);
        console.log(`El resultado de la división es: ${resultado}`);

    } catch (error) {

        console.log(error.message); 
    }
}


main();