//EJERCICIO 12

//Escribe una función que tome una cadena y devuelva una nueva cadena sin las vocales.

console.log(`

    ELIMINAR VOCALES
    ---------------------------`);

function eliminarVocales() {


    let texto = prompt("Introduce una palabra o frase:");
    

    let sinVocales = texto.replace(/[aeiouAEIOU]/gi, '');
    

    console.log("Texto original:", texto);
    console.log("Texto sin vocales:", sinVocales);
}

eliminarVocales();
