//EJERCICIO 61

//Hacer un programa que permita ingresar n Notas de alumnos (100 – 1), y que imprima cual
//fue la nota alta, la nota baja y cuantos alumnos obtuvieron la máxima nota de 100, cuantos
//obtuvieron las siguientes calificaciones:
//   a. «a» = menor que 100 y mayor igual que 90
//   b. «b» = menor que 90 y mayor igual que 80
//   c. «c» = menor que 80 y mayor igual que 70
//   d. «d» = menor que 70 y mayor igual que 60


console.log(`

    ANÁLISIS DE NOTAS DE ALUMNOS
    ----------------------------`);

function analizarNotas() {

    const notas = [];
    let notaAlta = 0, notaBaja = 100;
    let contadorMaxima = 0, contadorA = 0, contadorB = 0, contadorC = 0, contadorD = 0;

    while (true) {

        const nota = parseInt(prompt("Ingrese una nota (1-100) o 0 para terminar:"));

        if (nota === 0) break;

        if (isNaN(nota) || nota < 1 || nota > 100) {

            console.log("ERROR: Por favor, ingrese una nota válida entre 1 y 100.");
            continue;
        }

        notas.push(nota);

        // Actualizar estadísticas
        notaAlta = Math.max(notaAlta, nota);
        notaBaja = Math.min(notaBaja, nota);

        if (nota === 100) contadorMaxima++;

        if (nota >= 90) contadorA++;

        else if (nota >= 80) contadorB++;

        else if (nota >= 70) contadorC++;
        
        else if (nota >= 60) contadorD++;
    }

    // Mostrar resultados

    console.log(`\nResultados:`);
    console.log(` > Nota más alta: ${notaAlta}`);
    console.log(` > Nota más baja: ${notaBaja}`);
    console.log(` > Cantidad de notas máximas (100): ${contadorMaxima}`);
    console.log(`\nDistribución de notas:`);
    console.log(` > A (90-100): ${contadorA}`);
    console.log(` > B (80-89): ${contadorB}`);
    console.log(` > C (70-79): ${contadorC}`);
    console.log(` > D (60-69): ${contadorD}`);

    console.log(` > Reprobados (<60): ${notas.length - (contadorA + contadorB + contadorC + contadorD)}`);
}

analizarNotas();
