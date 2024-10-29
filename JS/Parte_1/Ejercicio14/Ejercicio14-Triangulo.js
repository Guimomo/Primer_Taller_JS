//EJERCICIO 14

//Escribir un programa que calcule el área de un triángulo.

console.log(`ÁREA de un TRIÁNGULO EQUILATERO`);

function triangulo(base, altura) {
    
    base = parseInt(prompt("Por favor, ingresa la medida base del triángulo."));
    altura = parseInt(prompt("ahora ingresa la altura del triángulo."))

    if (isNaN(base) || isNaN(altura)) {

        console.log("ERROR: Se deben ingresar valores númericos válidos.");
        return;
    }

    let area = (base * altura) / 2;

    console.log(` Valores ingresados:`);
    console.log(`  > Base = ${base} m`);
    console.log(`  > Altura = ${altura} m`);

    console.log (`    ~ El área del triangulo es: ${area} m²`);
}


triangulo();