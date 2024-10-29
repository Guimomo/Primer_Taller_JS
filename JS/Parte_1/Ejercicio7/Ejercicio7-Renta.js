//EJERCICIO 7

//los tramos impositivos para la declaración de la renta en un determinado país son:
//  a. entre 10000 y 20000 ---- 5%
//  b. entre 20000 y 35000 ---- 10%
//  c. entre 35000 y 60000 ---- 20%
//  d. más de 60000 ---- 45%
//escribir un programa que pregunte al usuario su renta anual y muestre por pantalla el tipo
//de impositivo que le corresponde.


function valorDeTipoImpositivo(renta) {

    if (renta >= 10000 && renta < 20000) {
        return "5%";

    } else if (renta >= 20000 && renta < 35000) {
        return "10%";

    } else if (renta >= 35000 && renta < 60000) {
        return "20%";

    } else if (renta > 60000) {
        return "45%";

    } else {
        return "No aplica para tramos impositivos."; 

    }
}




function IngreasarRenta() {

    const renta = parseFloat(prompt("Introduce tu renta anual:"));


    if (isNaN(renta) || renta < 0) {
        console.log("ERROR: ingresa una renta válida.");
        return;
    }

    const tipoImpositivo = valorDeTipoImpositivo(renta);
    console.log(`El tipo impositivo que te corresponde es: ${tipoImpositivo}`);
}


IngreasarRenta();
