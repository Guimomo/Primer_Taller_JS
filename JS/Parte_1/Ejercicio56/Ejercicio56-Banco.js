//EJERCICIO 56

//Un banco paga intereses a los depósitos dependiendo del saldo. Si el saldo es menor a
//$100.000 se paga un interés anual de 3%, pero si su saldo es mayor a $100.000 se paga
//un interés anual de 4%. Al final mostrar el saldo final y el interés pagado.


console.log(`

    CÁLCULO DE INTERÉS BANCARIO
    (3% para saldos < $100.000, 4% para saldos >= $100.000)
    ------------------------------------------------------`);

function calcularInteresBancario() {

    // Solicitar información al usuario
    const saldo = parseFloat(prompt("Ingrese el saldo de la cuenta:"));


    // Verificar si el valor ingresado es válido
    if (isNaN(saldo) || saldo < 0) {
        console.log("ERROR: Por favor, ingrese un saldo válido.");
        return;
    }


    // Calcular interés
    const tasaInteres = saldo < 100000 ? 0.03 : 0.04;
    const interesPagado = saldo * tasaInteres;
    const saldoFinal = saldo + interesPagado;

    
    // Mostrar resultados
    console.log(`\nResultados:`);
    console.log(` > Saldo inicial: $${saldo.toFixed(2)}`);
    console.log(` > Tasa de interés anual: ${(tasaInteres * 100).toFixed(1)}%`);
    console.log(` > Interés pagado: $${interesPagado.toFixed(2)}`);
    console.log(`\n ~ Saldo final: $${saldoFinal.toFixed(2)}`);
}

calcularInteresBancario();
