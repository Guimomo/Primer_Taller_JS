//EJERCICIO 23

//Realice un algoritmo que, a partir de proporcionarle la velocidad de un automóvil
//expresada en kilómetros por hora, proporcione la velocidad en metros por segundo.


console.log(`CONVERSIÓN DE VELOCIDAD: Km/h a m/s`);

let velocidadKmh, velocidadMs;

function convertirVelocidad() {
    velocidadKmh = 100; // puedes cambiar este valor por la velocidad en km/h que quieras convertir

    // Fórmula para convertir de km/h a m/s
    velocidadMs = velocidadKmh * 1000 / 3600;

    console.log(`Valores ingresados:`);
    console.log(`  > Velocidad = ${velocidadKmh} km/h`);
    
    console.log(`\n~ La velocidad es igual a: ${velocidadMs.toFixed(2)} metros/segundo`);
}

convertirVelocidad();
