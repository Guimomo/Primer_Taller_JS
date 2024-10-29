//EJERCICIO 37

//Un camión transporta 25 cajas de repuestos de carros. Si cada caja pesa 748 Kg ¿cuántos
//Kg transporta?

console.log(`
    CÁLCULO DEL PESO TOTAL DE LA CARGA DEL CAMIÓN
    ---------------------------------------------`);
    
    function calcularPesoCarga() {
        // Datos del problema
        const numeroCajas = 25;
        const pesoPorCaja = 748; // en Kg
    
        // Cálculo del peso total
        const pesoTotal = numeroCajas * pesoPorCaja;
    
        // Mostrar resultados
        console.log(`Datos:`);
        console.log(` > Número de cajas: ${numeroCajas}`);
        console.log(` > Peso por caja: ${pesoPorCaja} Kg`);
    
        console.log(`\nResultado:`);
        console.log(` ~ El camión transporta un total de: ${pesoTotal} Kg`);
    
        // Información adicional
        console.log(`\nInformación adicional:`);
        console.log(` ~ Peso en toneladas: ${(pesoTotal / 1000).toFixed(2)} toneladas`);
    }
    
calcularPesoCarga();
