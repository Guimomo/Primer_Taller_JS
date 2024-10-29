//EJERCICIO 55

//En una tienda de HELADO da un descuento por compra a sus clientes con membresía
//dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los
//descuentos son los siguientes: Tipo A 10% de descuento Tipo B 15% de descuento Tipo C
//20% de descuento.


console.log(`

    CÁLCULO DE DESCUENTO EN HELADERÍA
    (Descuentos por tipo de membresía)
    -----------------------------------`);

function calcularDescuentoHelado() {

    // Solicitar información al usuario
    const precio = parseFloat(prompt("Ingrese el precio del helado:"));
    const tipoMembresia = prompt("Ingrese el tipo de membresía (A, B o C):").toUpperCase();


    // Verificar si los valores ingresados son válidos
    if (isNaN(precio) || precio <= 0) {
        console.log("ERROR: Por favor, ingrese un precio válido.");
        return;
    }


    let descuentoPorcentaje;
    switch (tipoMembresia) {
        case 'A':
            descuentoPorcentaje = 10;
            break;
        case 'B':
            descuentoPorcentaje = 15;
            break;
        case 'C':
            descuentoPorcentaje = 20;
            break;
        default:
            console.log("ERROR: Tipo de membresía no válido. Debe ser A, B o C.");
            return;
    }


    // Calcular descuento y precio final
    const descuento = (precio * descuentoPorcentaje) / 100;
    const precioFinal = precio - descuento;

    
    // Mostrar resultados
    console.log(`\nResultados:`);
    console.log(` > Precio original: $${precio.toFixed(2)}`);
    console.log(` > Tipo de membresía: ${tipoMembresia}`);
    console.log(` > Descuento aplicado: ${descuentoPorcentaje}%`);
    console.log(` > Monto de descuento: $${descuento.toFixed(2)}`);
    console.log(`\n ~ Precio final: $${precioFinal.toFixed(2)}`);
}

calcularDescuentoHelado();
