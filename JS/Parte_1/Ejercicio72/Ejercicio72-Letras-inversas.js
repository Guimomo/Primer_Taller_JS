//EJERCICIO 72

//Escribir un programa que pida al usuario una palabra y luego muestre por pantalla una a
//una las letras de la palabra introducida empezando por la última.

console.log(`
    MOSTRAR PALABRA AL REVÉS
    ---------------------------`);

function PalabraReves() {
    
    let palabra = prompt("Introduce una palabra:");
    
    for (let i = palabra.length - 1; i >= 0; i--) {

        console.log(palabra[i]);
    }
}

PalabraReves();
