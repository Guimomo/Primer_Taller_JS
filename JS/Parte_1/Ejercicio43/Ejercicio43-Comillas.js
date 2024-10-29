//EJERCICIO 43

//Escriba una expresión regular que reconozca las cadenas de doble comillas. Debe permitir
//la presencia de comillas y caracteres escapados.

console.log(`EXPRESIÓN REGULAR PARA CADENAS DE DOBLE COMILLAS`);

let cadena = prompt("Ingresa una cadena que contenga texto entre comillas dobles:");

const regex = /"((?:[^"\\]|\\.)*)"/g; // Para reconocer cadenas entre comillas dobles
let resultado;



while ((resultado = regex.exec(cadena)) !== null) {
    console.log(`Texto encontrado entre comillas: ${resultado[1]}`);
}

if (!resultado) {
    console.log("No se encontraron cadenas entre comillas dobles.");
}

