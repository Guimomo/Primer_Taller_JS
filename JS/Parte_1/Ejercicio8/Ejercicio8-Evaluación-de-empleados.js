//EJERCICIO 8

//En una determinada empresa, sus empleados son evaluados al final de cada año. Los
//puntos que pueden obtener en la evaluación comienzan en 0.0 y pueden ir aumentando,
//traduciéndose en mejores beneficios. Los puntos que pueden conseguir los empleados
//pueden ser 0.0, 0.4, 0.6 o más, pero no valores intermedios entre las cifras mencionadas.
//A continuación, se muestra una tabla con los niveles correspondientes a cada puntuación.

//   a. La cantidad de dinero conseguida en cada nivel es de 2.400€ multiplicada por la
//puntuación del nivel.
//   b. Nivel Puntuación Inaceptable 0.0 Aceptable 0.4 Meritorio 0.6 o más
// un programa que lea la puntuación del usuario e indique su nivel de rendimiento,
//así como la cantidad de dinero que recibirá el usuario.

function evaluarDesempeño(puntuacion) {
    const cantidadPorPuntuacion = 2400; 
    let nivel;
    let cantidad;


    if (puntuacion === 0.0) {
        nivel = "Inaceptable";
        cantidad = 0;
    } else if (puntuacion === 0.4) {
        nivel = "Aceptable";
        cantidad = cantidadPorPuntuacion * puntuacion;
    } else if (puntuacion >= 0.6) {
        nivel = "Meritorio";
        cantidad = cantidadPorPuntuacion * puntuacion;
    } else {
        nivel = "Puntuación no válida"; 
        cantidad = 0;
    }

    return { nivel, cantidad };
}


function main() {
    const puntuacion = parseFloat(prompt("Introduce tu puntuación de evaluación (0.0, 0.4, 0.6 o más):"));

    if (isNaN(puntuacion) || puntuacion < 0) {
        console.log("Por favor, ingresa una puntuación válida.");
        return;
    }


    const { nivel, cantidad } = evaluarDesempeño(puntuacion);


    if (nivel === "Puntuación no válida") {
        console.log(nivel);

    } else {
        
        console.log(`Tu nivel de rendimiento es: ${nivel}`);
        console.log(`La cantidad de dinero que recibirás es: ${cantidad.toFixed(2)}€`);
    }
}


main();