//EJERCICIO 32

//Se requiere calcular la distancia entre dos puntos, realizar el código que permita hallar la
//solución, por favor utilizar funciones matemáticas para ello.:
//   a.  rc((x2-x1)^2 + (y2-y1)^2).

console.log(`CÁLCULO DE LA DISTANCIA ENTRE DOS PUNTOS`);

let x1, y1, x2, y2;


function calcularDistancia() {

    // Solicitar coordenadas al usuario
    x1 = parseFloat(prompt("Ingresa la coordenada x1:"));
    y1 = parseFloat(prompt("Ingresa la coordenada y1:"));
    x2 = parseFloat(prompt("Ingresa la coordenada x2:"));
    y2 = parseFloat(prompt("Ingresa la coordenada y2:"));



    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
        console.log("Por favor, ingresa valores numéricos válidos para las coordenadas.");
        return;
    }

    // Calcular la distancia
    let distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));



    // Mostrar el resultado
    console.log(`La distancia entre los puntos (${x1}, ${y1}) y (${x2}, ${y2}) es: ${distancia.toFixed(2)}`);
}


calcularDistancia();
