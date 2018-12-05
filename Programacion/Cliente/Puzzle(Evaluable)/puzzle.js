//Apartado de funciones

// 1.	Selección de la dificultad del puzzle (0.5 puntos)

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

//4.	Dibujado del puzzle (2 puntos)
/**
 * Funcion que prepara una tabla en html para el puzzle
 * @param n_piezas int
 * @param ancho int
 * @param alto int
 * @param direccion
 */

function createPuzzleLayout(n_piezas,ancho,alto,direccion){
    let numRowsCol = Math.sqrt(getNumberPiecesFromUser());
    let myTable = document.body.lastChild.previousSibling.previousSibling;

    let table = document.createElement('TABLE');
    let puzzle_pos = [];

    let tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
    for (let i = 0; i < numRowsCol; i++) {
        let tr = document.createElement('TR');
        tableBody.appendChild(tr);

        for (let j = 0; j < numRowsCol; j++) {
            let td = document.createElement('TD');
            td.width = ancho;
            td.height = alto;
            td.style='border: 3px solid black; ';
            td.style.backgroundImage = "url('cat.jpg')";
            td.style.backgroundSize = ''+ancho+'px '+alto+'px';

            puzzle_pos.push([i,j]);
            td.appendChild(document.createTextNode("Casilla " + i + "," + j));
            tr.appendChild(td);
        }
    }
    myTable.appendChild(table);
    return table;
}

/**
 * Desordena las piezas del puzzle
 * @param pieza int
 * @param ancho int
 * @param alto int
 * @param n_piezas int
 */
function pieceToOffset(pieza,ancho,alto,n_piezas){
    let numRowsCol = Math.sqrt(getNumberPiecesFromUser());
    let espacio = document.body.lastChild.previousSibling.previousSibling;
    let final_img = document.createElement('IMG');
    let img_segmentada = [];
    final_img.setAttribute("src", "cat.jpg");
    final_img.setAttribute("width", ancho*numRowsCol);
    final_img.setAttribute("height", alto*numRowsCol);

    espacio.appendChild(final_img);
    for(let i=1;i<=numRowsCol;i++){
        for (let j=1;j<=numRowsCol;j++){
            let img_final = document.createElement('IMG');

            img_final.setAttribute("src", "cat.jpg");
            img_final.setAttribute("width", (ancho*j)-(ancho*(j-1)));
            img_final.setAttribute("height", (alto*i)-(alto*(i-1)));

            img_segmentada.push(img_final);
        }
    }

    console.log(img_segmentada);
    for(let imagen of img_segmentada){
        espacio.appendChild(imagen);

    }


}
//Main code
pieceNumberToRowsColumns();
pieceToOffset(getNumberPiecesFromUser(),200,200,4);









