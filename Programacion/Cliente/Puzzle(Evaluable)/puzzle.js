//Apartado de funciones

//Funciones auxiliares

/**
 * Funcion que cuando termina el juego, en todos los casos, muestra un alert para que recargue la pagina
 * @param mensaje {string}
 */
function reload_page(mensaje){
    if(mensaje===undefined){
        mensaje="Se te ha acabado el tiempo, has perdido";
    }

    if(!alert(mensaje)) {
        window.location.reload();
    }
}

/**
 * Funcion que añade un temporizador para el puzzle y lo muestra
 */
function timer_clock(n_piezas) {
    let display = document.getElementById('time');
    //Tiempo en segundos que se muestra
    let time = n_piezas*4;
    //Tiempo en milisegundos
    let tiempo = time*1000;
    //Ajusta el tiempo que se tiene para completar el puzle al display
    tiempo=tiempo+1300;
    function startTimer(duration, display) {
        let timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = "Remaining time: "+minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }
    startTimer(time, display);
    setTimeout(reload_page,tiempo);

}

/**
 * Funcion que ejecuta el codigo cuando se hace click sobre una pieza
 * @param event
 */
function clickCelda(event){
    let numRowsCol = Math.sqrt(num_piezas);
    let pieza=event.target.id;
    let piece=event.target;
    estado_puzle.push(piece.id);
    marcador=getScore();
    piece.style.borderColor = 'red';
    pulsado.push(pieza);
    if(pulsado.length===2){
        if(pulsado[0]!==pulsado[1]){
            let piece1 = document.getElementById(pulsado[0]);
            let bg_piece1 = piece1.style.backgroundPosition;
            let piece2 = document.getElementById(pulsado[1]);
            let bg_piece2 = piece2.style.backgroundPosition;

            piece1.style.backgroundPosition=bg_piece2;
            piece2.style.backgroundPosition=bg_piece1;
            decreaseScore(1);
            pulsado.splice(0);
            for(let i=0;i<numRowsCol;i++){
                for(let j=0;j<numRowsCol;j++){
                    let pieza = document.getElementById(i+','+j);
                    pieza.style.borderColor = 'black';
                    checkIfSolution(correccion,estado_puzle);
                }
            }
            if((marcador-1)===0){
                alert("Has perdido");
            }
            checkIfSolution(correccion,estado_puzle);
        }else{
            checkIfSolution(correccion,estado_puzle);
            pulsado.splice(0);
            for(let i=0;i<numRowsCol;i++){
                for(let j=0;j<numRowsCol;j++){
                    let pieza = document.getElementById(i+','+j);
                    pieza.style.borderColor = 'black';
                    checkIfSolution(correccion,estado_puzle);
                }
            }
            if(marcador===0){
                alert("Has perdido");
            }
        }
    }
    if(piece.style.borderColor==="green"){
        piece.removeEventListener("click",clickCelda)
    }
}

function RemoveClick(pieza){
    if(pieza.style.borderColor==="green"){
        pieza.removeEventListener("click",clickCelda)
    }else{
        pieza.addEventListener("click",clickCelda);
    }
}

// 1.	Selección de la dificultad del puzzle (0.5 puntos)

/**
 * Funcion que comprueba que se ha recibido un numero y tiene una raiz cuadrada
 * @returns {integer}
 */
