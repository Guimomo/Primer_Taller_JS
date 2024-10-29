//EJERCICIO 67

//Escribir un programa que pida al usuario un número entero y muestre por pantalla un
//triángulo rectángulo como el de más abajo, de altura el número introducido.

console.log(`

    TRIÁNGULO RECTÁNGULO
    ---------------------------`);

function dibujarTriangulo() {


    // Pedir al usuario un número entero
    let altura = parseInt(prompt("Introduce la altura del triángulo rectángulo:"));

    // Verificar que el número es positivo

    if (altura > 0) {
        for (let i = 1; i <= altura; i++) {
            
            console.log('*'.repeat(i)); // Dibujar cada fila del triángulo
        }

    } else {

        console.log("Por favor, introduce un número entero positivo.");
    }

}

dibujarTriangulo();
