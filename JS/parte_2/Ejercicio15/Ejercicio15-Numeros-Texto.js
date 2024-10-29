//EJERCICIO 15

//Crea una función que convierta números del 0 al 5 en su representación textual, por
//ejemplo: “cero”, “uno”, “dos”, “tres” etc.

console.log(`

    CONVERTIR NÚMERO A TEXTO
    ---------------------------`);

function numeroATexto() {

    const numeros = [
        'cero', 'uno', 'dos', 'tres', 
        'cuatro', 'cinco'
    ];
    
    // Pedir número al usuario
    let numero = parseInt(prompt("Introduce un número (0-5):"));
    

    if (isNaN(numero) || numero < 0 || numero > 5) {
        console.log("Por favor, introduce un número válido entre 0 y 5");
        return;
    }
    
    // Convertir y mostrar resultado
    console.log(`Número: ${numero}`);
    console.log(`En texto: ${numeros[numero]}`);
}

numeroATexto();
