//EJERCICIO 52

//En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es
//de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora
//trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de
//horas trabajadas.

console.log(`
    CÁLCULO DE SALARIO DE EMPLEADOS
    (Planta: $20.000/hora, Administrativo: $10.000/hora)
    ---------------------------------------------------`);

function calcularSalarioEmpleado() {
    // Solicitar información al usuario
    const tipoEmpleado = prompt("Ingrese el tipo de empleado (planta/administrativo):").toLowerCase();
    const horasTrabajadas = parseFloat(prompt("Ingrese el total de horas trabajadas:"));

    // Verificar si los valores ingresados son válidos
    if (tipoEmpleado !== 'planta' && tipoEmpleado !== 'administrativo') {
        console.log("ERROR: El tipo de empleado debe ser 'planta' o 'administrativo'.");
        return;
    }
    if (isNaN(horasTrabajadas) || horasTrabajadas < 0) {
        console.log("ERROR: Por favor, ingrese un número válido de horas trabajadas.");
        return;
    }

    // Calcular salario
    const tarifaHora = tipoEmpleado === 'planta' ? 20000 : 10000;
    const salario = tarifaHora * horasTrabajadas;

    // Mostrar resultados
    console.log(`\nResultados:`);
    console.log(` > Tipo de empleado: ${tipoEmpleado}`);
    console.log(` > Horas trabajadas: ${horasTrabajadas}`);
    console.log(` > Tarifa por hora: $${tarifaHora}`);
    console.log(`\n ~ Salario total: $${salario.toFixed(2)}`);
}

calcularSalarioEmpleado();
