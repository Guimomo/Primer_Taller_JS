//EJERCICIO 15

//Escribir un programa que calcule la longitud (perimetro) y el área de una circunferencia.

console.log(`ÁREA de una CIRCUNFERENCIA`);

function circulo(radio) {

    radio = parseInt(prompt("Por favor, ingresa el radio de la circunferencia."));

    if (isNaN(radio)) {

        console.log("ERROR: Se deben ingresar valores númericos válidos.");
        return;
    }

    let diametro, area, perimetro;

    diametro = radio * 2 ;

    area = Math.PI * Math.pow(radio, 2); // significa: área = π * radio²

    perimetro = 2 * Math.PI * radio;


    console.log(` Valor ingresado:`);
    console.log(`  > Radio = ${radio} metros`);

    

    console.log (`    ~ El diametro de la circunferencia es: ${diametro} metros`);

    console.log (`    ~ El área de la circunferencia es: ${area.toFixed(2)} metros²`);

    console.log (`    ~ El perimetro/longitud de la circunferencia es: ${perimetro.toFixed(2)} metros`);
    
}

circulo();


