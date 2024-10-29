//EJERCICIO 39

//Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura
//Considere que se cobra por m2 y realice el código que representen el algoritmo que le
//permita ir generando presupuestos para cada cliente.

console.log(`CÁLCULO DE PRESUPUESTO PARA TRABAJOS DE PINTURA`);


let m2 = parseFloat(prompt("Ingresa el área en m² a pintar:"));
let precioPorM2 = parseFloat(prompt("Ingresa el precio por m²:"));


function calcularPresupuesto(m2, precioPorM2) {
    let total = m2 * precioPorM2;
    console.log(`El presupuesto total por ${m2} m² es: $${total.toFixed(2)}`);
}

calcularPresupuesto(m2, precioPorM2);

