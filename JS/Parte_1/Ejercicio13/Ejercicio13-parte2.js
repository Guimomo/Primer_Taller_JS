
function media(...numeros) {

    let sum = 0;

    for (let num of numeros) {
        sum += num; // Suma acumulativa
    }

    let media = sum / numeros.length; // Calcula la media
    return media; // Retorna el valor de la media
}

let numeros = [];
let op;

do {
    
    op = parseFloat(prompt(`

        ¿Deseas ingresar un nuevo valor?

        1 = si
        0 = no

            > Ingresa tu respuesta:`)
    );

    switch (op) {
        case 1:
            let num = parseFloat(prompt(`Ingresa el número:`)); // Permite ingresar números decimales


            if (!isNaN(num)) {

                numeros.push(num); // Agrega el número al array solo si es válido

            } else {
                alert('Por favor, ingresa un número válido.');
            }

            break; // Salimos del switch
    
        case 0:
            console.log(`Saliendo del programa...`);
            break;

        default:
            console.log(`ERROR: Ingrese un valor válido`);
            break;
    }
    
} while (op !== 0);


console.log(`Array final de números: ${numeros}`);

let resultado = media(...numeros); // Calcula la media con los números ingresados

alert(`La media es: ${resultado.toFixed(2)}`); // Muestra el resultado con dos decimales

console.log(`
    La suma del Array es igual a: ${resultado.toFixed(2)} 

    change my mind`);