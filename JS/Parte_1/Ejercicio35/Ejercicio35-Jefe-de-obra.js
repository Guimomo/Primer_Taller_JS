//EJERCICIO 35

//Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada
//uno por $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000.
//Después de pagar le sobran $91000. ¿Cuánto dinero tenía?

console.log(`
    CÁLCULO DEL DINERO TOTAL DEL JEFE DE OBRA
    -----------------------------------------`);
    
    function calcularDineroTotal() {

        // Definir los precios y cantidades
        const precioLlavesHexagonales = 11500;
        const cantidadLlavesHexagonales = 5;
        const precioBomba = 1168000;
        const precioCajaPernos = 87000;
        const cantidadCajasPernos = 3;
        const dineroSobrante = 91000;
    

        // Calcular el total gastado
        const gastoLlaves = precioLlavesHexagonales * cantidadLlavesHexagonales;
        const gastoPernos = precioCajaPernos * cantidadCajasPernos;
        const gastoTotal = gastoLlaves + precioBomba + gastoPernos;
    

        // Calcular el dinero total que tenía
        const dineroTotal = gastoTotal + dineroSobrante;
    

        // Mostrar resultados
        console.log(`Desglose de gastos:`);
        console.log(` > Llaves hexagonales: ${cantidadLlavesHexagonales} x $${precioLlavesHexagonales} = $${gastoLlaves}`);
        console.log(` > Bomba: $${precioBomba}`);
        console.log(` > Cajas de pernos: ${cantidadCajasPernos} x $${precioCajaPernos} = $${gastoPernos}`);
        console.log(`\nTotal gastado: $${gastoTotal}`);
        console.log(`Dinero sobrante: $${dineroSobrante}`);
        console.log(`\nResultado:`);
        console.log(` ~ El jefe de obra tenía inicialmente: $${dineroTotal}`);
    

        // Verificación
        console.log(`\nVerificación:`);
        console.log(` Total gastado ($${gastoTotal}) + Dinero sobrante ($${dineroSobrante}) = $${dineroTotal}`);
    }
    
    
calcularDineroTotal();
