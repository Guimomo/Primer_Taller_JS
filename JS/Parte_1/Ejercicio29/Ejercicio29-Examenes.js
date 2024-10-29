//EJERCICIO 29

//Un estudiante realiza cuatro exámenes. Realizar un algoritmo correspondiente para
//obtener el promedio de las calificaciones obtenidas. Las calificaciones van 1 a 5 puntos.


console.log(`CÁLCULO DEL PROMEDIO DE CALIFICACIONES`);

let calificacion1, calificacion2, calificacion3, calificacion4, promedio;


function calcularPromedio() {


    calificacion1 = parseFloat(prompt("Ingresa la calificación del primer examen (1-5):"));
    calificacion2 = parseFloat(prompt("Ingresa la calificación del segundo examen (1-5):"));
    calificacion3 = parseFloat(prompt("Ingresa la calificación del tercer examen (1-5):"));
    calificacion4 = parseFloat(prompt("Ingresa la calificación del cuarto examen (1-5):"));


    // Verificar si todas las calificaciones están en el rango correcto y son válidas
    if (
        isNaN(calificacion1) || calificacion1 < 1 || calificacion1 > 5 ||
        isNaN(calificacion2) || calificacion2 < 1 || calificacion2 > 5 ||
        isNaN(calificacion3) || calificacion3 < 1 || calificacion3 > 5 ||
        isNaN(calificacion4) || calificacion4 < 1 || calificacion4 > 5
    ) 
    
    {
        console.log("Por favor, ingresa calificaciones válidas entre 1 y 5.");
        return;
    }



    // Calcular el promedio...
    promedio = (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;


    console.log(`El promedio de las calificaciones es: ${promedio.toFixed(2)}`);
}


calcularPromedio();
