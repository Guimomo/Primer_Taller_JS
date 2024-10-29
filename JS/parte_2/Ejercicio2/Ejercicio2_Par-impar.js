//EJERCICIO #2

//Crea una función que tome un número como argumento y devuelva la cadena si el número es par o impar.

let numero = parseInt(prompt("Ingrese un número entero positivo:"));

const Par = a => {

    a % 2 === 0 ? console.log(`El numero ${numero} es PAR`) : console.log(`El numero ${numero} es IMPAR`);
}

// const Par = a => (a % 2 === 0) ? `El numero ${numero} es PAR` : `El numero ${numero} es IMPAR`;
// versión de una sola linea...


let a = Par(numero);

console.log (a);
