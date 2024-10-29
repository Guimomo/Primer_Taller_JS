//EJERCICIO 8

//Crea una función para validar un pin que acepte 4 o 6 caracteres de longitud, solo se
//aceptan números, la función debe devolver true si el pin es válido y false si no es válido.

console.log(`
    VALIDACIÓN DE PIN
    ---------------------------`);

function validarPin() {

    // Pedir el PIN al usuario
    let pin = prompt("Introduce un PIN (4 o 6 dígitos):");
    
    // Validar el PIN usando expresión regular
    let esValido = /^(\d{4}|\d{6})$/.test(pin);
    
    // Mostrar resultado
    if (esValido) {
        console.log("PIN válido ✓");
        
    } else {
        console.log("PIN no válido ✗");
        console.log("El PIN debe contener 4 o 6 dígitos numéricos.");
    }
}

validarPin();
