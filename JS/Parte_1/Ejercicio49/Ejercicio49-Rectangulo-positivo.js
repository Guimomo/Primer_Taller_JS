//EJERCICIO 49

//Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean
//positivos: área triangulo= lado * lado

console.log(`
    CÁLCULO DEL ÁREA DE UN RECTÁNGULO
    (Con lados positivos)
    -------------------------------------------`);

function calcularAreaRectangulo() {
    // Solicitar información al usuario
    const lado1 = parseFloat(prompt("Ingrese el primer lado del rectángulo:"));
    const lado2 = parseFloat(prompt("Ingrese el segundo lado del rectángulo:"));

    // Verificar si los valores ingresados son números válidos y positivos
    if (isNaN(lado1) || isNaN(lado2) || lado1 <= 0 || lado2 <= 0) {
        console.log("ERROR: Por favor, ingrese solo valores numéricos positivos.");
        return;
    }

    // Calcular el área
    const area = lado1 * lado2;

    // Mostrar resultados
    console.log(`\nResultados:`);
    console.log(` > Lado 1: ${lado1}`);
    console.log(` > Lado 2: ${lado2}`);
    console.log(`\n ~ El área del rectángulo es: ${area}`);
}

calcularAreaRectangulo();