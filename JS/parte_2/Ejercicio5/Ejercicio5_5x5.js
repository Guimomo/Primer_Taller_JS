//EJERCICIO #5

//Crea una función que genere la tabla de multiplicar del número 5, no se debe mostrar 5 * 5, nos debe mostrar el resultado para las demás multiplicaciones.


//función anonima...

(()=>{

    let numero, limit;

    numero = parseInt(prompt("Ingrese un número entero positivo:"));

    inicio = parseInt(prompt("Ingrese un número entero que determine el inicio de la tabla:"));

    limit = parseInt(prompt("Ingresa un número entero positivo que determine el limite de la tabla:"));


    if ( isNaN(numero) || numero <= 0 || isNaN(inicio) || inicio <= 0 || isNaN(limit) || limit <= 0 ) {

        console.log("ERROR: Se deben ingresar valores númericos positivos válidos...");
    
    } 

    if (inicio > limit ){

        console.log("ERROR: El de inicio debe ser menor que el valor limite...");

    }

    if (limit > 100){

        console.log("ERROR: El valor limite debe ser menor igual que 100...");
        

    } else {

    for (let multi = inicio; multi <= limit ; multi++){

        // if (multi === numero) {

        //     continue; //El continue permitica que el siclo continue saltandose el 5...
        // }

        console.log(`${numero} x ${multi} = ${ numero * multi }`);
        
        
    }

}

}

)(); //es necesario el punto y coma para las funciones anonimas auto ejecutables
