//EJERCICIO 28

//Calcular el sueldo de un empleado dados como datos de entrada: 
//   a. Nombre.
//   b. horas de trabajo.
//   c. pago en hora.



console.log(`CÁLCULO DEL SUELDO DE UN EMPLEADO`);

let nombre, horasTrabajo, pagoPorHora, sueldo;

// Función para calcular el sueldo
function calcularSueldo() {


    // Solicitar datos al usuario...

    nombre = prompt("Ingresa el nombre del empleado:");

    horasTrabajo = parseFloat(prompt("Ingresa las horas trabajadas:"));
    pagoPorHora = parseFloat(prompt("Ingresa el pago por hora:"));



    if (isNaN(horasTrabajo) || isNaN(pagoPorHora)) {
        console.log("Por favor, ingresa valores numéricos válidos para horas y pago.");
        return;
    }


    sueldo = horasTrabajo * pagoPorHora;


    console.log(`El sueldo de ${nombre} es: $${sueldo.toFixed(2)}`);
}


calcularSueldo();
