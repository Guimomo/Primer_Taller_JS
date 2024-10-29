//EJERCICIO 38

//Tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final del año.
//Martín toma 2/3 del total, Jairo un cuarto del total, y Lorena se queda con el resto. ¿Qué
//parte le corresponde a Lorena?

console.log(`
    CÁLCULO DE LA PARTE QUE LE CORRESPONDE A LORENA
    ------------------------------------------------`);


function parteLorena(totalTapas) {

    let partesMartin = (2 / 3) * totalTapas;
    let partesJairo = (1 / 4) * totalTapas;
    let partesLorena = totalTapas - (partesMartin + partesJairo);
    
    console.log(`Parte que le corresponde a Lorena: ${partesLorena}`);
}

parteLorena(60); // Cambia el total de tapas
