//Apartado de funciones

// 1.	Selección de la dificultad del puzzle (0.5 puntos)

/**
 * Funcion que comprueba que se ha recibido un numero y tiene una raiz cuadrada
 */
function getNumberPiecesFromUser(){
    let salir = false;
    let dificultad='';
    while (!salir) {
        if(dificultad==='' || Number.isInteger(Math.sqrt(dificultad)%1)===false){
            dificultad = parseInt(prompt("Introduzca un numero que tenga raiz cuadrada perfecta", 9));
        }else{
            salir=true;
        }
    }
    return dificultad;
}

//2.	Funciones de manipulación de la puntuación (1 punto)

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

//3.	Funciones auxiliares (1 punto)

/**
 * Funcion que o	Devolverá una nueva anchura y altura teniendo en cuenta que la dimensión
 * (anchura o altura) más grande medirá exactamente 200 y que se debe mantener la relación
 * de aspecto entre la anchura y altura actual.
 *
 * Redimensiona la pieza para que la preview no sea más de 200px (regla de 3)
 * @param altura integer
 * @param ancho integer
 */
function getNewSizes(altura,ancho){
    /*
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
*/
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
 * Funcion que pide una pieza y devuelve su valor en (ej. [0,2])
 * @param pieza
 */
function pieceNumberToRowsColumns(pieza,n_piezas){
    let numRowsCol = Math.sqrt(n_piezas);
    let pieza_array = [];
    let contador=0;

    for(let i=0;i<numRowsCol;i++){
        for(let j=0;j<numRowsCol;j++){
            if(contador===pieza){
                pieza_array.push(i,j);
            }
            contador++;
        }
    }

    return pieza_array;

}

//4.	Dibujado del puzzle (2 puntos)
/**
 * Funcion que prepara una tabla en html para el puzzle
 * @param n_piezas int
 * @param ancho int
 * @param alto int
 * @param direccion string
 */

function createPuzzleLayout(n_piezas,ancho,alto,direccion){
    let numRowsCol = Math.sqrt(n_piezas);
    let myTable = document.body.lastChild.previousSibling.previousSibling;

    let table = document.createElement('TABLE');
    table.id="table";
    let puzzle_pos = [];

    let tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
    for (let i = 0; i < numRowsCol; i++) {
        let tr = document.createElement('TR');
        tableBody.appendChild(tr);

        for (let j = 0; j < numRowsCol; j++) {
            let td = document.createElement('TD');
            td.width = ancho/numRowsCol;
            td.height = alto/numRowsCol;
            td.style='border: 3px solid black; ';
            td.style.backgroundImage = direccion;
            td.id = i + "," + j;
            puzzle_pos.push([i,j]);
            td.appendChild(document.createTextNode("Casilla " + i + "," + j));
            tr.appendChild(td);
        }
    }
    myTable.appendChild(table);
}

/**
 *
 * Funcion que devuelve el desplazamiento del fondo correspondiente para una celda
 * Coloca la imagen de fondo
 * @param pieza int
 * @param ancho int
 * @param alto int
 * @param n_piezas int
 */
function pieceToOffset(pieza,ancho,alto,n_piezas){

    let numRowsCol = Math.sqrt(n_piezas);
    let piece = pieceNumberToRowsColumns(pieza,n_piezas);
    let movimiento = [];

    movimiento.push(parseInt((ancho/numRowsCol)*piece[0]),parseInt((alto/numRowsCol)*piece[1]));
    return movimiento;

}

/**
 * Funcion que devuelve el desplazamiento del fondo del puzzle
 * @param ancho int
 * @param alto int
 * @param n_piezas int
 */
function createReferenceSolution(ancho,alto,n_piezas){
    let total_position = [];
    for(let i=0;i<n_piezas;i++){
        total_position.push(pieceToOffset(i,ancho,alto,n_piezas));
    }
    return total_position;
}

function drawContentPuzzle(desplazamientos){
    let numRowsCol= Math.sqrt(parseInt(getNumberPiecesFromUser()));

    for(let i=0;i<numRowsCol;i++){
        for(let j=0;j<numRowsCol;j++){
            let piece= document.getElementById(i+','+j);
            console.log(piece);
            piece.style.backgroundPosition = "-"+desplazamientos[0]+"px -"+desplazamientos[1]+"px";
        }
    }
}
//Main code
let ancho=958;
let alto=1277;
let num_piezas = getNumberPiecesFromUser();
let desplazamientos = createReferenceSolution(ancho,alto,num_piezas);

createPuzzleLayout(num_piezas,ancho,alto,"url('cat.jpg')");

drawContentPuzzle(desplazamientos);








