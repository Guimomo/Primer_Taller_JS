//EJERCICIO #4

//Crea una función para calcular cuantas silabas tiene cada palabra, imprime el resultado en la consola.

let palabra = prompt("Ingrese cualquier palabra:");

const silabas = (palabra) => {

    const contar = /([aeiouáéíóú])(?:[aeiouyáéíóú]?)(?![[aeiouáéíóú]])/gi;

    // const contar = /([aeiou])()/gi ;
    const cantidad = palabra.match(contar);

    console.log(cantidad.length);

}

silabas (palabra);
