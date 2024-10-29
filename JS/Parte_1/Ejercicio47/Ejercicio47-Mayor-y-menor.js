//EJERCICIO 47

//Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el
//menor o si son iguales.

console.log(`
    CÁLCULO DEL MAYOR Y MENOR DE TRES NÚMEROS
    ----------------------------------`);

function compararTresValores(valor1, valor2, valor3) {

    valor1 = parseFloat(prompt("Ingresa el primer valor:"));
    valor2 = parseFloat(prompt("Ingresa el segundo valor:"));
    valor3 = parseFloat(prompt("Ingresa el tercer valor:"));

    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {

        console.log("ERROR: Se deben ingresar valores númericos válidos.");
        return;

    } else {

    console.log(`Valores ingresados:`);
    console.log(` > Dato 1 = ${valor1}`);
    console.log(` > Dato 2 = ${valor2}`);
    console.log(` > Dato 3 = ${valor3}`);

    }

    if (valor1 === valor2 && valor2 === valor3) {
        console.log("Todos los números son iguales");

    } else {

        let mayor = Math.max(valor1, valor2, valor3);
        let menor = Math.min(valor1, valor2, valor3);
        console.log(`Mayor: ${mayor}, Menor: ${menor}`);
    }
}

compararTresValores();
