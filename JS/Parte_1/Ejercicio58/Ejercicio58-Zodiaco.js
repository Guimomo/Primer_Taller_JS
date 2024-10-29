//EJERCICIO 58

//Se desea realizar una aplicación que ingrese el nombre del mes y mostrar que signo
//zodiacal pertenece, para ello usar if_else anidados.

console.log(`
    DETERMINACIÓN DEL SIGNO ZODIACAL
    --------------------------------`);

function determinarSignoZodiacal() {
    // Solicitar información al usuario
    const mes = prompt("Ingrese el nombre del mes:").toLowerCase();



    // Determinar signo zodiacal
    let signo;
    if (mes === 'marzo' || mes === 'abril') {
        signo = 'Aries';

    } else if (mes === 'abril' || mes === 'mayo') {
        signo = 'Tauro';

    } else if (mes === 'mayo' || mes === 'junio') {
        signo = 'Géminis';

    } else if (mes === 'junio' || mes === 'julio') {
        signo = 'Cáncer';

    } else if (mes === 'julio' || mes === 'agosto') {
        signo = 'Leo';

    } else if (mes === 'agosto' || mes === 'septiembre') {
        signo = 'Virgo';

    } else if (mes === 'septiembre' || mes === 'octubre') {
        signo = 'Libra';

    } else if (mes === 'octubre' || mes === 'noviembre') {
        signo = 'Escorpio';

    } else if (mes === 'noviembre' || mes === 'diciembre') {
        signo = 'Sagitario';

    } else if (mes === 'diciembre' || mes === 'enero') {
        signo = 'Capricornio';

    } else if (mes === 'enero' || mes === 'febrero') {
        signo = 'Acuario';

    } else if (mes === 'febrero' || mes === 'marzo') {
        signo = 'Piscis';

    } else {

        console.log("ERROR: Mes no válido.");
        return;
    }


    
    // Mostrar resultados
    console.log(`\nResultados:`);
    console.log(` > Mes ingresado: ${mes}`);
    console.log(`\n ~ Signo zodiacal: ${signo}`);
}

determinarSignoZodiacal();