//EJERCICIO 68

//Escribir un programa que muestre por consola la tabla de multiplicar del 1 al 10.

console.log(`

    TABLA DE MULTIPLICAR DEL 1 AL 10
    ---------------------------`);

function mostrarTablaMultiplicar() {

    // Iterar del 1 al 10
    for (let i = 1; i <= 10; i++) {
        
        let resultado = '';
        for (let j = 1; j <= 10; j++) {
            resultado += `${i} x ${j} = ${i * j}\n`; // Crear la línea de la tabla
        }
        console.log(resultado); // Mostrar la tabla de multiplicar de i
    }
}

mostrarTablaMultiplicar();

