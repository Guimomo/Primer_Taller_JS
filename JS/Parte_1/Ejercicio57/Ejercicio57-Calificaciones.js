//EJERCICIO 57

//Consideramos la asignación de una calificación literal a un rango dado de calificaciones
//numéricas de la siguiente manera: Rango de calificaciones: 9.1 a 10 Asignar la calificación
//de A equivale a Excelente 8.1 a 9 Asignar la calificación de A equivale a Muy bien 7.5 a 8
//Asignar la calificación de A equivale a Bien Menor a 7.5 asignar la calificación de NA No Aprobado.


console.log(`
    ASIGNACIÓN DE CALIFICACIÓN LITERAL
    ----------------------------------`);

function asignarCalificacion() {

    // Solicitar información al usuario
    const calificacionNumerica = parseFloat(prompt("Ingrese la calificación numérica (0-10):"));


    // Verificar si el valor ingresado es válido
    if (isNaN(calificacionNumerica) || calificacionNumerica < 0 || calificacionNumerica > 10) {
        console.log("ERROR: Por favor, ingrese una calificación válida entre 0 y 10.");
        return;
    }


    // Asignar calificación literal
    let calificacionLiteral, descripcion;
    if (calificacionNumerica >= 9.1 && calificacionNumerica <= 10) {
        calificacionLiteral = 'A';
        descripcion = 'Excelente';
    } else if (calificacionNumerica >= 8.1 && calificacionNumerica < 9.1) {
        calificacionLiteral = 'B';
        descripcion = 'Muy bien';
    } else if (calificacionNumerica >= 7.5 && calificacionNumerica < 8.1) {
        calificacionLiteral = 'C';
        descripcion = 'Bien';
    } else {
        calificacionLiteral = 'NA';
        descripcion = 'No Aprobado';
    }


    

    // Mostrar resultados
    console.log(`\nResultados:`);
    console.log(` > Calificación numérica: ${calificacionNumerica.toFixed(1)}`);
    console.log(` > Calificación literal: ${calificacionLiteral}`);
    console.log(`\n ~ Descripción: ${descripcion}`);
}

asignarCalificacion();
