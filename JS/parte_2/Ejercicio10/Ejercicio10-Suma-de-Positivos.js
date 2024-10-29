//EJERCICIO 10

//Obtén una serie de número y devuelve la suma de todos los números positivos, si no
//tenemos números positivos la sume debe devolver 0.

console.log(`

    SUMA DE NÚMEROS POSITIVOS
    ---------------------------`);

function sumarPositivos() {

    // Pedir números al usuario
    let entrada = prompt("Introduce números separados por comas (ejemplo: 1,-2,3,4,-5):");
    
    // Convertir entrada en array de números
    let numeros = entrada.split(',').map(num => parseFloat(num.trim()));
    
    // Validar entrada
    if (numeros.some(isNaN)) {

        console.log("Por favor, introduce solo números válidos");
        return;
    }
    

    // Calcular suma de positivos
    let suma = numeros.reduce((total, num) => {

        return num > 0 ? total + num : total;

    }, 0);
    

    // Mostrar resultado
    console.log("Números introducidos:", numeros.join(', '));
    console.log("Suma de positivos:", suma);
}


sumarPositivos();
