//EJERCICIO 53

//Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados de:
//Iva, Subtotal y Total de la compra de los artículos.


console.log(`
    CÁLCULO DE COMPRA DE PRODUCTOS CON IVA
    (5 productos)
    -------------------------------------------`);

function calcularCompraProductos() {
    const productos = [];
    const IVA = 0.19; // 19% de IVA



    // Solicitar información al usuario
    for (let i = 1; i <= 5; i++) {
        const precio = parseFloat(prompt(`Ingrese el precio del producto ${i}:`));

        if (isNaN(precio) || precio < 0) {
            
            console.log(`ERROR: Por favor, ingrese un precio válido para el producto ${i}.`);
            return;
        }
        productos.push(precio);
    }


    // Calcular subtotal, IVA y total
    const subtotal = productos.reduce((sum, precio) => sum + precio, 0);
    //.reduce() suma todos los precios en el array productos. El 0 al final es el valor inicial del acumulador sum.
    
    const ivaTotal = subtotal * IVA;
    const total = subtotal + ivaTotal;


    // Mostrar resultados
    console.log(`\nResultados:`);
    productos.forEach((precio, index) => {
        console.log(` > Producto ${index + 1}: $${precio.toFixed(2)}`);
    });


    console.log(`\n ~ Subtotal: $${subtotal.toFixed(2)}`);
    console.log(` ~ IVA (19%): $${ivaTotal.toFixed(2)}`);
    console.log(` ~ Total de la compra: $${total.toFixed(2)}`);
}

calcularCompraProductos();
