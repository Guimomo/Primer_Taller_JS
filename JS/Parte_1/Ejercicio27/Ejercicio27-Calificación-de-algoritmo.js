//EJERCICIO 27

// Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. dicha
//calificación se compone de los siguientes porcentajes:
//   a. 55% del promedio final de sus calificaciones de los tres (3) parciales.
//   b. 30% de la calificación examen final.
//   c. 15% de la calificación trabajo final.



console.log(`CÁLCULO DEL PROMEDIO FINAL DE ALGORITMOS`);

let parcial1, parcial2, parcial3, examenFinal, trabajoFinal;
let promedioParciales, promedioFinal;


function calcularPromedioFinal() {


    // Solicitar las calificaciones
    parcial1 = parseFloat(prompt("Ingresa la calificación del primer parcial:"));
    parcial2 = parseFloat(prompt("Ingresa la calificación del segundo parcial:"));
    parcial3 = parseFloat(prompt("Ingresa la calificación del tercer parcial:"));

    examenFinal = parseFloat(prompt("Ingresa la calificación del examen final:"));
    trabajoFinal = parseFloat(prompt("Ingresa la calificación del trabajo final:"));

    

    // Verificar si todas las entradas son números válidos
    if (isNaN(parcial1) || isNaN(parcial2) || isNaN(parcial3) || isNaN(examenFinal) || isNaN(trabajoFinal)) {

        console.log("Por favor, ingresa valores numéricos válidos.");
        return;
    }



    // Calcular el promedio de los parciales
    promedioParciales = (parcial1 + parcial2 + parcial3) / 3;

    // Calcular el promedio final
    promedioFinal = (promedioParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);


    // Mostrar el resultado
    console.log(`El promedio final de la materia de algoritmos es: ${promedioFinal.toFixed(2)}`);
}



calcularPromedioFinal();
