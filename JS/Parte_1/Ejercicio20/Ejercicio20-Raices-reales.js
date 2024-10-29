//EJERCICIO 20

//Escriba un algoritmo que permita obtener las raíces reales de la ecuación de segundo
//grado: a * x2 + b + x + c, siendo X un valor constante.

console.log(`
    CÁLCULO DE RAÍCES DE UNA ECUACIÓN CUADRÁTICA
    ax² + bx + c = 0
    --------------------------------------------`);
    
    function calcularRaices() {


        // Solicitar coeficientes al usuario
        let a = parseFloat(prompt("Ingrese el coeficiente a:"));
        let b = parseFloat(prompt("Ingrese el coeficiente b:"));
        let c = parseFloat(prompt("Ingrese el coeficiente c:"));

    
        // Verificar si los valores ingresados son números válidos
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            console.log("ERROR: Por favor, ingrese solo valores numéricos válidos.");
            return;
        }

    
        // Verificar si es una ecuación cuadrática
        if (a === 0) {
            console.log("ERROR: El coeficiente 'a' no puede ser cero. La ecuación no es cuadrática.");
            return;
        }
    

        // Calcular el discriminante
        let discriminante = b * b - 4 * a * c;


    
        // Calcular las raíces según el valor del discriminante...

        let x1, x2;

        if (discriminante > 0) {

            x1 = (-b + Math.sqrt(discriminante)) / (2 * a); // Math.sqrt es raiz cuadrada matematica
            x2 = (-b - Math.sqrt(discriminante)) / (2 * a);

            console.log(`\nLa ecuación tiene dos raíces reales distintas:`);
            console.log(` ~ x1 = ${x1.toFixed(4)}`);
            console.log(` ~ x2 = ${x2.toFixed(4)}`);

        } else if (discriminante === 0) {

            x1 = -b / (2 * a);
            console.log(`\nLa ecuación tiene una raíz real doble:`);
            console.log(` ~ x = ${x1.toFixed(4)}`);

        } else {
            
            let parteReal = -b / (2 * a);
            let parteImaginaria = Math.sqrt(-discriminante) / (2 * a);
            console.log(`\nLa ecuación tiene dos raíces complejas conjugadas:`);
            console.log(` ~ x1 = ${parteReal.toFixed(4)} + ${parteImaginaria.toFixed(4)}i`);
            console.log(` ~ x2 = ${parteReal.toFixed(4)} - ${parteImaginaria.toFixed(4)}i`);
        }
    }
    
    calcularRaices();
