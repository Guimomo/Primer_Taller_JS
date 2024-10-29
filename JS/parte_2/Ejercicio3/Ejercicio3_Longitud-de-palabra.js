//EJERCICIO #3

//Crea una función que calcule la longitud de una palabra si es corta o si es larga. (palabras cortas menores de 5 caracteres).

let palabra = prompt("Ingrese cualquier palabra:");

const calcular = (palabra) => {

    return (palabra.length < 5 ) ? "La palabra es corta" : "La palabra es larga";

}

console.log(calcular (palabra));
