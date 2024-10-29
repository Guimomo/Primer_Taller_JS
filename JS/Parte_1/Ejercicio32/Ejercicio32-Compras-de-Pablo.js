//EJERCICIO 32

//Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un
//2% de descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada
//producto y el total de la compra.


console.log(`CÁLCULO DEL VALOR A PAGAR POR LOS PRODUCTOS`);

let precios = [];
let descuentos = [0.05, 0.05, 0.02, 0.02]; // Descuentos para los productos
let totalCompra = 0;



function calcularCompra() {

    // Solicitar precios de los 5 productos

    for (let i = 0; i < 5; i++) {

        //Solo podras ingresar 5 como limite
        let precio = parseFloat(prompt(`Ingresa el precio del producto ${i + 1}:`));
        
        // Verificar si el precio es un número válido
        if (isNaN(precio) || precio < 0) {
            console.log("Por favor, ingresa un precio válido.");
            return;
        }

        precios.push(precio);
    }




    // Calcular el valor a pagar por cada producto

    for (let i = 0; i < precios.length; i++) {

        let descuento = descuentos[i < 2 ? 0 : 2]; // 5% para los primeros 2, 2% para los siguientes

        let precioConDescuento = precios[i] * (1 - descuento);

        totalCompra += precioConDescuento; // Sumar al total
        
        console.log(`El valor a pagar por el producto ${i + 1} es: $${precioConDescuento.toFixed(2)}`);
    }

    // Mostrar el total de la compra
    console.log(`El total de la compra es: $${totalCompra.toFixed(2)}`);
}

// Llamar a la función
calcularCompra();
