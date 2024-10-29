//EJERCICIO 6

//los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo y el
//nombre, el grupo A está formado por las mujeres con un nombre anterior a la M y los
//hombres con un nombre posterior a la N y el grupo B por el resto, escribir un programa que
// al usuario su nombre y sexo y muestre por pantalla el grupo al que corresponde.


function determinarGrupo(nombre, sexo) {

    const nombreInicial = nombre.charAt(0).toUpperCase(); 

    if (sexo.toLowerCase() === 'mujer' && nombreInicial < 'M') {
        return 'Grupo A';
        
    } else if (sexo.toLowerCase() === 'hombre' && nombreInicial > 'N') {
        return 'Grupo A'; 

    } else {
        return 'Grupo B';
        
    }
}


function main() {

    const nombre = prompt("Introduce tu nombre:");
    
    const sexo = prompt("Introduce tu sexo (hombre/mujer):");


    if (!nombre || (sexo.toLowerCase() !== 'hombre' && sexo.toLowerCase() !== 'mujer')) {
        console.log("Por favor, ingresa un nombre y un sexo válidos.");
        return;
    }


    const grupo = determinarGrupo(nombre, sexo);
    console.log(`Pertenes al: ${grupo}`);
}

main();