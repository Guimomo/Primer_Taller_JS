//EJERCICIO 66

//Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el
//número de años, y muestre por pantalla el capital obtenido en la inversión cada año que
//dura la inversión.


console.log(`

    CALCULO DE INVERSIÓN
    ---------------------------`);

function calcularInversion() {


    // Pedir al usuario la cantidad a invertir, el interés anual y el número de años
    let cantidadInvertir = parseFloat(prompt("Introduce la cantidad a invertir:"));
    let interesAnual = parseFloat(prompt("Introduce el interés anual (en %):")) / 100;
    let numeroAnios = parseInt(prompt("Introduce el número de años:"));

    // Verificar que los valores ingresados son válidos
    if (cantidadInvertir > 0 && interesAnual >= 0 && numeroAnios > 0) {
        let capital = cantidadInvertir;

        console.log("Año\tCapital"); //El \t añade un espacio entre "Año" y "Capital", haciendo que la presentación sea más clara y fácil de leer. Sin él, el texto estaría pegado y sería menos legible.

        // Calcular el capital al final de cada año
        for (let año = 1; año <= numeroAnios; año++) {

            capital += capital * interesAnual; // Aumentar el capital con el interés

            console.log(`${año}\t${capital.toFixed(2)}`); // Mostrar el capital con dos decimales
        }

    } else {

        console.log("Por favor, introduce valores válidos.");
    }
}

calcularInversion();

