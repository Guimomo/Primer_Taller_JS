//EJERCICIO 50

//Considere dos variables llamadas temperatura y presión. Escriba una sentencia if-else que
//muestre en pantalla la palabra Alarma si la variable presión es mayor a 200 o si la variable
//temperatura es mayor a 100. En caso contrario, se debe mostrar en pantalla la palabra normal.

console.log(`
    SISTEMA DE ALARMA POR TEMPERATURA Y PRESIÓN
    -------------------------------------------`);

function verificarAlarma() {
    // Solicitar información al usuario
    const temperatura = parseFloat(prompt("Ingrese la temperatura:"));
    const presion = parseFloat(prompt("Ingrese la presión:"));

    // Verificar si los valores ingresados son números válidos
    if (isNaN(temperatura) || isNaN(presion)) {
        console.log("ERROR: Por favor, ingrese solo valores numéricos.");
        return;
    }

    // Verificar las condiciones de alarma
    const alarma = presion > 200 || temperatura > 100;

    // Mostrar resultados
    console.log(`\nResultados:`);
    console.log(` > Temperatura: ${temperatura}`);
    console.log(` > Presión: ${presion}`);
    console.log(`\n ~ Estado: ${alarma ? "Alarma" : "Normal"}`);
}

verificarAlarma();
