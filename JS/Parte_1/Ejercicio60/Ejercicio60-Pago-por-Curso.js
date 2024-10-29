//EJERCICIO 60

//Hacer un programa que permita ingresar n cantidad de cursos, si la cantidad de cursos que
//lleva el alumno es menor que 6 el pago será $2.000.000 por cada curso, pero si la cantidad
//de cursos es mayor que 6 el pago será únicamente de $1.200.000.


console.log(`

    CÁLCULO DE PAGO POR CURSOS
    --------------------------`);


function calcularPagoCursos() {

    // Solicitar información al usuario
    const cantidadCursos = parseInt(prompt("Ingrese la cantidad de cursos:"));


    // Verificar si el valor ingresado es válido
    if (isNaN(cantidadCursos) || cantidadCursos <= 0) {
        console.log("ERROR: Por favor, ingrese un número válido de cursos.");
        return;
    }


    // Calcular pago
    const precioPorCurso = cantidadCursos <= 6 ? 2000000 : 1200000;
    const pagoTotal = cantidadCursos * precioPorCurso;

    
    // Mostrar resultados
    console.log(`\nResultados:`);
    console.log(` > Cantidad de cursos: ${cantidadCursos}`);
    console.log(` > Precio por curso: $${precioPorCurso.toLocaleString()}`);
    console.log(`\n ~ Pago total: $${pagoTotal.toLocaleString()}`);
}

calcularPagoCursos();
