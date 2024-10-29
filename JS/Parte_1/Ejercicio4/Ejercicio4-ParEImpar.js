//EJERCICIO 4

//Escribir un programa que pida al usuario un número entero y muestre por pantalla si es par o impar.

function par(numero) {
    
    return numero % 2 === 0; //el número debe poder dividirse entre 2 para considerarlo como uno par, en caso de lo contrario sera impar...
}


function ParOImpar() {

    const numero = parseInt(prompt("Introduce un número entero:"));


    if (isNaN(numero)) {
        console.log("Por favor, ingresa un número entero válido.");
        return;
    }


    if (par(numero)) {

        console.log(`${numero} es un número par.`);
        
    } else {

        console.log(`${numero} es un número impar.`);
    }
}


ParOImpar();