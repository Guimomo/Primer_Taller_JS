//EJERCICIO 70

//Escribir un programa que almacene la cadena de caracteres contraseña en una variable,
//pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta.

console.log(`
    VERIFICAR CONTRASEÑA
    ---------------------------`);

function verificarContrasena() {

    const contrasenaCorrecta = "contraseña";
    let intento;
    
    do {
        intento = prompt("Introduce la contraseña:");
    } while (intento !== contrasenaCorrecta);
    
    console.log("¡Contraseña correcta!");
}

verificarContrasena();
