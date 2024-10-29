//EJERCICIO 54

//Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él
//segundo, en caso contrario indicar con un mensaje que la operación no es posible realizarla.

console.log(`
    RESTA CONDICIONAL DE DOS NÚMEROS
    (El primer número debe ser mayor que el segundo)
    ------------------------------------------------`);

function restaCondicional() {
    // Solicitar información al usuario
    const num1 = parseFloat(prompt("Ingrese el primer número:"));
    const num2 = parseFloat(prompt("Ingrese el segundo número:"));

    // Verificar si los valores ingresados son números válidos
    if (isNaN(num1) || isNaN(num2)) {
        console.log("ERROR: Por favor, ingrese solo valores numéricos.");
        return;
    }

    // Realizar la operación si es posible
    if (num1 > num2) {
        const resultado = num1 - num2;
        console.log(`\nResultados:`);
        console.log(` > Primer número: ${num1}`);
        console.log(` > Segundo número: ${num2}`);
        console.log(`\n ~ La resta es: ${resultado}`);
    } else {
        console.log("\nERROR: La operación no es posible. El primer número debe ser mayor que el segundo.");
    }
}

restaCondicional();
