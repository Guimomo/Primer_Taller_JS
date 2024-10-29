//EJERCICIO 46

//Calcule el mayor de tres números, permitiendo leer 3 valores diferentes.

console.log(`
    CÁLCULO DEL MAYOR DE TRES NÚMEROS
    ----------------------------------`);



function mayorDeTres(numero1, numero2, numero3) {

    numero1 = parseFloat(prompt("Ingresa el primer número:"));
    numero2 = parseFloat(prompt("Ingresa el segundo número:"));
    numero3 = parseFloat(prompt("Ingresa el tercer número:"));

    let mayor = Math.max(numero1, numero2, numero3);

    
    console.log(`Valores ingresados:`);
    console.log(` > Dato 1 = ${numero1}`);
    console.log(` > Dato 2 = ${numero2}`);
    console.log(` > Dato 3 = ${numero3}`);
    console.log(`El mayor de los tres números es: ${mayor}`);
}

mayorDeTres();
