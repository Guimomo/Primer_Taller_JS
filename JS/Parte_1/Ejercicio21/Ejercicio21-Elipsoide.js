//EJERCICIO 21

//Escribir un programa que calcule el volumen de un elipsoide.

// Valores de los ejes del elipsoide
let a = 5; // eje semi-mayor
let b = 3; // eje semi-medio
let c = 2; // eje semi-menor

// Función para calcular el volumen de un elipsoide
function volumenElipsoide(a, b, c) {
    const pi = Math.PI;
    const volumen = (4 / 3) * pi * a * b * c;
    return volumen;
}

// Cálculo y resultado
let volumen = volumenElipsoide(a, b, c);
console.log(`El volumen del elipsoide es: ${volumen.toFixed(2)} unidades cúbicas`);
