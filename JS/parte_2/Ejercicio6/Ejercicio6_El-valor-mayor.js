//EJERCICIO #6

//Crea una función de nos devuelva el elemento mayor de un arreglo de números.

let numeros = [10, 25, 99, 1, 75, 3];

function Mayor (arreglo) {

    let mayor = arreglo[0];

    for (let i = 0; i < arreglo.length; i++) {
        


        if (mayor < arreglo[i]) {

            mayor = arreglo[i];

        }
        


    }
    

    console.log(`El número mayor es ${mayor}`);
    

}

Mayor(numeros);
