//EJERCICIO 36

//En el programa de cocina de “Doña Anita” han dado la receta para la preparación de
//bizcocho especial de chocolate. Por cada 100 gramos de harina hay que añadir 10 gramos
//de cacao y un puñado de nueces. Si quiero prepararlos con 20 gramos de chocolate. ¿La
//cantidad de gramos de harina para hacer el bizcocho es?


console.log(`

    CÁLCULO DE INGREDIENTES PARA BIZCOCHO DE CHOCOLATE
    --------------------------------------------------`);
    
    function calcularIngredientes() {

        // Proporciones originales de la receta
        const harinaOriginal = 100; // gramos
        const cacaoOriginal = 10; // gramos
    
        // Cantidad deseada de chocolate (cacao)
        const cacaoDeseado = 20; // gramos
    
        
        // Calcular el factor de escala
        const factorEscala = cacaoDeseado / cacaoOriginal;
    
        // Calcular la cantidad de harina necesaria
        const harinaNecesaria = harinaOriginal * factorEscala;
    


        // Mostrar resultados
        console.log(`Receta original (por cada 100g de harina):`);
        console.log(` > Harina: ${harinaOriginal} gramos`);
        console.log(` > Cacao: ${cacaoOriginal} gramos`);
    
        console.log(`\nCantidad deseada de cacao: ${cacaoDeseado} gramos`);
    
        console.log(`\nResultado:`);
        console.log(` ~ Para ${cacaoDeseado} gramos de cacao, se necesitan:`);
        console.log(`   Harina: ${harinaNecesaria.toFixed(2)} gramos`);
    
        // Información adicional
        console.log(`\nInformación adicional:`);
        console.log(` Factor de escala: ${factorEscala}`);
        console.log(` Nota: También deberás añadir un puñado de nueces proporcionalmente.`);
    }
    
calcularIngredientes();
