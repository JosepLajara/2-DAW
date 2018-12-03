//Apartado de funciones
/**
 * Funcion que comprueba que se ha recibido un numero y tiene una raiz cuadrada
 */
function getNumberPiecesFromUser(){
    let salir = false;
    do {
        let dificultad = prompt("Introduzca un numero de piezas para el puzzle", 9);
        if(dificultad.length===0 || Number.isInteger(Math.sqrt(dificultad)%1)===false){
            console.log("Entra en prompt");
            dificultad = prompt("Introduzca un numero que tenga raiz cuadrada perfecta", 9);
        }else{
            salir=true;
            return dificultad;
        }
    }while (!salir);
}

/**
 * Funcion que devuelve la maxima puntuacion
 * @type {*}
 */
function getMaxScore(num_piezas){
    return num_piezas*2;
}

/**
 * Funcion que devuelve la puntuacion
 */

function getScore(){
    let score = (document.getElementById('score').textContent).split(':');

    return parseInt(score[1]);
}

/**
 * Funcion que actualiza la puntuación
 */
function updateScore(puntuacion){
    puntuacion= String(puntuacion);
    document.getElementById('score').textContent='Score:'+puntuacion;
}

/**
 * Funcion que decrementa la puntuacion
 */
function decreaseScore(puntuacion){
    document.getElementById('score').textContent='Score:'+String(getScore()-parseInt(puntuacion));
}

/**
 * Funcion que o	Devolverá una nueva anchura y altura teniendo en cuenta que la dimensión
 * (anchura o altura) más grande medirá exactamente 200 y que se debe mantener la relación
 * de aspecto entre la anchura y altura actual.
 * @param altura integer
 * @param ancho integer
 */
function getNewSizes(altura,ancho){
    if(altura<=200 && ancho<=200){
        let salir = false;
        let relacion = (ancho/altura).toFixed(3);
        let nueva_altura = Math.floor(Math.random() * 200) + 1;
        let nuevo_ancho = Math.floor(Math.random() * 200) + 1;
        let relacion2 = (nuevo_ancho/nueva_altura).toFixed(3);
        console.log('altura y ancho 1: '+altura+","+ancho+' relacion 1 '+relacion+' altura y ancho 2: '+nueva_altura+","+nuevo_ancho +' relacion 2 '+relacion2);
        do {
            if(relacion !== relacion2){
                nueva_altura = Math.floor(Math.random() * 200) + 1;
                nuevo_ancho = Math.floor(Math.random() * 200) + 1;
                relacion2 = (nuevo_ancho/nueva_altura).toFixed(3);
            }else{
                salir=true;
                return array=[nueva_altura,nuevo_ancho];
            }
        }while(!salir);
    }else {
        throw error('La altura y anchura maxima es 200');
    }

}

/**
 * Funcion que desordena un array
 * @param array
 * @returns {*}
 */
function shufle(array){

    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

/**
 * Funcion que devuelve una posición aleatoria de la tabla para una pieza
 * @param pieza
 */
function pieceNumberToRowsColumns(pieza){
    let numRowsCol = Math.sqrt(getNumberPiecesFromUser());
    //Crea un array 2D para las posiciones del puzzle y lo desordena
    let cells = [];
    for(let i=0;i<numRowsCol;i++){
        for(let j=0;j<numRowsCol;j++){
            cells.push([i,j]);
        }
    }
    let shuffle_array=shufle(cells);
    //devuelve una posición aleatoria del puzzle
    let aux=shuffle_array.length;
    let random=Math.floor(Math.random()*aux);
    return piece = [pieza,shuffle_array[random]];
}

//Main code
pieceNumberToRowsColumns();
console.log(pieceNumberToRowsColumns([1,2]));