function getNumberPiecesFromUser(){
    let salir = false;
    let dificultad='';
    while (!salir) {
        if(dificultad==='' || Number.isInteger(Math.sqrt(dificultad)%1)===false || dificultad<=1){
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
 * @returns {integer}
 */
function getMaxScore(num_piezas){
    return num_piezas*2;
}

/**
 * Funcion que devuelve la puntuacion
 * @returns {integer}
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
 * @returns {array}
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
 * @returns {array}
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
    let myTable = document.body.lastChild.previousSibling;
    console.log(myTable);
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
            td.style.backgroundImage = 'url('+direccion+')';
            td.id = i + "," + j;
            puzzle_pos.push([i,j]);
            td.appendChild(document.createTextNode("Casilla " + i + "," + j));
            tr.appendChild(td);
        }
    }
    myTable.before(table);
}

/**
 *
 * Funcion que devuelve el desplazamiento del fondo correspondiente para una celda
 * Coloca la imagen de fondo
 * @param pieza int
 * @param ancho int
 * @param alto int
 * @param n_piezas int
 * @returns {array}
 */
function pieceToOffset(pieza,ancho,alto,n_piezas){

    let numRowsCol = Math.sqrt(n_piezas);
    let piece = pieceNumberToRowsColumns(pieza,n_piezas);
    let movimiento = [];

    movimiento.push(parseInt((ancho/numRowsCol)*piece[1]),parseInt((alto/numRowsCol)*piece[0]));
    return movimiento;

}

/**
 * Funcion que devuelve el desplazamiento del fondo del puzzle
 * @param ancho int
 * @param alto int
 * @param n_piezas int
 * @returns {array}
 */
function createReferenceSolution(ancho,alto,n_piezas){
    let total_position = [];
    for(let i=0;i<n_piezas;i++){
        total_position.push(pieceToOffset(i,ancho,alto,n_piezas));
    }
    return total_position;
}

/**
 *Funcion que pinta la imagen como fondo de la tabla
 * @param desplazamientos array
 */
function drawContentPuzzle(desplazamientos){

    let piece_position = [];
    for(let i=0;i<desplazamientos.length;i++){
        piece_position.push([pieceNumberToRowsColumns(i,desplazamientos.length),[desplazamientos[i][0], desplazamientos[i][1]]]);
    }
    for(let i=0;i<piece_position.length;i++){
        let pieza=document.getElementById(piece_position[i][0]);
        pieza.style.backgroundPosition = "-"+piece_position[i][1][0]+"px -"+piece_position[i][1][1]+"px";
    }

}

//5.	Lógica del juego (1.5 puntos)
/**
 * Funcion que comprueba si es puzzle esta terminado
 * @param solucion {array}
 * @param estado {array}
 * @returns {boolean}
 */
function checkIfSolution(solucion,estado){
    let contador=0;
    let messaje="Enhorabuena, has ganado";
    for(let i=0;i<solucion.length;i++){
        let pieza=document.getElementById(estado[i]);
        let posX=Math.abs(parseInt(pieza.style.backgroundPositionX));
        let posY=Math.abs(parseInt(pieza.style.backgroundPositionY));
        let solution = String(solucion[i]).split(',');
        let solX = parseInt(solution[0]);
        let solY = parseInt(solution[1]);
        if(posX===solX && posY===solY){
            pieza.style.borderColor = 'green';
            contador++;
        }
        RemoveClick(pieza);
    }
    if(contador===solucion.length){
        reload_page(messaje);
    }
    console.log(contador);
}

/**
 * Función carga dinámicamente una imagen en JavaScript a partir
 * de una URL. Cuando la imagen está cargada en el objeto, se dispara
 * un evento que ejecuta la lógica del juego.
 * @param imagen String
 * @param n_piezas Int
 */
function initGame(imagen,n_piezas){
    let img = new Image();
    img.addEventListener('load',function(){
        gameLogic(img,n_piezas);
    });
    img.src = imagen;
}

/**
 * Funcion que contiene la logica del puzzle (movimiento de piezas y verificacion que estan correctas)
 * @param imagen object
 * @param n_piezas int
 */
function gameLogic(imagen,n_piezas){
    let puntuacion=getMaxScore(n_piezas);
    updateScore(puntuacion);
    let numRowsCol = Math.sqrt(n_piezas);
    let ancho = imagen.width;
    let alto = imagen.height;
    let imag = imagen.src.split('/');
    let img = imag[imag.length-1];
    correccion = createReferenceSolution(ancho,alto,n_piezas);
    let desplazamientos = createReferenceSolution(ancho,alto,n_piezas);
    shufle(desplazamientos);
    createPuzzleLayout(n_piezas,ancho,alto,img);
    drawContentPuzzle(desplazamientos);
    timer_clock(n_piezas);
    for(let i=0;i<numRowsCol;i++){
        for(let j=0;j<numRowsCol;j++){
            let piece = document.getElementById(i+','+j);
            estado_puzle.push(piece.id);
            RemoveClick(piece);
        }
    }
    checkIfSolution(correccion,estado_puzle);

}
//Main code

let img= "cat.jpg";
let num_piezas = getNumberPiecesFromUser();
// variables globales (usadas en funcion para evento del click)
let estado_puzle = [];
let pulsado=[];
let marcador=getScore();
let correccion;

initGame(img,num_piezas);







