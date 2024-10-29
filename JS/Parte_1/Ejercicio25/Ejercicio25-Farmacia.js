//EJERCICIO 25

//Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un programa
//que ingresando el costo de los medicamentos calcule el descuento y el precio final.



console.log(`CÁLCULO DE DESCUENTO EN MEDICAMENTOS`);

let costoMedicamento, descuento, precioFinal;

function calcularDescuento() {

    
    // Solicitar el costo del medicamento y convertirlo a número entero
    costoMedicamento = parseInt(prompt("Ingresa el costo del medicamento:"));

    // Verificar si el valor ingresado es válido
    if (isNaN(costoMedicamento)) {
        console.log("Por favor, ingresa un valor numérico válido.");
        return;
    }

    // Cálculo del 10% de descuento
    descuento = costoMedicamento * 0.10;
    precioFinal = costoMedicamento - descuento;

    console.log(`Valores ingresados:`);
    console.log(`  > Costo del medicamento = $${costoMedicamento}`);
    console.log(`  > Descuento aplicado = $${descuento.toFixed(2)}`);

    console.log(`\n~ El precio final después del descuento es: $${precioFinal.toFixed(2)}`);
}

calcularDescuento();

