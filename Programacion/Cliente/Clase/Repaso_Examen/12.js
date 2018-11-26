//Inicializacion de variables

let myMap = new Map();

let tiradasn=1000000000;

/**
 *
 * @param tiradas int
 * Simula las tiradas y guarda el numero de veces que ha salido cada número
 */
//Simula las tiradas y guarda el numero de veces que ha salido cada número
function tiradas(tiradas) {
    //Inicializa los id del map en 0
    for (let i=1;i<=6;i++) {
        myMap.set(i,0);
    }
    //Genera las tiradas y guarda los resultados en el map
    for (let i=0;i<=tiradas;i++){
        let random=Math.floor((Math.random() * 6) + 1);

        myMap.set(random,myMap.get(random)+1);
    }

    //Devuelve lo almacenado en el map
    return myMap;

}

console.log(tiradas(tiradasn));