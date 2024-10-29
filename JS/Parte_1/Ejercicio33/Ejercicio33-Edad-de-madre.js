//EJERCICIO 33

//Calcular la edad de una madre en el momento que dio a luz a alguno de sus hijos.

console.log(`
    CÁLCULO DE LA EDAD DE LA MADRE AL DAR A LUZ
    (Con diferencia mínima de 15 años)
    -------------------------------------------`);
    
    function calcularEdadMadre() {


        // Obtener el año actual
        const añoActual = new Date().getFullYear();

    
        // Solicitar información al usuario
        const añoNacimientoMadre = parseInt(prompt("Ingrese el año de nacimiento de la madre:"));
        const añoNacimientoHijo = parseInt(prompt("Ingrese el año de nacimiento del hijo:"));
    

        // Verificar si los valores ingresados son números válidos
        if (isNaN(añoNacimientoMadre) || isNaN(añoNacimientoHijo)) {
            console.log("ERROR: Por favor, ingrese solo años válidos (números enteros).");
            return;
        }
    

        // Verificar si los años ingresados son lógicos
        if (añoNacimientoMadre >= añoActual || añoNacimientoHijo >= añoActual) {
            console.log("ERROR: Los años de nacimiento no pueden ser futuros.");
            return;
        }


    
        if (añoNacimientoMadre >= añoNacimientoHijo) {
            console.log("ERROR: El año de nacimiento de la madre debe ser anterior al del hijo.");
            return;
        }


    
        // Calcular la edad de la madre al dar a luz
        const edadMadreAlDarALuz = añoNacimientoHijo - añoNacimientoMadre;
    
        // Verificar si la diferencia de edad es al menos 15 años
        if (edadMadreAlDarALuz < 15) {
            console.log("ERROR: La diferencia de edad entre la madre y el hijo debe ser de al menos 15 años.");
            return;
        }


    
        // Mostrar resultados
        console.log(`\nResultados:`);
        console.log(` > Año de nacimiento de la madre: ${añoNacimientoMadre}`);
        console.log(` > Año de nacimiento del hijo: ${añoNacimientoHijo}`);
        console.log(`\n ~ La madre tenía ${edadMadreAlDarALuz} años cuando dio a luz a su hijo.`);
    


        // Calcular la edad actual de la madre y del hijo
        const edadActualMadre = añoActual - añoNacimientoMadre;
        const edadActualHijo = añoActual - añoNacimientoHijo;
    
        console.log(`\nInformación adicional:`);
        console.log(` ~ Actualmente, la madre tiene ${edadActualMadre} años.`);
        console.log(` ~ Actualmente, el hijo tiene ${edadActualHijo} años.`);
        
    }
    
    calcularEdadMadre();
