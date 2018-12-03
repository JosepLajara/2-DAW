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
    puntuacion=String(getScore()-parseInt(puntuacion));
    document.getElementById('score').textContent='Score:'+String(getScore()-parseInt(puntuacion));
}






//Main code

//Numero de cuadrados en el que se divide la imagen
let nivel = getNumberPiecesFromUser();




