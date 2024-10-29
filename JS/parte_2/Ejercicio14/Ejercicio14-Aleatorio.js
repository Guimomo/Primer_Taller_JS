//EJERCICIO 14

//Escribe una función que genere de forma aleatoria un numero entre 1 y 10, y verifica si
//este número es par o impar.

console.log(`
    NÚMERO ALEATORIO PAR/IMPAR
    ---------------------------`);

function generarYVerificar() {

    // Generar número aleatorio entre 1 y 10, Math.random() genera entre 0 y 1 * 10 lo lleva a rango 0-10
    // Math.floor redondea hacia abajo + 1 asegura que sea entre 1 y 10
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    
    // Verificar si es par o impar usando el operador módulo (%)
    let esPar = numeroAleatorio % 2 === 0;
    

    console.log(`Número generado: ${numeroAleatorio}`);
    console.log(`El número es ${esPar ? 'par' : 'impar'}`);
}

generarYVerificar();
