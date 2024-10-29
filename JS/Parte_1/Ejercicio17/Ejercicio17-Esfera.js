//EJERCICIO 17

//Escribir un programa que calcule el volumen de una esfera.

console.log(`VOLUMEN de una ESFERA`);

function esfera(radio) {

    radio = parseFloat(prompt("Por favor, ingresa el radio de la esfera."));

    if (isNaN(radio) || radio <= 0 ) {

        console.log("ERROR: Se deben ingresar valores númericos positivos válidos.");
        return;
    }

    let volumen;

    volumen = (4/3) * Math.PI * Math.pow(radio, 3); 


    console.log(` Valor ingresado:`);
    console.log(`  > Radio = ${radio} metros`);


    console.log (`    ~ El VOLUMEN de la esfera es: ${volumen.toFixed(2)} metros³`);
    
}

esfera();
