//EJERCICIO 40

//Una empresa que contrata personal requiere determinar la edad de las personas que
//solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que
//nacieron. Realice el código que representen el algoritmo para solucionar este problema.

console.log(`CÁLCULO DE LA EDAD DE UNA PERSONA`);



let añoNacimiento;

function calcularEdad() {

    añoNacimiento = parseInt(prompt("Ingresa tu año de nacimiento:"));

    let añoActual = new Date().getFullYear();

    
    let edad = añoActual - añoNacimiento;

    console.log(`La edad es: ${edad} años`);
}

calcularEdad();

