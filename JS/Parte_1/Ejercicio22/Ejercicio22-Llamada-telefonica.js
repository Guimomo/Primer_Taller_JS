//EJERCICIO 22

//Escribir un programa que muestre el pago de una llamada telefónica sabiendo que cada
//minuto cuesta $355 pesos y un IVA 20%.



   // Valores
let minutos = parseFloat(prompt("Cuantos minutos hablo?")); // Duración de la llamada en minutos
const costoPorMinuto = 355; // Costo por minuto en pesos
const iva = 0.20; // IVA del 20%



   // Función para calcular el costo total de la llamada
function calcularCostoLlamada(minutos, costoPorMinuto, iva) {
   
    let subtotal = minutos * costoPorMinuto;
    let totalIva = subtotal * iva;
    let total = subtotal + totalIva;
    return total;
}


   // Cálculo y resultado
let totalPagar = calcularCostoLlamada(minutos, costoPorMinuto, iva);
console.log(`El costo total de la llamada es: $${totalPagar.toFixed(2)} pesos`);


