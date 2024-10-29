//EJERCICIO 11

//Escribir un programa que suma, reste, multiplique y divida
//dos numeros.


let suma, resta, multipliacion, division;

function calculos(numero1, numero2){

    numero1 = parseInt(prompt("Por favor, ingresa el dato 1"));
    numero2 = parseInt(prompt("ahora ingresa el dato 2"))

    if (isNaN(numero1) || isNaN(numero2)) {

        console.log("ERROR: Se deben ingresar valores númericos válidos.");
        return;
    }

    suma=numero1+numero2;

    resta=numero1-numero2;

    multipliacion=numero1*numero2;

    division=numero1/numero2;

    if (numero2===0){

        division="No se puede dividir entre 0.";
    }


    console.log(`Valores ingresados: ${numero1} y ${numero2}`);

    console.log('El resultado de la suma es: '+ suma);
    console.log('El resultado de la resta es: '+ resta);
    console.log('El resultado de la multiplicación es: '+ multipliacion);
    console.log('El resultado de la división es: '+ division.toFixed(2) );

}

calculos();
