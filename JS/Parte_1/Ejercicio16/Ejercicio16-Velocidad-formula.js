//EJERCICIO 16

//Escribir un programa que calcule la velocidad de un proyectil que recorre 2km en 5 minutos, 
//exprese el resultado en metros/segundo.


console.log(`ÁREA de una CIRCUNFERENCIA`);

let distancia, tiempo, velocidad;


function formula() {

    distancia = 2 * 1000;
    tiempo = 60 * 5; //se transforman los 5 minutos a 300s

    velocidad = distancia / tiempo;

    console.log(` Valores ingresados:`);
    console.log(`  > Distancia = ${distancia} metros`);
    console.log(`  > Tiempo = ${tiempo} segundos`);


    console.log (`    ~ La velocidad del proyectil es igual: ${velocidad.toFixed(2)} metros/segundo`);

}

formula();