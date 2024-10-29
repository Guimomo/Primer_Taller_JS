//EJERCICIO 42

//Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550. Calcular el
//monto total de la venta, según la cantidad de artículos solicitados durante el día.

console.log(`CÁLCULO DEL MONTO TOTAL DE LA VENTA`);

let cantidadLibros = parseInt(prompt("Ingresa la cantidad de libros:"));
let cantidadCuadernos = parseInt(prompt("Ingresa la cantidad de cuadernos:"));
let cantidadLapiceros = parseInt(prompt("Ingresa la cantidad de lapiceros:"));

function calcularVenta(cantidadLibros, cantidadCuadernos, cantidadLapiceros) {
    
    const precioLibro = 10000;
    const precioCuaderno = 7550;
    const precioLapicero = 5550;
    
    let total = (cantidadLibros * precioLibro) + (cantidadCuadernos * precioCuaderno) + (cantidadLapiceros * precioLapicero);
    console.log(`El monto total de la venta es: $${total}`);
}

calcularVenta(cantidadLibros, cantidadCuadernos, cantidadLapiceros);
