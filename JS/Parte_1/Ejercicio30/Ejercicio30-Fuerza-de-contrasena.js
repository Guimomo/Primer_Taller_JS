//EJERCICIO 30

//Comprobar la fortaleza de una contraseña teniendo en cuenta que debe tener entre 8 y 12
//caracteres, y al menos una mayúscula, una minúscula, y un dígito.



console.log(`COMPROBACIÓN DE LA FORTALEZA DE UNA CONTRASEÑA`);

let contrasena;


function comprobarContrasena() {


    // Solicitar contraseña al usuario
    contrasena = prompt("Ingresa la contraseña:");



    // Verificar longitud
    if (contrasena.length < 8 || contrasena.length > 12) {

        console.log("La contraseña debe tener entre 8 y 12 caracteres.");
        return;
    }

    // Comprobar si contiene al menos una letra mayúscula
    if (!/ [A-Z] /.test(contrasena)) {

        console.log("La contraseña debe contener al menos una letra mayúscula.");
        return;
    }

    // Comprobar si contiene al menos una letra minúscula
    if (!/ [a-z] /.test(contrasena)) {

        console.log("La contraseña debe contener al menos una letra minúscula.");
        return;
    }

    // Comprobar si contiene al menos un dígito
    if (!/ \d /.test(contrasena)) {

        console.log("La contraseña debe contener al menos un dígito.");
        return;
    }



    // Si pasa todas las comprobaciones
    console.log("La contraseña es fuerte.");
}


comprobarContrasena();


//El método .test() en JavaScript es una función de los objetos RegExp (expresiones regulares) que se utiliza para comprobar si una cadena de texto (string) cumple con un patrón definido por una expresión regular. Este método devuelve un valor booleano (true o false), indicando si se encontró o no una coincidencia.