//EJERCICIO 48

//Escriba un algoritmo que permita calcular el área, debe preguntar que figura geométrica
//desea calcular "Triángulo y Círculo: (Escriba T o C):
//   a. Triangulo = base * altura / 2
//   b. Circulo = PI * radio* radio

console.log(`
    CÁLCULO DEL ÁREA DE FIGURAS GEOMÉTRICAS
    -----------------------------------------`);




function calcularArea(op) {


    do {
        
    op=parseInt(prompt(`

        ¿Qué deseas calcular?

        1. Área de un triángulo
        2. Área de un círculo

        0=salir

        Ingresa numero de la figura que desea calcular:`)
    );



        if (op===1){

        console.log(`ÁREA de un TRIÁNGULO EQUILATERO`);

        let base, altura;

        base = parseInt(prompt("Por favor, ingresa la medida base del triángulo."));
        altura = parseInt(prompt("ahora ingresa la altura del triángulo."))


        if (isNaN(base) || isNaN(altura)) {

            console.log("ERROR: Se deben ingresar valores númericos válidos.");
            return;
        }
    
        let area = (base * altura) / 2;
    
        console.log(` Valores ingresados:`);
        console.log(`  > Base = ${base} m`);
        console.log(`  > Altura = ${altura} m`);
    
        console.log (`    ~ El área del triangulo es: ${area} m²`);


        }

        else if (op===2) {

            console.log(`ÁREA de una CIRCUNFERENCIA`);

            radio = parseInt(prompt("Por favor, ingresa el radio de la circunferencia."));

            if (isNaN(radio)) {
        
                console.log("ERROR: Se deben ingresar valores númericos válidos.");
                return;
            }
        
            let diametro, area, perimetro;
        
            diametro = radio * 2 ;
        
            area = Math.PI * Math.pow(radio, 2); // significa: área = π * radio²
        
            perimetro = 2 * Math.PI * radio;
        
        
            console.log(` Valor ingresado:`);
            console.log(`  > Radio = ${radio} metros`);
        
            
        
            console.log (`    ~ El diametro de la circunferencia es: ${diametro} metros`);
        
            console.log (`    ~ El área de la circunferencia es: ${area.toFixed(2)} metros²`);
        
            console.log (`    ~ El perimetro/longitud de la circunferencia es: ${perimetro.toFixed(2)} metros`);

        }

        else if (op===0) {

            console.log(`Saliendo del programa...`);
            break;
        } else {
            console.log(`ERROR: ingrese un valor valido`);
            continue;
        }

        
    }while (op!=0)

}

calcularArea();
