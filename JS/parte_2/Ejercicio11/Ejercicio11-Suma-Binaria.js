//EJERCICIO 11

//Implemente una función que sume dos números y devuelva su suma en binario, el
//número binario devuelto debe ser una cadena.

console.log(`

    SUMA EN BINARIO
    ---------------------------`);

function sumaBinaria() {

    // Pedir números al usuario
    let num1 = parseInt(prompt("Introduce el primer número:"));
    let num2 = parseInt(prompt("Introduce el segundo número:"));
    

    // Validar entrada
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Por favor, introduce números válidos");
        return;
    }
    

    // Calcular suma y convertir a binario
    let suma = num1 + num2;
    let sumaBin = suma.toString(2);
    
    
    // Mostrar resultados
    console.log(`Primer número: ${num1} (${num1.toString(2)} en binario)`);
    console.log(`Segundo número: ${num2} (${num2.toString(2)} en binario)`);
    console.log(`Suma: ${suma} (${sumaBin} en binario)`);
}

sumaBinaria();
