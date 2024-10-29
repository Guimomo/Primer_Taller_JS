//EJERCICIO 59

//. En un colegio, se necesita hacer una selección de basquetbol que represente al colegio,
//para lo cual es requisito indispensable que los postulantes sean menores o iguales a 19
//años, con una estatura de más de 175 cm y el peso tiene que estar entre los 80 kg y 75.


console.log(`

    SELECCIÓN DE EQUIPO DE BASQUETBOL

    ---------------------------------`);


function evaluarCandidato() {

    // Solicitar información al usuario
    const edad = parseInt(prompt("Ingrese la edad del candidato:"));
    const estatura = parseFloat(prompt("Ingrese la estatura del candidato en cm:"));
    const peso = parseFloat(prompt("Ingrese el peso del candidato en kg:"));


    // Verificar si los valores ingresados son válidos
    if (isNaN(edad) || isNaN(estatura) || isNaN(peso)) {
        console.log("ERROR: Por favor, ingrese valores numéricos válidos.");
        return;
    }


    // Evaluar criterios de selección
    const cumpleEdad = edad <= 19;
    const cumpleEstatura = estatura > 175;
    const cumplePeso = peso >= 75 && peso <= 80;


    const esSeleccionado = cumpleEdad && cumpleEstatura && cumplePeso;


    // Mostrar resultados
    console.log(`\nResultados:`);
    console.log(` > Edad: ${edad} años ${cumpleEdad ? '✓' : '✗'}`);
    console.log(` > Estatura: ${estatura} cm ${cumpleEstatura ? '✓' : '✗'}`);
    console.log(` > Peso: ${peso} kg ${cumplePeso ? '✓' : '✗'}`);
    console.log(`\n ~ Resultado: ${esSeleccionado ? 'SELECCIONADO' : 'NO SELECCIONADO'}`);

    
    if (!esSeleccionado) {
        console.log("\nRazones de no selección:");
        if (!cumpleEdad) console.log(" - Edad superior a 19 años");
        if (!cumpleEstatura) console.log(" - Estatura inferior a 175 cm");
        if (!cumplePeso) console.log(" - Peso fuera del rango 75-80 kg");
    }
}

evaluarCandidato();
