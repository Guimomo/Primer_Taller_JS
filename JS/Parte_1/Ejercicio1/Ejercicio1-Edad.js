//EJERCICIO 1

//Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es mayor o
//menor de edad, el programa debe validar que solo se puedan ingresar números positivos. 

let edad;

function verificarEdad() {
    edad = prompt("Ingresa tu edad:");

    if (edad > 0 && !isNaN(edad)) {
        if (edad >= 18) {
            alert("Eres mayor de edad.");
        } else {
            alert("Eres menor de edad.");
        }
    } else {
        alert("Por favor, ingresa un número válido.");
    }
}

verificarEdad();
console.log(edad); 