//EJERCICIO 69

//Escribir un programa que pida al usuario un número entero y muestre por consola un
//triángulo rectángulo como el de más abajo.

console.log(`
    TRIÁNGULO RECTÁNGULO
    ---------------------------`);

function dibujarTriangulo() {

    let numero = parseInt(prompt("Introduce un número entero:"));
    
    if (numero > 0) {

        for (let i = 1; i <= numero; i++) {

            let linea = '';

            for (let j = 1; j <= i; j++) {
                linea += '*';
            }
            console.log(linea);
        }

    } else {
        console.log("Por favor, introduce un número válido mayor que 0.");
    }
}


dibujarTriangulo();