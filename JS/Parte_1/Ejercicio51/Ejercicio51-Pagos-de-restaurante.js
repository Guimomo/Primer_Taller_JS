//EJERCICIO 51

//Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede
//los $130.000 el descuento será del 15%, de lo contrario no hay descuento.

console.log(`
    CÁLCULO DE DESCUENTO EN RESTAURANTE
    (15% de descuento si el consumo excede $130.000)
    -----------------------------------------------`);

function calcularDescuentoRestaurante() {
    // Solicitar información al usuario
    const consumo = parseFloat(prompt("Ingrese el monto del consumo:"));

    // Verificar si el valor ingresado es un número válido
    if (isNaN(consumo) || consumo < 0) {
        console.log("ERROR: Por favor, ingrese un monto válido.");
        return;
    }

    // Calcular descuento y total
    const descuentoPorcentaje = consumo > 130000 ? 15 : 0;
    const descuento = (consumo * descuentoPorcentaje) / 100;
    const total = consumo - descuento;

    // Mostrar resultados
    console.log(`\nResultados:`);
    console.log(` > Consumo: $${consumo.toFixed(2)}`);
    console.log(` > Descuento aplicado: ${descuentoPorcentaje}%`);
    console.log(` > Monto de descuento: $${descuento.toFixed(2)}`);
    console.log(`\n ~ Total a pagar: $${total.toFixed(2)}`);
}

calcularDescuentoRestaurante();
