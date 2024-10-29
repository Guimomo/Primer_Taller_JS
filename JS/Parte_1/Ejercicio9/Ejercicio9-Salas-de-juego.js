//EJERCICIO 9

//Escribir un programa para una empresa que tiene salas de juegos para todas las edades y
//quiere calcular de forma automática el precio que debe cobrar a sus clientes por entrar. El
//programa debe preguntar al usuario la edad del cliente y mostrar el precio de la entrada. Si
//el cliente es menor de 4 años puede entrar gratis, si tiene entre 4 y 18 años debe pagar 5€
//y si es mayor de 18 años, 10€.


function calcularPrecioEntrada(edad) {

    if (edad < 4) {
        return 0; 

    } else if (edad >= 4 && edad <= 18) {
        return 5; 

    } else {
        return 10; 
    }
}


function ingresarEdad() {

    const edad = parseInt(prompt("Introduce la edad del cliente:"));


    if (isNaN(edad) || edad < 0) {

        console.log("ERROR ingresa una edad válida.");
        return;
    }


    const precio = calcularPrecioEntrada(edad);


    if (precio === 0) {
        console.log("El cliente puede entrar gratis.");

    } else {
        console.log(`El precio de la entrada es: ${precio}€`);

    }
}


ingresarEdad();
