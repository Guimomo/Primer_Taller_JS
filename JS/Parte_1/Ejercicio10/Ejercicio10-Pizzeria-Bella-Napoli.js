//EJERCICIO 10

//La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes. Los
//ingredientes para cada tipo de pizza aparecen a continuación:
//   a. Ingredientes vegetarianos: Pimiento y tofu.
//   b. Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.
//Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no, y en
//función de su respuesta le muestre un menú con los ingredientes disponibles para que
//elija. Solo se puede elegir un ingrediente además de la mozzarella y el tomate que están
//en todas las pizzas. Al final se debe mostrar por pantalla si la pizza elegida es vegetariana
//o no y todos los ingredientes que lleva.


function elegirIngrediente(vegetariana) {
    let ingredientes;
    
    if (vegetariana) {

        ingredientes = ["Pimiento", "Tofu"];

    } else {

        ingredientes = ["Pepperoni", "Jamón", "Salmón"];
    }

    console.log("Ingredientes disponibles:");

    for (let i = 0; i < ingredientes.length; i++) {

        console.log(`${i + 1}. ${ingredientes[i]}`);
    }


    const eleccion = parseInt(prompt("Elige un ingrediente (introduce el número correspondiente):"));


    if (isNaN(eleccion) || eleccion < 1 || eleccion > ingredientes.length) {

        console.log("Elección no válida. No se ha añadido ningún ingrediente.");
        return null; 
    }

    return ingredientes[eleccion - 1]; 
}



function Orden() {

    const tipoPizza = prompt("¿Quieres una pizza vegetariana? (sí/no):").toLowerCase();

    let vegetariana;

    if (tipoPizza === "sí") {
        vegetariana = true;


    } else if (tipoPizza === "no") {
        vegetariana = false;


    } else {
        console.log("Opción no válida. Por favor, responde con 'sí' o 'no'.");
        return; 
    }

    const ingredienteElegido = elegirIngrediente(vegetariana);


    if (ingredienteElegido) {

        const tipoPizzaTexto = vegetariana ? "vegetariana" : "carnivora/mixta";
        console.log(`Has elegido una pizza ${tipoPizzaTexto} con los siguientes ingredientes: Mozzarella, Tomate, ${ingredienteElegido}.`);
    }
}


Orden();
