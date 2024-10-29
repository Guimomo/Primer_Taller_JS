//EJERCICIO 2

//escribir un programa que almacene la cadena de caracteres contraseña de una variable,
//pregunte al usuario por la contraseña e imprima por pantalla si la contraseña introducida
//por el usuario coincide con la guardada en la variable sin tener en cuenta mayúsculas y
//minúsculas, se debe validar que solo se pueda ingresar valores alfanuméricos.


const contraseña = 'Guille321' ;
let mensaje;


function IngresoDeContraseña() {

    const regexAlfanumerico = /^[a-zA-Z0-9]+$/;

    let contrasenaUsuario = prompt("Ingresa la contraseña:");

    if (regexAlfanumerico.test(contrasenaUsuario)) {


        if (contrasenaUsuario.toLowerCase() === contraseña.toLowerCase()) {
            mensaje = 'contraseña correcta';
        } else {
            mensaje = 'contraseña incorrecta';
        }


    } else {

        mensaje = "Por favor, ingresa solo caracteres alfanuméricos.";

    }

    console.log(mensaje);
}


IngresoDeContraseña();