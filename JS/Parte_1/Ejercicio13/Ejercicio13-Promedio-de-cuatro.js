//EJERCICIO 13

//Escribir un programa que lea 4 numeros y calcule la media.
 
console.log(`CALCULADORA DE PROMEDIO :)`);

function Media(dato1, dato2, dato3, dato4) {
    
    dato1 = parseInt(prompt("Por favor, ingresa el dato 1"));
    dato2 = parseInt(prompt("Por favor, ingresa el dato 2"));
    dato3 = parseInt(prompt("Por favor, ingresa el dato 3"));
    dato4 = parseInt(prompt("y ahora ingresa el dato 4"));

    if (isNaN(dato1) || isNaN(dato2) || isNaN(dato3) || isNaN(dato4)) {

        console.log("ERROR: Se deben ingresar valores númericos válidos.");
        return;
    }


    console.log(`Valores ingresados:`);
    console.log(` > Dato 1 = ${dato1}`);
    console.log(` > Dato 2 = ${dato2}`);
    console.log(` > Dato 3 = ${dato3}`);
    console.log(` > Dato 4 = ${dato4}`);

    let suma = dato1 + dato2 + dato3 + dato4 ;
    let promedio = suma / 4 ;

    console.log(`   ~ La media entre estos cuatro(4) datos es: ${promedio.toFixed(2)}`);
}

Media();