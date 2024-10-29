//EJERCICIO 34

//Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un depósito.
//   a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).
//   b. Volumen = PI *(radio^2)* H (altura del depósito).
//El tiempo se encuentra en minutos. Normalmente se mide el volumen en litros y el tiempo
//en segundos.


console.log(`
    CÁLCULO DEL TIEMPO DE LLENADO DE UN DEPÓSITO CILÍNDRICO
    -------------------------------------------------------`);
    
    function calcularTiempoLlenado() {


        // Solicitar datos al usuario
        const radio = parseFloat(prompt("Ingrese el radio del depósito en metros:"));
        const altura = parseFloat(prompt("Ingrese la altura del depósito en metros:"));
        const caudal = parseFloat(prompt("Ingrese el caudal de llenado en litros por segundo:"));
    
        // Verificar si los valores ingresados son números válidos y positivos
        if (isNaN(radio) || isNaN(altura) || isNaN(caudal) || radio <= 0 || altura <= 0 || caudal <= 0) {
            console.log("ERROR: Por favor, ingrese solo valores numéricos positivos.");
            return;
        }
    
        // Calcular el volumen del depósito en metros cúbicos
        const volumenM3 = Math.PI * Math.pow(radio, 2) * altura;
    
        // Convertir el volumen a litros
        const volumenLitros = volumenM3 * 1000;
    
        // Calcular el tiempo de llenado en segundos
        const tiempoSegundos = volumenLitros / caudal;
    
        // Convertir el tiempo a minutos
        const tiempoMinutos = tiempoSegundos / 60;
    


        // Mostrar resultados
        console.log(`\nResultados:`);
        console.log(` > Radio del depósito: ${radio.toFixed(2)} metros`);
        console.log(` > Altura del depósito: ${altura.toFixed(2)} metros`);
        console.log(` > Caudal de llenado: ${caudal.toFixed(2)} litros/segundo`);
        console.log(`\n ~ Volumen del depósito: ${volumenLitros.toFixed(2)} litros`);
        console.log(` ~ Tiempo estimado de llenado: ${tiempoMinutos.toFixed(2)} minutos`);
    
        // Información adicional
        console.log(`\nInformación adicional:`);
        console.log(` ~ Volumen en metros cúbicos: ${volumenM3.toFixed(4)} m³`);
        console.log(` ~ Tiempo de llenado en segundos: ${tiempoSegundos.toFixed(2)} segundos`);
    }
    
calcularTiempoLlenado();
