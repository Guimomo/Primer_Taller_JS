//EJERCICIO 7

//Crea una función para validar un pin que acepte 4 o 6 caracteres de longitud, solo se
//aceptan números, la función debe devolver true si el pin es válido y false si no es válido.


console.log(`
    INVERTIR CADENA DE TEXTO
    ---------------------------`);

function invertirCadena() {
    // Pedir la cadena al usuario
    let texto = prompt("Introduce una palabra o frase:");
    
    // Invertir la cadena
    let textoInvertido = texto.split('').reverse().join('');
    
    // Mostrar resultado
    console.log(`Texto original: ${texto}`);
    console.log(`Texto invertido: ${textoInvertido}`);
}

invertirCadena();
