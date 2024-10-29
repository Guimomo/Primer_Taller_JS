//EJERCICIO 19

//Escribir un programa que calcule el área y el volumen de un cilindro.

console.log(`
    CÁLCULO DE ÁREA Y VOLUMEN DE UN CILINDRO
    ----------------------------------------`);
    
    function calcularCilindro() {

        // Solicitar valores al usuario
        let radio = parseFloat(prompt("Ingrese el radio del cilindro en metros:"));
        let altura = parseFloat(prompt("Ingrese la altura del cilindro en metros:"));
    

        // Verificar si los valores ingresados son números válidos y positivos
        if (isNaN(radio) || isNaN(altura) || radio <= 0 || altura <= 0) {
            console.log("ERROR: Por favor, ingrese solo valores numéricos positivos.");
            return;
        }
    

        // Calcular área y volumen
        let areaBase = Math.PI * Math.pow(radio, 2);
        let areaLateral = 2 * Math.PI * radio * altura;
        let areaTotal = 2 * areaBase + areaLateral;
        let volumen = areaBase * altura;
    

        // Mostrar los valores ingresados y los resultados
        console.log(`\nValores ingresados:`);
        console.log(` > Radio = ${radio.toFixed(2)} metros`);
        console.log(` > Altura = ${altura.toFixed(2)} metros`);
        

        
        console.log(`\nResultados:`);
        console.log(` ~ Área de la base: ${areaBase.toFixed(2)} metros²`);
        console.log(` ~ Área lateral: ${areaLateral.toFixed(2)} metros²`);
        console.log(` ~ Área total: ${areaTotal.toFixed(2)} metros²`);
        console.log(` ~ Volumen: ${volumen.toFixed(2)} metros³`);
    }
    
    calcularCilindro();
