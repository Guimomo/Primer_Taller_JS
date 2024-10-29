//EJERCICIO 18

//Escribir un programa que evalúe la siguiente expresión (a+7*c) / (b+2-a) + 2*b

console.log(`
    EVALUACIÓN DE EXPRESIÓN MATEMÁTICA
    (a+7*c) / (b+2-a) + 2*b
    ----------------------------------------`);
    
    function evaluarExpresion() {
        
        // Solicitar valores al usuario
        let a = parseFloat(prompt("Ingrese el valor de a:"));
        let b = parseFloat(prompt("Ingrese el valor de b:"));
        let c = parseFloat(prompt("Ingrese el valor de c:"));
    
        // Verificar si los valores ingresados son números válidos
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            console.log("ERROR: Por favor, ingrese solo valores numéricos válidos.");
            return;
        }
    
        // Calcular la expresión
        let resultado = (a + 7 * c) / (b + 2 - a) + 2 * b;
    
        // Mostrar los valores ingresados y el resultado
        console.log(`\nValores ingresados:`);
        console.log(` > a = ${a}`);
        console.log(` > b = ${b}`);
        console.log(` > c = ${c}`);
        console.log(`\nResultado de la expresión:`);
        console.log(` ~ (${a} + 7 * ${c}) / (${b} + 2 - ${a}) + 2 * ${b} = ${resultado.toFixed(4)}`);
    }
    
    evaluarExpresion();
