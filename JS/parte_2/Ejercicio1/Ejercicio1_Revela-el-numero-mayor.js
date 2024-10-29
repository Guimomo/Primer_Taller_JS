//EJERCICIO #1

//Crea una función que reciba dos números como parámetros y devuelva el mayor de ellos.


let numero1 = parseInt(prompt("Ingrese un número entero positivo:"));

let numero2 = parseInt(prompt("Ingrese un número entero positivo:"));

if (isNaN(numero1) || numero1 <= 0 || isNaN(numero2) || numero2 <= 0 ) {

    console.log("ERROR: Se deben ingresar valores númericos positivos válidos.");

} else {

const mayor = (numero1,numero2) => {

    numero1 < numero2 ? console.log(`El número ${numero2} es el mayor`) : console.log(`El número ${numero1} es el mayor`); 
    // Se usa un operador termiario, el cual es como un booleano
    
}

// const mayor =()=> numero1 < numero2 ? console.log(`El número ${numero2} es el mayor`) : console.log(`El número ${numero1} es el mayor`);
// Esta es la forma de una sola linea...


mayor (numero1, numero2);

}
