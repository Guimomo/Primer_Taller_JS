//EJERCICIO 41

//Ingrese una frase que lo identifique como programador de Software y luego mostrar esta
//frase invertida.

console.log(`INVERTIR UNA FRASE`);


function invertirFrase() {

    
    let frase = prompt("Ingresa una frase:");

    let fraseInvertida = frase.split('').reverse().join('');

    console.log(`Frase invertida: ${fraseInvertida}`);
}

invertirFrase();

