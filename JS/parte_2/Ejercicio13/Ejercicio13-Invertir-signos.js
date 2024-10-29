//EJERCICIO 13

//Crea una función que tome un conjunto de números y devuelva el inverso aditivo de cada
//uno. Todo los positivos se devuelve negativo y todos los negativos se devuelve positivo.

console.log(`
    INVERTIR SIGNOS DE NÚMEROS
    ---------------------------`);

function invertirSignos() {


    let entrada = prompt("Introduce números separados por comas (ejemplo: 1,-2,3,-4):");
    

    let numeros = entrada.split(',').map(num => parseFloat(num.trim()));
    

    if (numeros.some(isNaN)) {

        console.log("Por favor, introduce solo números válidos");
        return;
    }
    

    let numerosInvertidos = numeros.map(numero => -numero);
    


    console.log("Números originales:", numeros.join(', '));
    console.log("Números con signos invertidos:", numerosInvertidos.join(', '));
}


invertirSignos();
