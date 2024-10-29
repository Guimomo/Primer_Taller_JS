//EJERCICIO 24

//Escriba una expresión regular que reconozca los números en punto flotante (por ejemplo 2.3e-1, -3e2, 23, 3.2).

console.log(`RECONOCIMIENTO DE NÚMEROS EN PUNTO FLOTANTE`);

let numeros = ['2.3e-1', '-3e2', '23', '3.2', '0.45', '.5', '-0.5', '1e3', 'abc'];

function reconocerNumeros() {
    const regex = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;

    numeros.forEach(numero => {

        if (regex.test(numero)) {
            console.log(`  > ${numero} es un número válido`);
        } else {
            console.log(`  > ${numero} no es un número válido`);
        }
        
    });
}

reconocerNumeros();
