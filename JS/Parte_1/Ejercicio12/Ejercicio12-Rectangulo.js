//EJERCICIO 12

//Escribir un programa que calcule el área de un rectángulo.

console.log(`ÁREA de un RECTÁNGULO`);

let multiplicacion;

function rectangulo(base, altura) {
    
    base = parseInt(prompt("Por favor, ingresa la medida base del rectángulo."));
    altura = parseInt(prompt("ahora ingresa la altura del rectángulo."))

    if (isNaN(base) || isNaN(altura)) {

        console.log("ERROR: Se deben ingresar valores númericos válidos.");
        return;
    }

    multiplicacion = base * altura;

    console.log(`Valores ingresados:`);
    console.log(` base = ${base}`);
    console.log(` altura = ${altura}`);

    console.log (`El área del rectángulo es: ${multiplicacion} m²`);
}

rectangulo();