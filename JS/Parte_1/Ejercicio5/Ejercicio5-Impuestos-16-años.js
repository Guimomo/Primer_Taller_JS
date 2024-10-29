//EJERCICIO 5

//Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos
//ingresos iguales o superiores a 1000 mensuales, escribir un programa que pregunte al
//usuario su edad e ingresos mensuales y muestre por pantalla si el usuario debe tributar o no.


function Tributar(edad, ingresos) {

    return edad > 16 && ingresos >= 1000;
}


function main() {

    const edad = parseInt(prompt("Introduce tu edad:"));

    const ingresos = parseFloat(prompt("Introduce tus ingresos mensuales:"));


    if (isNaN(edad) || isNaN(ingresos)) {

        console.log("ERROR: Se deben ingresar valores númericos válidos en el apartado de edad e ingresos.");
        return;
    }


    if (Tributar(edad, ingresos)) { // se llama a la función de Tributar para determinar si la edad o ingresos son los requeridos para hacerlo...

        console.log("Debes tributar.");
    } else {
        console.log("No debes tributar.");
    }
    
}


main();

